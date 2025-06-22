import { css, cx } from "hono/css"
import { JSX, ReactNode } from "hono/jsx"
import { HtmlEscapedString } from "hono/utils/html"

export interface TableColumn<T> {
    header: string
    fun: (t: T) => ReactNode | Element | Promise<HtmlEscapedString>
    variant?: (t: T) => "success" | "failure"
} 

export interface TableProps<T> {
    columns: TableColumn<T>[]
    values: T[]
    rowLink?: (t: T) => string
}

export function Table<T>(props: TableProps<T>) {
    const tableStyle = css`
        border: none;
    `

    const tableHeadStyle = css`
        background-color: var(--color-foreground-light);
        border: none;
    `

    const tableHeadCellStyle = css`
        font-size: 1.2rem;
        padding: .5rem .7rem;
    `

    const tableBodyStyle = css`
        background-color: var(--color-foreground);
    `

    const tableBodyRowStyle = css`
        cursor: default;
        &:hover {
            background-color: var(--color-foreground-light);
        }
    `

    const tableBodyCellStyle = css`
        border-bottom: 1px solid var(--color-foreground-light);
        padding: .5rem .7rem;
        &.success {
            background-color: salmon;
        }
    `

    const variantStyle = {
        "success": css`
            color: var(--color-success);
        `,
        "failure": css`
            color: var(--color-failure);
        `
    }

    return (
        <table class={tableStyle} cellpadding={0} cellspacing={0}>
            <thead class={tableHeadStyle}>
                <tr>
                    {props.columns.map((col) => (
                        <th class={tableHeadCellStyle}>{col.header}</th>
                    ))}
                    {props.rowLink ? (
                        <th class={tableHeadCellStyle}>Link</th>
                    ) : null}
                </tr>
            </thead>
            <tbody class={tableBodyStyle}>
                {props.values.map((val) => (
                    <tr class={tableBodyRowStyle}>
                        {props.columns.map((col) => (
                            <td class={cx(tableBodyCellStyle, col.variant ? variantStyle[col.variant(val)] : "")}>{col.fun(val)}</td>
                        ))}
                        {props.rowLink ? (
                            <td class={cx(tableBodyCellStyle)}><a href={props.rowLink(val)}>Details</a></td>
                        ) : null}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}