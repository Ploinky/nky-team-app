import { Context } from "hono"
import { oinky_players } from "../../data/oinky-players"
import { splits } from "../../data/splits"
import { Layout } from "../components/Layout"
import { isOinkyWin, hasPlayer, getPlayerStatsFromMatches, PlayerStats } from "../utilities"
import { BlankEnv, BlankInput } from "hono/types"
import { Table } from "@/components/Table"
import { css, cx } from "hono/css"
import { GoldGraph } from "@/components/GoldGraph"

const addonClass = css`
  display: grid;
  grid-template-areas:
    "result logo"
    "detail logo"
  ;

  #result {
    grid-area: result;
    text-align: end;
  }

  img {
    grid-area: logo;
    padding-left: 1rem;
    margin: auto;
  }

  #detail {
    grid-area: detail;
  }
`

const winOrDefeatClass = css`
  font-size: 2rem;
`

const winClass = css`color: var(--color-success);`
const defeatClass = css`color: var(--color-failure);`

export function MatchDetailPage(c: Context<BlankEnv, "/matches/:matchId", BlankInput>) {
  const match = splits.flatMap(s => s.matches).find(m => m.matchData.metadata.matchId === c.req.param("matchId"))

  if(!match) {
    return c.notFound()
  }
  c.header("Cache-Control", "max-age=604800")
  return c.html(
    <Layout
      addon={
        <div class={addonClass}>
          <span id="result" class={cx(winOrDefeatClass, isOinkyWin(match) ? winClass : defeatClass )}>{isOinkyWin(match) ? "Victory" : "Defeat"}</span>
          <span id="detail">vs {match.vs.name} • {new Date(match.matchData.info.gameStartTimestamp).toLocaleDateString()}</span>
          <img src={match.vs.logo} />
        </div>
        
      }
    >
      <h1>Match Details</h1>

      <h2>Gold Graph</h2>
      <GoldGraph timeline={match.timeline} />

      <h2>Player performance</h2>
      <Table<PlayerStats & {name: string}>
        columns={[
          {header: "Name", fun: (p) => p.name},
          {header: "KDA", fun: (p) => "" + p.kda},
          {header: "KP%", fun: (p) => "" + p.kp + "%"},
          {header: "DS%", fun: (p) => "" + p.damageShare + "%"},
          {header: "DPM", fun: (p) => "" + p.damagePerMinute},
          {header: "GPM", fun: (p) => "" + p.goldPerMinute},
          {header: "Efficiency", fun: (p) => "" + p.efficiency},
          {header: "VPM", fun: (p) => "" + p.visionScorePerMinute}
        ]}
        values={oinky_players.map((p) => {
          if(!hasPlayer(match, p.puuid)) {
            return null
          }

          return {...getPlayerStatsFromMatches([match], p.puuid), name: p.name}
        }).filter((s) => s !== null)}
      />
    </Layout>
  )
}