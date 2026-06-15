import { iconPaths, type IconName } from './icon-data'

export interface IconProps {
  /** Name of the icon to render (one of the 19 icon set entries). */
  name: IconName
  /** Width and height in pixels (square). Defaults to 16. */
  size?: number
  /**
   * Icon color. When omitted, falls back to the `--color-text-tertiary` token.
   * Has no effect on `google`, which keeps fixed brand colors.
   */
  color?: string
  /**
   * Accessible name. When provided the icon is exposed as `role="img"` with a
   * `<title>`; when omitted the icon is decorative (`aria-hidden`).
   */
  title?: string
  /** Extra class applied to the root `<svg>`. */
  className?: string
}

export function Icon({ name, size = 16, color, title, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable={false}
      className={className}
      style={{ color: color ?? 'var(--color-text-tertiary)' }}
    >
      {title ? <title>{title}</title> : null}
      {iconPaths[name]}
    </svg>
  )
}
