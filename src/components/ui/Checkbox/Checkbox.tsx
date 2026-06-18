import type { CSSProperties } from 'react'
import { Icon } from '../Icon'

/** Visual state. Maps 1:1 to the Figma `state` variant. */
export type CheckboxState = 'on' | 'off' | 'state3'

export interface CheckboxProps {
  /**
   * Visual state. Defaults to `on`.
   * - `on` / `state3`: primary background with a check (visually identical in Figma).
   * - `off`: disabled gray background with a check.
   */
  state?: CheckboxState
  /** Extra class forwarded to the root `<span>`. */
  className?: string
}

/** Per-state background color token. The check color is constant (`text-onbrand`). */
const STATE_BACKGROUND: Record<CheckboxState, string> = {
  on: 'var(--color-interactive-primary)',
  off: 'var(--color-text-disabled)',
  state3: 'var(--color-interactive-primary)',
}

/**
 * A 16×16 checkbox glyph. Display-only — the Figma component exposes visual
 * states (`on` / `off` / `state3`) with no interaction, so this renders as a
 * non-interactive `<span>` containing the reusable `check` icon.
 */
export function Checkbox({ state = 'on', className }: CheckboxProps) {
  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 16,
    height: 16,
    borderRadius: 'var(--radius-xs)',
    overflow: 'hidden',
    background: STATE_BACKGROUND[state],
  }

  return (
    <span className={className} style={style}>
      <Icon name="check" size={16} color="var(--color-text-onbrand)" />
    </span>
  )
}
