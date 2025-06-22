import { Hono } from 'hono'
import { IndexPage } from './pages/index.page'
import { MatchDetailPage } from './pages/match-detail.page'
import { PlayerDetailPage } from './pages/player-detail.page'
import {serveStatic} from 'hono/bun'

const app = new Hono()

app.get('/', IndexPage)
app.get('/players/:puuid', PlayerDetailPage)
app.get('/matches/:matchId', MatchDetailPage)

app.use('/static/*', async (c, next) => {
    c.header("Cache-Control", "max-age=604800")
    await next()
})
app.use('/static/*', serveStatic({ root: './' }))


export default app
