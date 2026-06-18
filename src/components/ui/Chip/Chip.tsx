import type { CSSProperties, ReactNode } from 'react'
import { Icon } from '../Icon'
import type { IconName } from '../Icon'

/** Visual variant. Maps 1:1 to the Figma `type` variant. */
export type ChipVariant = 'category' | 'notice'

export interface ChipProps {
  /** Visual variant. Defaults to `category`. */
  variant?: ChipVariant
  /** Optional leading icon, rendered at 16px in the variant's text color. */
  icon?: IconName
  /** Chip label text. */
  children: ReactNode
  /** Extra class forwarded to the root `<span>`. */
  className?: string
}

/** Per-variant background + text color tokens. */
const VARIANT_TOKENS: Record<
  ChipVariant,
  { background: string; color: string }
> = {
  category: {
    background: 'var(--color-background-muted)',
    color: 'var(--color-content-strong)',
  },
  notice: {
    background: 'var(--color-background-danger)',
    color: 'var(--color-text-danger)',
  },
}

/**
 * A compact label/tag. `category` uses a muted background with strong text;
 * `notice` uses a danger background with danger text. Display-only — the Figma
 * component has no interaction states, so this renders as a non-interactive
 * `<span>`.
 */
export function Chip({
  variant = 'category',
  icon,
  children,
  className,
}: ChipProps) {
  const { background, color } = VARIANT_TOKENS[variant]

  const style: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--spacing-4)',
    // 세로 4px / 가로 8px
    padding: 'var(--spacing-4) var(--spacing-8)',
    // ⚠️ 토큰 외 값(6px): radius 스케일이 sm(4px)→md(8px)로 건너뛰어 대응 토큰이 없음.
    // 사용자 승인하에 Figma 원본과 1:1 일치를 위해 직접 지정.
    borderRadius: '6px',
    font: 'var(--body-sm-bold)',
    whiteSpace: 'nowrap',
    background,
    color,
  }

  return (
    <span className={className} style={style}>
      {icon ? <Icon name={icon} size={16} color={color} /> : null}
      {children}
    </span>
  )
}
