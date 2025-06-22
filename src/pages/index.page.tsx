import { Context } from "hono"
import { oinky_players } from "@/../data/oinky-players"
import { splits } from "@/../data/splits"
import { Layout } from "../components/Layout"
import { isOinkyWin, getPlayerStatsFromMatches, getOinkyMatchParticipationFromSplits, PlayerStats, isOinkyPlayer, getGoldDiff } from "../utilities"
import { Table } from "@/components/Table"
import { Card } from "@/components/Card"
import { css } from "hono/css"
import { Match } from "../../global"
import { spring2025Split } from "../../data/2025spring/split"

const cardGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`
export function IndexPage(c: Context) {
  const stats: Array<PlayerStats & {name: string, puuid: string}> = oinky_players.map((p) => {
    const stats = getPlayerStatsFromMatches(splits.flatMap(s => s.matches), p.puuid)
    return {name: p.name, puuid: p.puuid, ...stats}
  })

  const oinkyMatches = getOinkyMatchParticipationFromSplits(splits)
  const mostKillsMatch = oinkyMatches.sort((a, b) => b.kills - a.kills).at(0);
  const mostAssistsMatch = oinkyMatches.sort((a, b) => b.assists - a.assists).at(0);
  const mostDeathsMatch = oinkyMatches.sort((a, b) => b.deaths - a.deaths).at(0);
  const mostTurretsMatch = oinkyMatches.sort((a, b) => b.turretTakedowns - a.turretTakedowns).at(0);

  const allMatches = spring2025Split.matches.sort((a, b) => b.matchData.info.gameStartTimestamp - a.matchData.info.gameEndTimestamp)

  return c.html(
    <Layout>
      <h2>Recent matches</h2>
      <Table<Match>
        columns={[
          {header: "VS", fun: (t) => <div style={{display: "flex", alignItems: "center", gap: ".5rem"}}><img style={{height: "2rem"}} src={t.vs.logo}></img> {t.vs.tag}</div>},
          {header: "Result", fun: (m) => isOinkyWin(m) ? "Win" : "Defeat", variant: (m) => isOinkyWin(m) ? "success" : "failure"},
          {header: "Date", fun: (m) => new Date(m.matchData.info.gameStartTimestamp).toLocaleDateString()},
          {header: "Duration", fun: (m) => "" + Math.floor(m.matchData.info.gameDuration / 60) + ":" + Math.round(m.matchData.info.gameDuration % 60).toString().padStart(2, "0")},
          {header: "Dragons", fun: (m) => "" + m.matchData.info.participants.filter(isOinkyPlayer).flatMap(p => p.dragonKills).reduce((pv, cv) => pv + cv)},
          {header: "Barons", fun: (m) => "" + m.matchData.info.participants.filter(isOinkyPlayer).flatMap(p => p.baronKills).reduce((pv, cv) => pv + cv)},
          {header: "Gold", fun: (m) => getGoldDiff(m) + "k", variant: (m) => getGoldDiff(m) >= 0 ? "success" : "failure"}
        ]}
        values={allMatches.slice(0, 5)}
        rowLink={(t) => "/matches/" + t.matchData.metadata.matchId}
      />
      <h2>Players</h2>
      <Table<PlayerStats & {name: string, puuid: string}>
        columns={[
          {header: "Name", fun: (s) => s.name},
          {header: "GP", fun: (s) => "" + s.gamesPlayed},
          {header: "W%", fun: (s) => "" + s.winPercentage + "%"},
          {header: "KDA", fun: (s) => "" + s.kda},
          {header: "KP%", fun: (s) => "" + s.kp + "%"},
          {header: "DS%", fun: (s) => "" + s.damageShare + "%"},
          {header: "DPM", fun: (s) => "" + s.damagePerMinute},
          {header: "GPM", fun: (s) => "" + s.goldPerMinute},
          {header: "Efficiency", fun: (s) => "" + s.efficiency},
          {header: "VSM", fun: (s) => "" + s.visionScorePerMinute},
          {header: "NS", fun: (s) => "" + s.nexusTakedowns}
        ]}
        values={stats.sort((a, b) => b.gamesPlayed - a.gamesPlayed)}
        rowLink={(t) => "/players/" + t.puuid}
      />
      <h2>Highlights</h2>
      <div class={cardGrid}>
        <Card label="Most kills" value={mostKillsMatch?.riotIdGameName + ": " + mostKillsMatch?.kills} />
        <Card label="Most assists" value={mostAssistsMatch?.riotIdGameName + ": " + mostAssistsMatch?.assists} />
        <Card label="Most towers" value={mostTurretsMatch?.riotIdGameName + ": " + mostTurretsMatch?.turretTakedowns} />
      </div>
      <h2>Lowlights</h2>
      <Card label="Most deaths" value={mostDeathsMatch?.riotIdGameName + ": " + mostDeathsMatch?.deaths} />
    </Layout>
  )
}