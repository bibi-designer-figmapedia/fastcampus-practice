import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import type { IconName } from '../Icon'

/** Visual style. Maps 1:1 to the Figma `style` variant (Figma's `warining` typo is corrected to `warning`). */
export type ButtonStyle =
  | 'core'
  | 'corelight'
  | 'mono'
  | 'monolight'
  | 'warning'
  | 'warninglight'
  | 'outline'

/** `label` renders text (with optional leading icon); `icon` renders an icon-only square. */
export type ButtonType = 'label' | 'icon'

interface StyleTokens {
  /** Root background token. */
  background: string
  /** Foreground (text + icon) token. */
  color: string
  /** Border color token. Only `outline` uses one. */
  border?: string
}

/**
 * Background / foreground / border tokens per visual style. Size-independent —
 * the three Button sizes share this exact mapping.
 */
const STYLE_TOKENS: Record<ButtonStyle, StyleTokens> = {
  core: {
    background: 'var(--color-interactive-primary)',
    color: 'var(--color-text-onbrand)',
  },
  corelight: {
    background: 'var(--color-background-brandsubtle)',
    color: 'var(--color-brand-primary)',
  },
  mono: {
    background: 'var(--color-content-strong)',
    color: 'var(--color-text-onbrand)',
  },
  monolight: {
    background: 'var(--color-background-muted)',
    color: 'var(--color-content-strong)',
  },
  warning: {
    background: 'var(--color-interactive-destructive)',
    color: 'var(--color-text-onbrand)',
  },
  warninglight: {
    background: 'var(--color-background-dangersubtle)',
    color: 'var(--color-text-danger)',
  },
  outline: {
    background: 'var(--color-background-default)',
    color: 'var(--color-content-strong)',
    border: 'var(--color-border-default)',
  },
}

/** Fixed per-size geometry — this is what replaces a `size` prop across the three components. */
export interface SizeConfig {
  /** Box height for `label`, and full square size for `icon` (matches the Figma frame). */
  box: number
  /** Vertical padding token (label only). */
  paddingBlock: string
  /** Horizontal padding token (label only). */
  paddingInline: string
  /** Gap between leading icon and label. */
  gap: string
  /** Text-style shorthand token for the label. */
  font: string
  /** Rendered icon size in px. */
  iconSize: number
  /** Corner radius token. */
  radius: string
}

export const LARGE: SizeConfig = {
  box: 56,
  paddingBlock: 'var(--spacing-16)',
  // ⚠️ 토큰 외 값(20px): spacing 스케일이 16→24로 건너뛰어 대응 토큰이 없음.
  // 사용자 승인하에 Figma 원본과 1:1 일치를 위해 직접 지정.
  paddingInline: '20px',
  gap: 'var(--spacing-8)',
  font: 'var(--body-lg-bold)',
  iconSize: 24,
  radius: 'var(--radius-md)',
}

export const MEDIUM: SizeConfig = {
  box: 44,
  paddingBlock: 'var(--spacing-12)',
  paddingInline: 'var(--spacing-16)',
  gap: 'var(--spacing-8)',
  font: 'var(--body-sm-bold)',
  iconSize: 20,
  radius: 'var(--radius-md)',
}

export const SMALL: SizeConfig = {
  box: 32,
  paddingBlock: 'var(--spacing-8)',
  paddingInline: 'var(--spacing-12)',
  gap: 'var(--spacing-4)',
  font: 'var(--caption-lg-bold)',
  iconSize: 16,
  radius: 'var(--radius-md)',
}

/** Props shared by `ButtonLarge`, `ButtonMedium`, and `ButtonSmall` (no `size` prop). */
export interface ButtonBaseProps {
  /** Visual style. Defaults to `core`. */
  style?: ButtonStyle
  /** Content type: `label` (text) or `icon` (icon-only square). Defaults to `label`. */
  type?: ButtonType
  /** Disabled state — drops opacity to 30% and blocks interaction. */
  disabled?: boolean
  /**
   * Icon to render. Required for `type="icon"`; optional leading icon for `type="label"`.
   * Reuses the design-system `Icon` component.
   */
  icon?: IconName
  /** Label text (used when `type="label"`). */
  children?: ReactNode
  /** Click handler. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /**
   * Optional corner-radius override. Pass a design token, e.g.
   * `var(--radius-circle)` for a round icon button. Defaults to the size's
   * `--radius-md`.
   */
  radius?: string
  /** Extra class forwarded to the root `<button>`. */
  className?: string
  /** Accessible name. Required for icon-only buttons. */
  'aria-label'?: string
}

/** Builds the root `<button>` inline style for a given size/style/type/disabled combination. */
export function getButtonRootStyle(
  config: SizeConfig,
  style: ButtonStyle,
  type: ButtonType,
  disabled: boolean,
): CSSProperties {
  const tokens = STYLE_TOKENS[style]
  const base: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    gap: config.gap,
    borderRadius: config.radius,
    background: tokens.background,
    color: tokens.color,
    border: tokens.border ? `1px solid ${tokens.border}` : 'none',
    font: config.font,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.3 : 1,
    padding: 0,
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  if (type === 'icon') {
    return { ...base, width: config.box, height: config.box }
  }

  return {
    ...base,
    height: config.box,
    paddingTop: config.paddingBlock,
    paddingBottom: config.paddingBlock,
    paddingLeft: config.paddingInline,
    paddingRight: config.paddingInline,
  }
}
