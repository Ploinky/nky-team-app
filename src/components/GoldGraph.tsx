import { collect, isOinkyPlayer, isOinkyPlayerId } from "@/utilities"
import { MatchTimeline } from "../../global"

export interface GoldGraphProps {
    timeline: MatchTimeline
}

interface GoldGraphSectionProps {
    x1: number
    x2: number
    y1: number
    y2: number
    center: number
}
function GoldGraphSection(props: GoldGraphSectionProps) {
    const tx = Math.abs(props.x2 - props.x1);
    const ty = Math.abs(props.y2 - props.y1);

    const dy = ty / tx

    if((props.y1 > props.center && props.y2 < props.center)
        || (props.y1 < props.center && props.y2 > props.center)) {
        const x = Math.abs(props.y1 - props.center) / dy
        
        return ( 
            <>
                <line stroke-width="2" vector-effect="non-scaling-stroke" x1={props.x1} x2={props.x1 + x} y1={props.y1} y2={props.center} stroke={props.y1 > props.center ? "green" : "red"} />
                <polygon fill={props.y1 > props.center ? "var(--color-success)" : "var(--color-failure)"} stroke={props.y1 > props.center ? "var(--color-success)" : "var(--color-failure)"} vector-effect="non-scaling-stroke" points={`${props.x1} ${props.center} ${props.x1} ${props.y1} ${props.x1 + x} ${props.center} ${props.x1 + x} ${props.center}`} />
                <polygon fill={props.y2 > props.center ? "var(--color-success)" : "var(--color-failure)"} stroke={props.y2 > props.center ? "var(--color-success)" : "var(--color-failure)"} vector-effect="non-scaling-stroke" points={`${props.x1 + x} ${props.center} ${props.x1 + x} ${props.center} ${props.x2} ${props.y2} ${props.x2} ${props.center}`} />
            </>
        )
    }
    
    return (
        <>
            <line stroke-width="2" vector-effect="non-scaling-stroke" x1={props.x1} x2={props.x2} y1={props.y1} y2={props.y2} stroke={props.y2 > props.center ? "green" : "red"} />
            <polygon fill={props.y2 > props.center ? "var(--color-success)" : "var(--color-failure)"} stroke={props.y2 > props.center ? "var(--color-success)" : "var(--color-failure)"} vector-effect="non-scaling-stroke" points={`${props.x1} ${props.center} ${props.x1} ${props.y1} ${props.x2} ${props.y2} ${props.x2} ${props.center}`} />
        </>
    )
}

type IndexString = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"
export function GoldGraph(props: GoldGraphProps) {
    const parts: IndexString[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((pid) => isOinkyPlayerId(props.timeline.info.participants.at(pid)?.puuid + "")).map((p) => "" + (p+1)) as IndexString[]
    
    const partsOther: IndexString[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((pid) => !isOinkyPlayerId(props.timeline.info.participants.at(pid)?.puuid + "")).map((p) => "" + (p+1)) as IndexString[]
    

    if(parts.length !== 5 || partsOther.length !== 5) {
        console.log(props.timeline.info.participants.filter((p) => !isOinkyPlayerId(p.puuid)))
        throw new Error("incorrect number of players found: " + parts.length + ", " + partsOther.length)
    }
    const goldPoints = props.timeline.info.frames.map(
        (f) => parts.map((p) => f.participantFrames[p].totalGold).reduce(collect) - partsOther.map((p) => f.participantFrames[p].totalGold).reduce(collect))
    const max = Math.abs([...goldPoints].sort((a,b) =>Math.abs(b) - Math.abs(a)).at(0) ?? 0)

    return (
        <svg
            width="50%"
            height="400px"
            style={{borderRadius: "2rem", border: "1px solid var(--color-text-muted)", backgroundColor: "var(--color-foreground)"}}
            preserveAspectRatio="none"
            viewBox={"0 0 " + (props.timeline.info.frameInterval * props.timeline.info.frames.length) + " " + (max * 2 * 1.2)}
        >
            {goldPoints.map((gp, i) => i < goldPoints.length - 1 ? (
                <GoldGraphSection
                    x1={i* props.timeline.info.frameInterval}
                    x2={(i+1) * props.timeline.info.frameInterval}
                    y1={max * 1.2  + gp}
                    y2={(max * 1.2 + goldPoints[i+1])}
                    center={max * 1.2}
                />
            ) : null)}
            <line vector-effect="non-scaling-stroke" stroke="var(--color-text-muted)" x1={0} x2={props.timeline.info.frameInterval * props.timeline.info.frames.length} y1={max*1.2} y2={max*1.2} />
            {(() => {
                const els = []
                for(let i = 5; 60000 * i < props.timeline.info.frameInterval * props.timeline.info.frames.length; i+= 5) {
                    els.push(<line vector-effect="non-scaling-stroke" stroke="var(--color-text-muted)" stroke-width=".2" x1={60000 * i} x2={60000 * i} y1={0} y2={max*2*1.2} />)
                }
                return els
            })()
            }
            {(() => {
                const els = []
                for(let i = 1; 5000 * i < max * 1.2; i += 1) {
                    els.push(<line vector-effect="non-scaling-stroke" stroke="var(--color-text-muted)" stroke-width=".2" x1={0} x2={props.timeline.info.frameInterval * props.timeline.info.frames.length} y1={max * 1.2 + i * 5000} y2={max * 1.2 + i * 5000} />)
                    els.push(<line vector-effect="non-scaling-stroke" stroke="var(--color-text-muted)" stroke-width=".2" x1={0} x2={props.timeline.info.frameInterval * props.timeline.info.frames.length} y1={max * 1.2 - i * 5000} y2={max * 1.2 - i * 5000} />)
                }
                return els
            })()
            }
        </svg>
    )
}