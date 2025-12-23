import match1 from './match1.json'
import match2 from './match2.json'
import match3 from './match3.json'
import match4 from './match4.json'
import match7 from './match7.json'
import match8 from './match8.json'
import match9 from './match9.json'
import match10 from './match10.json'
import match11 from './match11.json'
import match12 from './match12.json'
import match13 from './match13.json'
import match14 from './match14.json'
import match15 from './match15.json'
import match16 from './match16.json'
import match1Timeline from './match1_timeline.json'
import match2Timeline from './match2_timeline.json'
import match3Timeline from './match3_timeline.json'
import match4Timeline from './match4_timeline.json'
import match7Timeline from './match7_timeline.json'
import match8Timeline from './match8_timeline.json'
import match9Timeline from './match9_timeline.json'
import match10Timeline from './match10_timeline.json'
import match11Timeline from './match11_timeline.json'
import match12Timeline from './match12_timeline.json'
import match13Timeline from './match13_timeline.json'
import match14Timeline from './match14_timeline.json'
import match15Timeline from './match15_timeline.json'
import match16Timeline from './match16_timeline.json'

const emr = {name: "Emrys Esports", tag: "EMR", logo: "/static/emr.jpg"}
const ope = {name: "OP Energy", tag: "OPE", logo: "/static/ope.jpg"}
const gntcs = {name: "Team Genetics", tag: "GNTCS", logo: "/static/gntcs.jpg"}
const heska = {name: "Heskalation", tag: "HESKA", logo: "/static/heska.jpg"}
const d7 = {name: "Platzhalter", tag: "D7", logo: "/static/d7.jpg"}
const spe = {name: "Spotify Enjoyers", tag: "SPE", logo: "/static/spe.jpg"}
const luna = {name: "Lunar Eclipse Spark", tag: "LUNA", logo: "/static/luna.jpg"}

const spring2025Split = {
    teams: {
        emr,
        ope,
        gntcs,
        heska,
        d7,
        spe,
        luna
    },
    matches: [
        {matchData: match1, timeline: match1Timeline, vs: emr},
        {matchData: match2, timeline: match2Timeline, vs: emr},
        {matchData: match3, timeline: match3Timeline, vs: ope},
        {matchData: match4, timeline: match4Timeline, vs: ope},
        {matchData: match7, timeline: match7Timeline, vs: gntcs},
        {matchData: match8, timeline: match8Timeline, vs: gntcs},
        {matchData: match9, timeline: match9Timeline, vs: heska},
        {matchData: match10, timeline: match10Timeline, vs: heska},
        {matchData: match11, timeline: match11Timeline, vs: d7},
        {matchData: match12, timeline: match12Timeline, vs: d7},
        {matchData: match13, timeline: match13Timeline, vs: spe},
        {matchData: match14, timeline: match14Timeline, vs: spe},
        {matchData: match15, timeline: match15Timeline, vs: luna},
        {matchData: match16, timeline: match16Timeline, vs: luna},
    ],
    name: "spring2025" }

export {spring2025Split}