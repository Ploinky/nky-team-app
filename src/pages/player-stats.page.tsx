import { Table } from "@/components/Table"
import { getPlayerStatsFromMatches, PlayerStats } from "@/utilities"
import { oinky_players } from "../../data/oinky-players"
import { splits } from "../../data/splits"
import { BlankEnv, BlankInput } from "hono/types"
import { Context } from "hono"
import { Layout } from "@/components/Layout"

export function PlayerStatsPage(c: Context<BlankEnv, "/players", BlankInput>) {
  const allPlayersAllRoles = oinky_players.map((op) => {
    return {
      name: op.name,
      puuid: op.puuid,
      roles: new Set(splits
        .flatMap(s => s.matches)
        .flatMap(m => m.matchData.info.participants)
        .filter(p => p.puuid === op.puuid)
        .map(p => p.teamPosition))
    }
  })

  const stats = allPlayersAllRoles.flatMap((p) => Array.from(p.roles).flatMap((role) => getPlayerStatsFromMatches(splits.flatMap(s => s.matches), p.puuid, role)))

    return c.html(
        <Layout>
          <h2>Players</h2>
          <Table<PlayerStats>
            columns={[
              {header: "Name", fun: (s) => s.name},
              {header: "Role", fun: (s) => "" + s.role},
              {header: "GP", fun: (s) => "" + s.gamesPlayed},
              {header: "W%", fun: (s) => "" + s.winPercentage + "%"},
              {header: "KDA", fun: (s) => "" + s.kda},
              {header: "KP%", fun: (s) => "" + s.kp + "%"},
              {header: "DS%", fun: (s) => "" + s.damageShare + "%"},
              {header: "DPM", fun: (s) => "" + s.damagePerMinute},
              {header: "GPM", fun: (s) => "" + s.goldPerMinute},
              {header: "Efficiency", fun: (s) => "" + s.efficiency},
              {header: "VSM", fun: (s) => "" + s.visionScorePerMinute},
              {header: "NS", fun: (s) => "" + s.nexusTakedowns},
              {header: "3", fun: (s) => "" + s.tripleKills},
              {header: "4", fun: (s) => "" + s.quadraKills},
              {header: "5", fun: (s) => "" + s.pentaKills},
            ]}
            values={stats.sort((a, b) => b.efficiency - a.efficiency)}
            rowLink={(t) => "/players/" + t.puuid}
          />
        </Layout>
    )
}