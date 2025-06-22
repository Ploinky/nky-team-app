import match1 from './match1.json'
import match2 from './match2.json'
import match3 from './match3.json'
import match4 from './match4.json'
import match7 from './match7.json'
import match8 from './match8.json'
import match1Timeline from './match1_timeline.json'
import match2Timeline from './match2_timeline.json'
import match3Timeline from './match3_timeline.json'
import match4Timeline from './match4_timeline.json'
import match7Timeline from './match7_timeline.json'
import match8Timeline from './match8_timeline.json'

const emr = {name: "Emrys Esports", tag: "EMR", logo: "/static/emr.jpg"}
const ope = {name: "OP Energy", tag: "OPE", logo: "/static/ope.jpg"}
const gntcs = {name: "Team Genetics", tag: "GNTCS", logo: "/static/gntcs.jpg"}
const spring2025Split = {
    teams: {
        emr,
        ope,
        gntcs
    },
    matches: [
        {matchData: match1, timeline: match1Timeline, vs: emr},
        {matchData: match2, timeline: match2Timeline, vs: emr},
        {matchData: match3, timeline: match3Timeline, vs: ope},
        {matchData: match4, timeline: match4Timeline, vs: ope},
        {matchData: match7, timeline: match7Timeline, vs: gntcs},
        {matchData: match8, timeline: match8Timeline, vs: gntcs}
    ],
    name: "spring2025" }

export {spring2025Split}