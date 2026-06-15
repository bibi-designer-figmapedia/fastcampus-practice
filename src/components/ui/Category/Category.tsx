import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

/** Selection state. Maps 1:1 to the Figma `state` variant. */
export type CategoryState = 'default' | 'selected'

export interface CategoryProps {
  /** Selection state. Defaults to `default`. */
  state?: CategoryState
  /** Category label text. */
  children: ReactNode
  /** Click handler — used to select this category. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** Extra class forwarded to the root `<button>`. */
  className?: string
}

/**
 * A tab-style category label. The `selected` state darkens the text to
 * `--color-text-primary` and draws a 4px `--color-interactive-primary` underline;
 * `default` uses `--color-text-disabled` with no underline.
 *
 * The underline is rendered as an inset box-shadow so both states keep the same
 * 52px height — selecting a category never shifts the layout.
 */
export function Category({
  state = 'default',
  children,
  onClick,
  className,
}: CategoryProps) {
  const isSelected = state === 'selected'

  const style: CSSProperties = {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    // ⚠️ 토큰 외 값(6px/10px): spacing 스케일이 4→8→12로 건너뛰어 대응 토큰이 없음.
    // 사용자 승인하에 Figma 원본과 1:1 일치를 위해 직접 지정. (좌우는 --spacing-8)
    padding: '6px var(--spacing-8) 10px',
    font: 'var(--display-sm-bold)',
    whiteSpace: 'nowrap',
    color: isSelected
      ? 'var(--color-text-primary)'
      : 'var(--color-text-disabled)',
    background: 'none',
    border: 'none',
    boxShadow: isSelected
      ? 'inset 0 -4px 0 0 var(--color-interactive-primary)'
      : 'none',
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
      {children}
    </button>
  )
}
