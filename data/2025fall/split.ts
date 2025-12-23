import match1 from './match1.json'
import match2 from './match2.json'
import match3 from './match3.json'
import match4 from './match4.json'
import match5 from './match5.json'
import match6 from './match6.json'
import match9 from './match9.json'
import match10 from './match10.json'
import match13 from './match13.json'
import match14 from './match14.json'

import match1Timeline from './match1_timeline.json'
import match2Timeline from './match2_timeline.json'
import match3Timeline from './match3_timeline.json'
import match4Timeline from './match4_timeline.json'
import match5Timeline from './match5_timeline.json'
import match6Timeline from './match6_timeline.json'
import match9Timeline from './match9_timeline.json'
import match10Timeline from './match10_timeline.json'
import match13Timeline from './match13_timeline.json'
import match14Timeline from './match14_timeline.json'

const gt_gaia = {name: "Gaia, Academy of Gods and Titans x TPR", tag: "GT GAIA", logo: "/static/gt_gaia.jpg"}
const bsg = {name: "BS Genesis", tag: "BSG", logo: "/static/bsg.jpg"}
const ssr = {name: "Softstuck Reloaded", tag: "SSR", logo: "/static/ssr.jpg"}
const uice = {name: "UIC Ember", tag: "UIC-E", logo: "/static/uic-e.jpg"}
const mnt = {name: "MNT Earl Grey", tag: "MNT EG", logo: "/static/mnt_eg.jpg"}

const fall2025Split = {
    teams: {
        gt_gaia,
        bsg,
        ssr,
        uice,
        mnt
    },
    matches: [
        {matchData: match1, timeline: match1Timeline, vs: gt_gaia},
        {matchData: match2, timeline: match2Timeline, vs: gt_gaia},
        {matchData: match3, timeline: match3Timeline, vs: bsg},
        {matchData: match4, timeline: match4Timeline, vs: bsg},
        {matchData: match5, timeline: match5Timeline, vs: ssr},
        {matchData: match6, timeline: match6Timeline, vs: ssr},
        {matchData: match9, timeline: match9Timeline, vs: uice},
        {matchData: match10, timeline: match10Timeline, vs: uice},
        {matchData: match13, timeline: match13Timeline, vs: mnt},
        {matchData: match14, timeline: match14Timeline, vs: mnt},
    ],
    name: "fall2025" }

export {fall2025Split}