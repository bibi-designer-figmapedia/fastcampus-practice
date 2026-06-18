import type { CSSProperties } from 'react'
import { SortTabItem } from '../SortTabItem'

export interface SortTabOption {
  /** Unique identifier used for selection comparison. */
  value: string
  /** Display label. */
  label: string
}

export interface SortTabProps {
  /** Tab option list. */
  options: SortTabOption[]
  /** Currently selected option value. */
  value: string
  /** Selection change callback. */
  onChange?: (value: string) => void
  /** Extra class forwarded to the root element. */
  className?: string
}

/**
 * A sort-tab container that lays out multiple {@link SortTabItem}s horizontally
 * with a vertical divider between each item. Acts as a single-select group: only
 * one item is `selected` at a time. Data-driven via `options`/`value`/`onChange`.
 */
export function SortTab({ options, value, onChange, className }: SortTabProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-12)',
  }

  const dividerStyle: CSSProperties = {
    display: 'block',
    flex: 'none',
    // 1px hairline divider: no matching spacing token exists for a 1px width.
    width: '1px',
    height: 'var(--spacing-12)',
    background: 'var(--color-background-muted)',
  }

  return (
    <div role="group" className={className} style={rootStyle}>
      {options.map((option, index) => (
        <div key={option.value} style={{ display: 'contents' }}>
          {index > 0 ? <span aria-hidden="true" style={dividerStyle} /> : null}
          <SortTabItem
            state={option.value === value ? 'selected' : 'default'}
            text={option.label}
            onClick={() => onChange?.(option.value)}
          />
        </div>
      ))}
    </div>
  )
}
