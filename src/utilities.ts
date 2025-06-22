import { oinky_players } from "../data/oinky-players";
import { Match, MatchData, MatchParticipant, PUUID, Split } from "../global";

export function isOinkyPlayerId(puuid: string): boolean {
    return oinky_players.map(p => p.puuid).includes(puuid)
}
export function isOinkyPlayer(participant: MatchParticipant): boolean {
    return isOinkyPlayerId(participant.puuid)
}

export function isOinkyWin(match: Match): boolean {
    const player = match.matchData.info.participants.find(isOinkyPlayer)
    
    if(!player) {
        throw new Error("No oinky found in match!")
    }
    
    return player.win
}

export function isOinkyDefeat(match: Match): boolean {
    return !isOinkyWin(match)
}

export function hasPlayer(match: Match, playerId: PUUID): boolean {
    return !!match.matchData.info.participants.find(p => p.puuid === playerId)
}

export function collect(pv: number, cv: number) {
    return pv + cv
}

export function round(num: number) {
    return Math.round(num * 100) / 100
}

export interface PlayerStats {
    gamesPlayed: number
    winPercentage: number
    totalKills: number
    totalDeaths: number
    totalAssists: number
    kda: number
    kp: number
    damagePerMinute: number
    goldPerMinute: number
    visionScorePerMinute: number
    totalGold: number
    totalDamageToChampions: number
    damageShare: number
    efficiency: number
    nexusTakedowns: number
}
export function getPlayerStatsFromMatches(matches: Match[], playerId: PUUID): PlayerStats {
    const pms = matches.flatMap(m => m.matchData.info.participants).filter(mp => mp.puuid === playerId)
    const stats = {
        gamesPlayed: pms.length,
        winPercentage: Math.round(pms.filter(m => m.win).length / pms.length * 100),
        totalKills: pms.map(pm => pm.kills).reduce(collect),
        totalDeaths: pms.map(pm => pm.deaths).reduce(collect),
        totalAssists: pms.map(pm => pm.assists).reduce(collect),
        kda: 0,
        kp: Math.round(pms.map(pm => pm.challenges.killParticipation).reduce(collect) / pms.length * 100),
        damagePerMinute: round(pms.map(pm => pm.challenges.damagePerMinute).reduce(collect) / pms.length),
        goldPerMinute: round(pms.map(pm => pm.challenges.goldPerMinute).reduce(collect) / pms.length),
        visionScorePerMinute: round(pms.map(pm => pm.challenges.visionScorePerMinute).reduce(collect) / pms.length),
        totalGold: pms.map(pm => pm.goldEarned).reduce(collect),
        totalDamageToChampions: pms.map(pm => pm.totalDamageDealtToChampions).reduce(collect),
        damageShare: Math.round(pms.map(pm => pm.challenges.teamDamagePercentage).reduce(collect) / pms.length * 100) ,
        efficiency: 0,
        nexusTakedowns: pms.map(pm => pm.nexusKills).reduce(collect)
    }
    stats.kda = round((stats.totalKills + stats.totalAssists) / stats.totalDeaths)
    stats.efficiency = round(stats.totalDamageToChampions / stats.totalGold)
    return stats
}

export function getOinkyMatchParticipationFromSplits(splits: Split[]) {
    return getOinkyMatchParticipation(splits.flatMap(s => s.matches))
}

export function getOinkyMatchParticipation(matches: Match[]) {
    return matches.flatMap(m => m.matchData.info.participants).filter(isOinkyPlayer)
}

export function getGoldDiff(match: Match) {
    return Math.round((match.matchData.info.participants.filter(isOinkyPlayer).flatMap(p => p.goldEarned).reduce(collect)
              - match.matchData.info.participants.filter(p => !isOinkyPlayer(p)).flatMap(p => p.goldEarned).reduce(collect)) / 100) / 10
            
}