import type { ChangeEventHandler, CSSProperties } from 'react'
import { Icon } from '../Icon'

// ⚠️ 토큰 외 값(240px / 36px): width·height 대응 spacing/size 토큰이 없음.
// Figma 고정 스펙(240x36 pill)을 1:1 재현하되, width는 prop으로 오버라이드 가능.
const DEFAULT_WIDTH = '240px'
const FIELD_HEIGHT = '36px'

// Pseudo-states (::placeholder color, :focus-within ring) cannot be expressed
// via inline styles, so they live in this single token-based stylesheet.
const ROOT_CLASS = 'ds-searchbar'
const SCOPED_CSS = `
.${ROOT_CLASS} input::placeholder {
  color: var(--color-text-secondary);
  opacity: 1;
}
.${ROOT_CLASS}:focus-within {
  border-color: var(--color-border-brand);
}
.${ROOT_CLASS}[data-disabled='true']:focus-within {
  border-color: var(--color-border-default);
}
`

export interface SearchBarProps {
  /** Controlled value of the search field. */
  value?: string
  /** Change handler. Receives the native input change event. */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /** Placeholder text. Defaults to the Figma copy "제목, 내용, 작성자". */
  placeholder?: string
  /** Disables the input and dims the field. */
  disabled?: boolean
  /** `name` forwarded to the underlying `<input>` (useful inside forms). */
  name?: string
  /**
   * Accessible name for the search field. Defaults to "검색" since the
   * decorative icon does not label the input.
   */
  'aria-label'?: string
  /**
   * Field width. Defaults to the Figma fixed width (240px); pass e.g. `'100%'`
   * to let the search bar fill its container.
   */
  width?: string
  /** Extra class forwarded to the root `<label>`. */
  className?: string
}

/**
 * A pill-shaped search input. A decorative `search` icon sits to the left of a
 * borderless `<input>`; the rounded container (`--radius-circle`) carries the
 * border and padding so the field reads as a single control.
 *
 * Interaction states are handled in CSS: the container shows a focus ring via
 * `:focus-within` (no `focused` prop), while `disabled` is an explicit prop.
 */
export function SearchBar({
  value,
  onChange,
  placeholder = '제목, 내용, 작성자',
  disabled = false,
  name,
  'aria-label': ariaLabel = '검색',
  width = DEFAULT_WIDTH,
  className,
}: SearchBarProps) {
  const containerStyle: CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-8)',
    width,
    height: FIELD_HEIGHT,
    padding: 'var(--spacing-8) var(--spacing-16)',
    borderRadius: 'var(--radius-circle)',
    border: '1px solid var(--color-border-default)',
    background: 'var(--color-background-default)',
    cursor: disabled ? 'not-allowed' : 'text',
    opacity: disabled ? 0.6 : 1,
  }

  const inputStyle: CSSProperties = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    padding: 0,
    margin: 0,
    background: 'transparent',
    font: 'var(--body-lg-regular)',
    color: 'var(--color-text-primary)',
    cursor: disabled ? 'not-allowed' : 'text',
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  const rootClassName = className ? `${ROOT_CLASS} ${className}` : ROOT_CLASS

  return (
    <label
      style={containerStyle}
      className={rootClassName}
      data-disabled={disabled}
    >
      <style>{SCOPED_CSS}</style>
      <Icon name="search" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        aria-label={ariaLabel}
        style={inputStyle}
      />
    </label>
  )
}
