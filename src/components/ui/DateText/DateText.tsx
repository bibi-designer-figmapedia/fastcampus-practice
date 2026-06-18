import type { CSSProperties } from 'react'

export interface DateTextProps {
  /** Date string to display, e.g. `26.05.06`. */
  value: string
  /** Extra class forwarded to the root element. */
  className?: string
}

/**
 * A date label rendered in tertiary text using the `body/sm/regular` type
 * style. Mirrors the Figma `Date` component (node 781:5082): a centered,
 * single-line label. The date string is provided via `value`.
 */
export function DateText({ value, className }: DateTextProps) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    font: 'var(--body-sm-regular)',
    color: 'var(--color-text-tertiary)',
    whiteSpace: 'nowrap',
  }

  return (
    <span className={className} style={style}>
      {value}
    </span>
  )
}
