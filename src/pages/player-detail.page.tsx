import { Context } from "hono"
import { BlankEnv, BlankInput } from "hono/types"
import { oinky_players } from "../../data/oinky-players"
import { splits } from "../../data/splits"
import { Layout } from "../components/Layout"

export function PlayerDetailPage(c: Context<BlankEnv, "/players/:puuid", BlankInput>) {
  const puuid = c.req.param("puuid")
  
  const player = oinky_players.find(o => o.puuid === puuid)

  if(!player) {
    return c.notFound()
  }

  const pms = splits.flatMap(s => s.matches).flatMap(m => m.info.participants).filter(p => p.puuid === player.puuid)

  return c.html(
    <Layout>
      <h1>{player.name}</h1>
      <b>total kills:</b> {pms.map(pm => pm.kills).reduce((pv, cv) => pv + cv)}
      <b>total deaths:</b> {pms.map(pm => pm.deaths).reduce((pv, cv) => pv + cv)}
      <b>total assists:</b> {pms.map(pm => pm.assists).reduce((pv, cv) => pv + cv)}
    </Layout>
  )
}