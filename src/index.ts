import { Hono } from 'hono'
import { IndexPage } from './pages/index.page'
import { MatchDetailPage } from './pages/match-detail.page'
import { PlayerDetailPage } from './pages/player-detail.page'
import {serveStatic} from 'hono/bun'
import { PlayerStatsPage } from './pages/player-stats.page'
import { MatchesPage } from './pages/matches.page'
import { YearInOinkyPage } from './pages/year-in-oinky.page'
import { ssgParams } from 'hono/ssg'
import { spring2025Split } from '../data/2025spring/split'
import { fall2025Split } from '../data/2025fall/split'
import { oinky_players } from '../data/oinky-players'

const app = new Hono()

app.get('/', IndexPage)
app.get('/players', PlayerStatsPage)
app.get('/players/:puuid',
    ssgParams(() => oinky_players.map(p => ({puuid: p.puuid}))),
    PlayerDetailPage)
app.get('/matches', MatchesPage)
app.get('/matches/:matchId',
    ssgParams(() =>  [...spring2025Split.matches, ...fall2025Split.matches].map(m => ({matchId: m.matchData.metadata.matchId}))),
    MatchDetailPage)
app.get('/yearinoinky', YearInOinkyPage)

app.use('/static/*', async (c, next) => {
    c.header("Cache-Control", "max-age=604800")
    await next()
})
app.use('/static/*', serveStatic({ root: './' }))


export default app
