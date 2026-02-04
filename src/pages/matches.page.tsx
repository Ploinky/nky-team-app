import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import { isOinkyWin, isOinkyPlayer, getGoldDiff } from "@/utilities";
import { Context } from "hono";
import { Match } from "../../global";
import { splits } from "../../data/splits";

export function MatchesPage(c: Context) {
      const allMatches = splits.flatMap(s => s.matches).sort((a, b) => b.matchData.info.gameStartTimestamp - a.matchData.info.gameEndTimestamp)
    
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
            values={allMatches}
            rowLink={(t) => "/matches/" + t.matchData.metadata.matchId}
            />
        </Layout>
    )
}