import type { CSSProperties } from 'react'

/** Divider axis. Maps to a future Figma `orientation` variant. */
export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps {
  /** Divider axis. Defaults to `horizontal`. */
  orientation?: DividerOrientation
  /** Extra class forwarded to the root element. */
  className?: string
}

// ⚠️ 토큰 외 값 (1px): spacing scale has no 1px step (0/2/4/8/12...),
// and there is no border-width token. The hairline thickness is a fixed
// literal kept here as a single named constant rather than an invented token.
const LINE_THICKNESS = '1px'

/**
 * A separator line. `horizontal` renders a full-width hairline with
 * `--spacing-12` vertical padding (block padding) matching the Figma frame;
 * `vertical` renders the same hairline rotated to the cross axis with
 * `--spacing-12` inline padding. The line uses `--color-background-muted`.
 */
export function Divider({
  orientation = 'horizontal',
  className,
}: DividerProps) {
  const isVertical = orientation === 'vertical'

  const wrapperStyle: CSSProperties = isVertical
    ? {
        display: 'inline-flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        alignSelf: 'stretch',
        boxSizing: 'border-box',
        paddingInline: 'var(--spacing-12)',
        height: '100%',
      }
    : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        boxSizing: 'border-box',
        paddingBlock: 'var(--spacing-12)',
        width: '100%',
      }

  const lineStyle: CSSProperties = isVertical
    ? {
        width: LINE_THICKNESS,
        alignSelf: 'stretch',
        background: 'var(--color-background-muted)',
      }
    : {
        height: LINE_THICKNESS,
        width: '100%',
        background: 'var(--color-background-muted)',
      }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={className}
      style={wrapperStyle}
    >
      <div style={lineStyle} />
    </div>
  )
}
