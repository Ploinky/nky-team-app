import { Context } from "hono"
import { BlankEnv, BlankInput } from "hono/types"
import { oinky_players } from "../../data/oinky-players"
import { splits } from "../../data/splits"
import { Layout } from "../components/Layout"
import { Card } from "@/components/Card"
import { css } from "hono/css"

const cardGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export function PlayerDetailPage(c: Context<BlankEnv, "/players/:puuid", BlankInput>) {
  const puuid = c.req.param("puuid")
  
  const player = oinky_players.find(o => o.puuid === puuid)

  if(!player) {
    return c.notFound()
  }

  const pms = splits.flatMap(s => s.matches).flatMap(m => m.matchData.info.participants).filter(p => p.puuid === player.puuid)

  return c.html(
    <Layout>
      <h1>{player.name}</h1>
      <h2>Lifetime stats</h2>
      <div class={cardGrid}>
        <Card label="total kills:" value={"" + pms.map(pm => pm.kills).reduce((pv, cv) => pv + cv)} />
        <Card label="total deaths:" value={"" + pms.map(pm => pm.deaths).reduce((pv, cv) => pv + cv)} />
        <Card label="total assists:" value={"" + pms.map(pm => pm.assists).reduce((pv, cv) => pv + cv)} />
      </div>
    </Layout>
  )
}