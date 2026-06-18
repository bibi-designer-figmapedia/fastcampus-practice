import type { CSSProperties } from 'react'
import { Icon, type IconName } from '../Icon'

/** Visual state of the input. Maps to the Figma `type` variant (node 783:3924). */
export type TitleInputType = 'default' | 'focus' | 'error' | 'disabled'

export interface TitleInputProps {
  /** Top label text. Defaults to `'label'`. */
  label?: string
  /** Text rendered inside the input box and reused as the helptext line. Defaults to `'placeholder'`. */
  headline?: string
  /** Whether the helptext line is shown. Defaults to `true`. */
  helptext?: boolean
  /** Whether the trailing icon is shown. Defaults to `true`. */
  icon?: boolean
  /** Which icon to render when {@link icon} is true. Defaults to `'search'`. */
  iconName?: IconName
  /** Visual state. Defaults to `'default'`. */
  type?: TitleInputType
  /** Component width. Defaults to `'100%'`; pass `'345px'` to match the Figma frame. */
  width?: string
  /** Extra class forwarded to the root element. */
  className?: string
}

const DEFAULT_HEADLINE = 'placeholder'
const DEFAULT_LABEL = 'label'

/**
 * Title + bordered input + helptext composite mirroring the Figma `TitleInput`
 * (node 783:3924). The `type` variant drives border / helptext colors only;
 * the input text and label are static. All colors, spacing, radius and type
 * come from design tokens. The trailing icon reuses the shared {@link Icon}.
 */
export function TitleInput({
  label = DEFAULT_LABEL,
  headline = DEFAULT_HEADLINE,
  helptext = true,
  icon = true,
  iconName = 'search',
  type = 'default',
  width = '100%',
  className,
}: TitleInputProps) {
  const isDisabled = type === 'disabled'

  const borderColor =
    type === 'focus'
      ? 'var(--color-interactive-primaryhover)'
      : type === 'error'
        ? 'var(--color-interactive-destructivehover)'
        : 'var(--color-text-disabled)'

  const helptextColor =
    type === 'focus'
      ? 'var(--color-interactive-primaryhover)'
      : type === 'error'
        ? 'var(--color-interactive-destructivehover)'
        : 'var(--color-text-tertiary)'

  const inputTextColor = isDisabled
    ? 'var(--color-text-tertiary)'
    : 'var(--color-text-primary)'

  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-2)',
    width,
  }

  const labelStyle: CSSProperties = {
    margin: 0,
    font: 'var(--body-sm-bold)',
    color: 'var(--color-text-primary)',
  }

  // Figma의 LabelArea / HelptextArea 래퍼(node 783:3882 · 783:3953):
  // `flex items-center p-4px w-full`. 이 4px 패딩 + 루트 gap 2px가
  // 합쳐져 label↔input↔helptext 간 6px 시각 간격을 만든다.
  const fieldAreaStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 'var(--spacing-4)',
  }

  const inputBoxStyle: CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--spacing-12)',
    width: '100%',
    border: `1px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    paddingInline: 'var(--spacing-16)',
    paddingBlock: 'var(--spacing-12)',
  }

  const inputTextStyle: CSSProperties = {
    font: 'var(--body-lg-regular)',
    color: inputTextColor,
  }

  const helptextStyle: CSSProperties = {
    margin: 0,
    font: 'var(--caption-lg-medium)',
    color: helptextColor,
  }

  return (
    <div className={className} style={rootStyle}>
      <div style={fieldAreaStyle}>
        <p style={labelStyle}>{label}</p>
      </div>
      <div style={inputBoxStyle}>
        <span style={inputTextStyle}>{headline}</span>
        {icon ? (
          <Icon name={iconName} size={16} color={inputTextColor} />
        ) : null}
      </div>
      {helptext ? (
        <div style={fieldAreaStyle}>
          <p style={helptextStyle}>{headline}</p>
        </div>
      ) : null}
    </div>
  )
}
