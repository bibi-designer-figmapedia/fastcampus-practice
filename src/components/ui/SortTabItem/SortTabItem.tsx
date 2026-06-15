import type { CSSProperties, MouseEventHandler } from 'react'
import { Icon } from '../Icon'

/** Selection state. Maps to the Figma `state` variant (`select`/`default`). */
export type SortTabItemState = 'default' | 'selected'

export interface SortTabItemProps {
  /** Selection state. Defaults to `default`. */
  state?: SortTabItemState
  /** Tab label text. Defaults to `Label`. */
  text?: string
  /** Click handler — used to select this sort tab. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** Extra class forwarded to the root `<button>`. */
  className?: string
}

/**
 * A sort-tab item. The `selected` state shows a 16px check icon followed by a
 * `--spacing-4` gap and bold `--color-text-primary` text; `default` shows only
 * regular-weight `--color-text-secondary` text with no icon and no gap.
 */
export function SortTabItem({
  state = 'default',
  text = 'Label',
  onClick,
  className,
}: SortTabItemProps) {
  const isSelected = state === 'selected'

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: isSelected ? 'var(--spacing-4)' : undefined,
    font: isSelected ? 'var(--body-sm-bold)' : 'var(--body-sm-regular)',
    whiteSpace: 'nowrap',
    color: isSelected
      ? 'var(--color-text-primary)'
      : 'var(--color-text-secondary)',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={className}
      style={style}
    >
      {isSelected ? (
        <Icon name="check" size={16} color="var(--color-text-primary)" />
      ) : null}
      {text}
    </button>
  )
}
