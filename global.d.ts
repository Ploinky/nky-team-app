export type PUUID = string

export type MatchMetaData = {
    dataVersion: string,
    matchId: string,
    participants: PUUID[]
}

export type MatchParticipantChallenges = {
    "12AssistStreakCount": number,
    HealFromMapSources: number,
    InfernalScalePickup: number,
    SWARM_DefeatAatrox: number,
    SWARM_DefeatBriar: number,
    SWARM_DefeatMiniBosses: number,
    SWARM_EvolveWeapon: number,
    SWARM_Have3Passives: number,
    SWARM_KillEnemy: number,
    SWARM_PickupGold: number,
    SWARM_ReachLevel50: number,
    SWARM_Survive15Min: number,
    SWARM_WinWith5EvolvedWeapons: number,
    abilityUses: number,
    acesBefore15Minutes: number,
    alliedJungleMonsterKills: number,
    baronTakedowns: number,
    blastConeOppositeOpponentCount: number,
    bountyGold: number,
    buffsStolen: number,
    completeSupportQuestInTime: number,
    controlWardTimeCoverageInRiverOrEnemyHalf?: number,
    controlWardsPlaced: number,
    damagePerMinute: number,
    damageTakenOnTeamPercentage: number,
    dancedWithRiftHerald: number,
    deathsByEnemyChamps: number,
    dodgeSkillShotsSmallWindow: number,
    doubleAces: number,
    dragonTakedowns: number,
    earliestDragonTakedown?: number,
    earlyLaningPhaseGoldExpAdvantage: number,
    effectiveHealAndShielding: number,
    elderDragonKillsWithOpposingSoul: number,
    elderDragonMultikills: number,
    enemyChampionImmobilizations: number,
    enemyJungleMonsterKills: number,
    epicMonsterKillsNearEnemyJungler: number,
    epicMonsterKillsWithin30SecondsOfSpawn: number,
    epicMonsterSteals: number,
    epicMonsterStolenWithoutSmite: number,
    firstTurretKilled: number,
    fistBumpParticipation: number,
    flawlessAces: number,
    fullTeamTakedown: number,
    gameLength: number,
    getTakedownsInAllLanesEarlyJungleAsLaner?: number,
    goldPerMinute: number,
    hadOpenNexus: number,
    immobilizeAndKillWithAlly: number,
    initialBuffCount: number,
    initialCrabCount: number,
    jungleCsBefore10Minutes: number,
    junglerTakedownsNearDamagedEpicMonster: number,
    kTurretsDestroyedBeforePlatesFall: number,
    kda: number,
    killAfterHiddenWithAlly: number,
    killParticipation: number,
    killedChampTookFullTeamDamageSurvived: number,
    killingSprees: number,
    killsNearEnemyTurret: number,
    killsOnOtherLanesEarlyJungleAsLaner?: number,
    killsOnRecentlyHealedByAramPack: number,
    killsUnderOwnTurret: number,
    killsWithHelpFromEpicMonster: number,
    knockEnemyIntoTeamAndKill: number,
    landSkillShotsEarlyGame: number,
    laneMinionsFirst10Minutes: number,
    laningPhaseGoldExpAdvantage: number,
    legendaryCount: number,
    legendaryItemUsed: number[],
    lostAnInhibitor: number,
    maxCsAdvantageOnLaneOpponent: number,
    maxKillDeficit: number,
    maxLevelLeadLaneOpponent: number,
    mejaisFullStackInTime: number,
    moreEnemyJungleThanOpponent: number,
    multiKillOneSpell: number,
    multiTurretRiftHeraldCount: number,
    multikills: number,
    multikillsAfterAggressiveFlash: number,
    outerTurretExecutesBefore10Minutes: number,
    outnumberedKills: number,
    outnumberedNexusKill: number,
    perfectDragonSoulsTaken: number,
    perfectGame: number,
    pickKillWithAlly: number,
    poroExplosions: number,
    quickCleanse: number,
    quickFirstTurret: number,
    quickSoloKills: number,
    riftHeraldTakedowns: number,
    saveAllyFromDeath: number,
    scuttleCrabKills: number,
    skillshotsDodged: number,
    skillshotsHit: number,
    snowballsHit: number,
    soloBaronKills: number,
    soloKills: number,
    soloTurretsLategame?: number,
    stealthWardsPlaced: number,
    survivedSingleDigitHpCount: number,
    survivedThreeImmobilizesInFight: number,
    takedownOnFirstTurret: number,
    takedowns: number,
    takedownsAfterGainingLevelAdvantage: number,
    takedownsBeforeJungleMinionSpawn: number,
    takedownsFirstXMinutes: number,
    takedownsInAlcove: number,
    takedownsInEnemyFountain: number,
    teamBaronKills: number,
    teamDamagePercentage: number,
    teamElderDragonKills: number,
    teamRiftHeraldKills: number,
    tookLargeDamageSurvived: number,
    turretPlatesTaken: number,
    turretTakedowns: number,
    turretsTakenWithRiftHerald: number,
    twentyMinionsIn3SecondsCount: number,
    twoWardsOneSweeperCount: number,
    unseenRecalls: number,
    visionScoreAdvantageLaneOpponent: number,
    visionScorePerMinute: number,
    voidMonsterKill: number,
    wardTakedowns: number,
    wardTakedownsBefore20M: number,
    wardsGuarded: number
}

export type MatchParticipant = {
    PlayerScore0: number,
    PlayerScore1: number,
    PlayerScore10: number,
    PlayerScore11: number,
    PlayerScore2: number,
    PlayerScore3: number,
    PlayerScore4: number,
    PlayerScore5: number,
    PlayerScore6: number,
    PlayerScore7: number,
    PlayerScore8: number,
    PlayerScore9: number,
    allInPings: number,
    assistMePings: number,
    assists: number,
    baronKills: number,
    basicPings: number,
    challenges: MatchParticipantChallenges,
    champExperience: number,
    champLevel: number,
    championId: number,
    championName: string,
    championTransform: number,
    commandPings: number,
    consumablesPurchased: number,
    damageDealtToBuildings: number,
    damageDealtToObjectives: number,
    damageDealtToTurrets: number,
    damageSelfMitigated: number,
    dangerPings: number,
    deaths: number,
    detectorWardsPlaced: number,
    doubleKills: number,
    dragonKills: number,
    eligibleForProgression: boolean,
    enemyMissingPings: number,
    enemyVisionPings: number,
    firstBloodAssist: boolean,
    firstBloodKill: boolean,
    firstTowerAssist: boolean,
    firstTowerKill: boolean,
    gameEndedInEarlySurrender: boolean,
    gameEndedInSurrender: boolean,
    getBackPings: number,
    goldEarned: number,
    goldSpent: number,
    holdPings: number,
    individualPosition: string,
    inhibitorKills: number,
    inhibitorTakedowns: number,
    inhibitorsLost: number,
    item0: number,
    item1: number,
    item2: number,
    item3: number,
    item4: number,
    item5: number,
    item6: number,
    itemsPurchased: number,
    killingSprees: number,
    kills: number,
    lane: string,
    largestCriticalStrike: number,
    largestKillingSpree: number,
    largestMultiKill: number,
    longestTimeSpentLiving: number,
    magicDamageDealt: number,
    magicDamageDealtToChampions: number,
    magicDamageTaken: number,
    missions: {
        playerScore0: number,
        playerScore1: number,
        playerScore2: number,
        playerScore3: number,
        playerScore4: number,
        playerScore5: number,
        playerScore6: number,
        playerScore7: number,
        playerScore8: number,
        playerScore9: number,
        playerScore10: number,
        playerScore11: number
    },
    needVisionPings: number,
    neutralMinionsKilled: number,
    nexusKills: number,
    nexusLost: number,
    nexusTakedowns: number,
    objectivesStolen: number,
    objectivesStolenAssists: number,
    onMyWayPings: number,
    participantId: number,
    pentaKills: number,
    perks: any, /*
    {
        "statPerks": {
        "defense": number,
        "flex": number,
        "offense": number
        },
        "styles": [
        {
            "description": "primaryStyle",
            "selections": [
            {
                "perk": number,
                "var1": number,
                "var2": number,
                "var3": number
            },
            {
                "perk": 8226,
                "var1": 250,
                "var2": 459,
                "var3": 0
            },
            {
                "perk": 8210,
                "var1": 3,
                "var2": 0,
                "var3": 0
            },
            {
                "perk": 8237,
                "var1": 398,
                "var2": 0,
                "var3": 0
            }
            ],
            "style": 8200
        },
        {
            "description": "subStyle",
            "selections": [
            {
                "perk": 8304,
                "var1": 12,
                "var2": 0,
                "var3": 0
            },
            {
                "perk": 8347,
                "var1": 0,
                "var2": 0,
                "var3": 0
            }
            ],
            "style": 8300
        }
        ]
    },
    */
    physicalDamageDealt: number,
    physicalDamageDealtToChampions: number,
    physicalDamageTaken: number,
    placement: number,
    playerAugment1: number,
    playerAugment2: number,
    playerAugment3: number,
    playerAugment4: number,
    playerAugment5: number,
    playerAugment6: number,
    playerSubteamId: number,
    profileIcon: number,
    pushPings: number,
    puuid: PUUID,
    quadraKills: number,
    retreatPings: number,
    riotIdGameName: string,
    riotIdTagline: string,
    role: string,
    sightWardsBoughtInGame: number,
    spell1Casts: number,
    spell2Casts: number,
    spell3Casts: number,
    spell4Casts: number,
    subteamPlacement: number,
    summoner1Casts: number,
    summoner1Id: number,
    summoner2Casts: number,
    summoner2Id: number,
    summonerId: string,
    summonerLevel: number,
    summonerName: string,
    teamEarlySurrendered: boolean,
    teamId: number,
    teamPosition: string,
    timeCCingOthers: number,
    timePlayed: number,
    totalAllyJungleMinionsKilled: number,
    totalDamageDealt: number,
    totalDamageDealtToChampions: number,
    totalDamageShieldedOnTeammates: number,
    totalDamageTaken: number,
    totalEnemyJungleMinionsKilled: number,
    totalHeal: number,
    totalHealsOnTeammates: number,
    totalMinionsKilled: number,
    totalTimeCCDealt: number,
    totalTimeSpentDead: number,
    totalUnitsHealed: number,
    tripleKills: number,
    trueDamageDealt: number,
    trueDamageDealtToChampions: number,
    trueDamageTaken: number,
    turretKills: number,
    turretTakedowns: number,
    turretsLost: number,
    unrealKills: number,
    visionClearedPings: number,
    visionScore: number,
    visionWardsBoughtInGame: number,
    wardsKilled: number,
    wardsPlaced: number,
    win: boolean
}

export type MatchInfo = {
    endOfGameResult: string,
    gameCreation: number, // unix timestamp?
    gameDuration: number, // seconds?
    gameEndTimestamp: number, // unix timestamp?
    gameId: number,
    gameMode: string,
    gameName: string, // uuid
    gameStartTimestamp: number, // unix timestamp? 
    gameType: string,
    gameVersion: string, // "15.10.680.4378",
    mapId: number, // 11,
    participants: MatchParticipant[],
    platformId: string, // "EUW1",
    queueId: number, // 0,
    "teams": any, /* [
      {
        "bans": [
          {
            "championId": 234,
            "pickTurn": 1
          },
          {
            "championId": 96,
            "pickTurn": 3
          },
          {
            "championId": 60,
            "pickTurn": 5
          },
          {
            "championId": 902,
            "pickTurn": 2
          },
          {
            "championId": 267,
            "pickTurn": 4
          }
        ],
        "feats": {
          "EPIC_MONSTER_KILL": {
            "featState": 1001
          },
          "FIRST_BLOOD": {
            "featState": 1001
          },
          "FIRST_TURRET": {
            "featState": 0
          }
        },
        "objectives": {
          "atakhan": {
            "first": false,
            "kills": 0
          },
          "baron": {
            "first": false,
            "kills": 0
          },
          "champion": {
            "first": false,
            "kills": 10
          },
          "dragon": {
            "first": false,
            "kills": 1
          },
          "horde": {
            "first": false,
            "kills": 0
          },
          "inhibitor": {
            "first": false,
            "kills": 0
          },
          "riftHerald": {
            "first": false,
            "kills": 0
          },
          "tower": {
            "first": false,
            "kills": 2
          }
        },
        "teamId": 100,
        "win": false
      },
      {
        "bans": [
          {
            "championId": 98,
            "pickTurn": 2
          },
          {
            "championId": 117,
            "pickTurn": 4
          },
          {
            "championId": 950,
            "pickTurn": 6
          },
          {
            "championId": 143,
            "pickTurn": 1
          },
          {
            "championId": 54,
            "pickTurn": 3
          }
        ],
        "feats": {
          "EPIC_MONSTER_KILL": {
            "featState": 3
          },
          "FIRST_BLOOD": {
            "featState": 3
          },
          "FIRST_TURRET": {
            "featState": 0
          }
        },
        "objectives": {
          "atakhan": {
            "first": true,
            "kills": 1
          },
          "baron": {
            "first": true,
            "kills": 1
          },
          "champion": {
            "first": true,
            "kills": 21
          },
          "dragon": {
            "first": true,
            "kills": 3
          },
          "horde": {
            "first": true,
            "kills": 3
          },
          "inhibitor": {
            "first": true,
            "kills": 2
          },
          "riftHerald": {
            "first": true,
            "kills": 1
          },
          "tower": {
            "first": true,
            "kills": 9
          }
        },
        "teamId": 200,
        "win": true
      }
    ],
    */
    "tournamentCode": string // "EUW04f0c-2178f07f-8f07-4c2f-a23a-2e9920fe2cfb"
}

export type Opponent = {
  name: string
  tag: string
  logo: string
}
export type Match = {
  matchData: MatchData
  timeline: MatchTimeline
  vs: Opponent
}
export type MatchData = {
  metadata: MatchMetaData
  info: MatchInfo
}

export type Split = {
    matches: Match[],
    name: string
}


export type MatchFrameEvent = {
  realTimestamp?: number
  timestamp: number
  type: string
}

export type MatchParticipantFrame = {
  championStats: {
    abilityHaste: number,
    abilityPower: number,
    armor: number,
    armorPen: number,
    armorPenPercent: number,
    attackDamage: number,
    attackSpeed: number,
    bonusArmorPenPercent: number,
    bonusMagicPenPercent: number,
    ccReduction: number,
    cooldownReduction: number,
    health: number,
    healthMax: number,
    healthRegen: number,
    lifesteal: number,
    magicPen: number,
    magicPenPercent: number,
    magicResist: number,
    movementSpeed: number,
    omnivamp: number,
    physicalVamp: number,
    power: number,
    powerMax: number,
    powerRegen: number,
    spellVamp: number
  },
  currentGold: number,
  damageStats: {
    magicDamageDone: number,
    magicDamageDoneToChampions: number,
    magicDamageTaken: number,
    physicalDamageDone: number,
    physicalDamageDoneToChampions: number,
    physicalDamageTaken: number,
    totalDamageDone: number,
    totalDamageDoneToChampions: number,
    totalDamageTaken: number,
    trueDamageDone: number,
    trueDamageDoneToChampions: number,
    trueDamageTaken: number
  },
  goldPerSecond: number,
  jungleMinionsKilled: number,
  level: number,
  minionsKilled: number,
  participantId: number,
  position: {
      x: number,
      y: number
  },
    timeEnemySpentControlled: number,
    totalGold: number,
    xp: number
}

export type MatchParticipantFrames = {
  "1": MatchParticipantFrame,
  "2": MatchParticipantFrame,
  "3": MatchParticipantFrame,
  "4": MatchParticipantFrame,
  "5": MatchParticipantFrame,
  "6": MatchParticipantFrame,
  "7": MatchParticipantFrame,
  "8": MatchParticipantFrame,
  "9": MatchParticipantFrame,
  "10": MatchParticipantFrame,
}

export type MatchFrame = {
  events: MatchFrameEvent[],
  participantFrames: MatchParticipantFrames,
  timestamp: number
}

export type MatchTimeline = {
  metadata: {
    dataVersion: string,
    matchId: string,
    participants: string[]
  },
  info: {
    endOfGameResult: string,
    frameInterval: number,
    frames: MatchFrame[],
    gameId: number,
    participants: {participantId: number, puuid: string}[]
  }
}