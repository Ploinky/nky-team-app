import {css, Style} from 'hono/css'
import { PropsWithChildren, ReactElement, ReactNode } from 'hono/jsx'
import { HtmlEscapedString } from 'hono/utils/html'

const global = css`
    :-hono-global {
        :root {
          --color-background: #111827;
          --color-foreground: #1F2937;
          --color-foreground-light: #374151;
          --color-text: #F3F4F6;
          --color-text-muted: #9CA3AF;
          --color-success: #34D399;
          --color-failure: #F87171;
        }

        html {
            font-family: sans-serif;
            padding: 0;
            margin: 0;
            background-color: var(--color-background);
            color: var(--color-text);
        }

        body {
            padding: 0;
            margin: 0;
        }

        nav {
            background-color: var(--color-foreground);
            padding: 1rem;

            display: grid;
            grid-gap: 1rem;
            align-items: center;

            grid-template-columns: auto auto auto auto auto auto 1fr auto;

            img {
              max-height: 3rem;
              object-fit: contain;
            }
            div {
              padding-right: 3rem;

              h1 {
                padding-bottom: .4rem;
                margin: 0;
              }
              span {
                font-size: .8rem;
                color: var(--color-text-muted)
              }
            }
        }

        a {
          color: var(--color-text)
        }

        main {
          padding: 1rem;
        }

        details {
            summary {
                cursor: pointer;
            }
        }
    }
`
export interface LayoutProps {
  addon?: ReactNode | ReactElement | Element | Promise<HtmlEscapedString>
}

export function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <html class={global}>
      <head>
        <title>NKY Team App</title>
        <Style />
      </head>
      <body>
        <nav>
          <img src="/static/icon_pig_512.png" alt="oink" />
          <div>
            <h1>Oinky EC</h1>
            <span>Spring 2025 Starter League</span>
          </div>
          <a href="/">Home</a>
          <a href="/players">Stats</a>
          <a href="/matches">Matches</a>
          <a href="/yearinoinky">Year In Oinky</a>
          <div></div>
          {props.addon}
        </nav>
        <main>
          {props.children}
        </main>
      </body>
    </html>
  )
}