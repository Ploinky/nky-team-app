import app from './src/index'
import { toSSG } from 'hono/bun'
import fs from 'fs/promises'

toSSG(app, {
    dir: "./out"
})