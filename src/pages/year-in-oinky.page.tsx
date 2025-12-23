import { Layout } from "@/components/Layout";
import { getOinkyMatchParticipationFromSplits } from "@/utilities";
import { Context } from "hono";
import { splits } from "../../data/splits";
import { Card } from "@/components/Card";
import { css } from "hono/css";

const cardGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export function YearInOinkyPage(c: Context) {
    const oinkyMatches = getOinkyMatchParticipationFromSplits(splits)
    const mostKillsMatch = oinkyMatches.sort((a, b) => b.kills - a.kills).at(0);
    const mostAssistsMatch = oinkyMatches.sort((a, b) => b.assists - a.assists).at(0);
    const mostTurretsMatch = oinkyMatches.sort((a, b) => b.turretTakedowns - a.turretTakedowns).at(0);
    const mostFarmMatch = oinkyMatches.sort((a, b) => (b.totalMinionsKilled + b.totalAllyJungleMinionsKilled + b.totalEnemyJungleMinionsKilled + b.wardsKilled)
    - (a.totalMinionsKilled + a.totalAllyJungleMinionsKilled + a.totalEnemyJungleMinionsKilled + a.wardsKilled)).at(0);
    const mostCounterJungle = oinkyMatches.sort((a, b) => b.totalEnemyJungleMinionsKilled - a.totalEnemyJungleMinionsKilled ).at(0);
    const mostWardsDestroyed = oinkyMatches.sort((a, b) => b.wardsKilled - a.wardsKilled ).at(0);
    const mostWardsPlaced = oinkyMatches.sort((a, b) => (b.wardsPlaced + b.detectorWardsPlaced) - (a.wardsPlaced + a.detectorWardsPlaced)).at(0);

    const mostDeathsMatch = oinkyMatches.sort((a, b) => b.deaths - a.deaths).at(0);
    const leastVisionScore = oinkyMatches.sort((a, b) => (a.visionScore) - (b.visionScore)).at(0);

    return c.html(
        <Layout>
            <h2>Highlights</h2>
            <div class={cardGrid}>
                <Card label="Most kills" value={mostKillsMatch?.riotIdGameName + ": " + mostKillsMatch?.kills} />
                <Card label="Most assists" value={mostAssistsMatch?.riotIdGameName + ": " + mostAssistsMatch?.assists} />
                <Card label="Most towers" value={mostTurretsMatch?.riotIdGameName + ": " + mostTurretsMatch?.turretTakedowns} />
                <Card label="Most farm" value={mostFarmMatch?.riotIdGameName + ": " + (mostFarmMatch?.totalMinionsKilled ?? 0 + (mostFarmMatch?.totalAllyJungleMinionsKilled ?? 0) + (mostFarmMatch?.totalEnemyJungleMinionsKilled ?? 0) + (mostFarmMatch?.wardsKilled ?? 0))} />
                <Card label="Most counterjungle" value={mostCounterJungle?.riotIdGameName + ": " + mostCounterJungle?.totalEnemyJungleMinionsKilled} />
                <Card label="Most wards destroyed" value={mostWardsDestroyed?.riotIdGameName + ": " + mostWardsDestroyed?.wardsKilled} />
                <Card label="Most wards placed" value={mostWardsPlaced?.riotIdGameName + ": " + (mostWardsPlaced?.wardsPlaced ?? 0 + (mostWardsPlaced?.detectorWardsPlaced ?? 0))} />
            </div>
            <h2>Lowlights</h2>
            
            <div class={cardGrid}>
                <Card label="Most deaths" value={mostDeathsMatch?.riotIdGameName + ": " + mostDeathsMatch?.deaths} />
                <Card label="Least vision score" value={leastVisionScore?.riotIdGameName + ": " + leastVisionScore?.visionScore} />
            </div>
        </Layout>
    )
}