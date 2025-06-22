import { css } from "hono/css"


export interface CardProps {
    label: string
    value: string
}

export function Card(props: CardProps) {
    const cardStyle = css`
        background-color: var(--color-foreground);
        display: inline-flex;
        flex-direction: column;
        gap: .4rem;
        padding: 1rem 1rem;
        border-radius: 1rem;
        `

    const labelStyle = css`
        color: var(--color-text-muted);
    `
    
    const valueStyle = css`
        font-size: 1.3rem;
    `
    return (
        <div class={cardStyle}>
            <span class={labelStyle}>{props.label}</span>
            <span class={valueStyle}>{props.value}</span>
        </div>
    )
}