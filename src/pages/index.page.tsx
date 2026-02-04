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
import { fall2025Split } from "../../data/2025fall/split"
import { winter2025Split } from "../../data/2025winter/split"

const cardGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`

export function IndexPage(c: Context) {
  const oinkyMatches = getOinkyMatchParticipationFromSplits(splits)
  const mostKillsMatch = oinkyMatches.sort((a, b) => b.kills - a.kills).at(0);
  const mostAssistsMatch = oinkyMatches.sort((a, b) => b.assists - a.assists).at(0);
  const mostDeathsMatch = oinkyMatches.sort((a, b) => b.deaths - a.deaths).at(0);
  const mostTurretsMatch = oinkyMatches.sort((a, b) => b.turretTakedowns - a.turretTakedowns).at(0);

  const allMatches = [...spring2025Split.matches, ...fall2025Split.matches, ...winter2025Split.matches].sort((a, b) => b.matchData.info.gameStartTimestamp - a.matchData.info.gameEndTimestamp)

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