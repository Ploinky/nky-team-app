import match1 from "./match1.json"
import match1Timeline from "./match1_timeline.json"
import match2 from "./match2.json"
import match2Timeline from "./match2_timeline.json"

const fx = {name: "EGT FeroX", tag: "FX", logo: "/static/fx.jpg"}

const winter2025Split = {
    teams: {
        fx
    },
    matches: [
        {matchData: match1, timeline: match1Timeline, vs: fx},
        {matchData: match2, timeline: match2Timeline, vs: fx},
        // {matchData: match1, timeline: match1Timeline, vs: gt_gaia},
    ],
    name: "winter2025"
}

export {winter2025Split}