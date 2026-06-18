import type { ChangeEventHandler, CSSProperties } from 'react'

// Pseudo-states (::placeholder color) cannot be expressed via inline styles,
// so they live in this single token-based stylesheet scoped to the root class.
const ROOT_CLASS = 'ds-title-input-box'
const SCOPED_CSS = `
.${ROOT_CLASS}::placeholder {
  color: var(--color-text-disabled);
  opacity: 1;
}
.${ROOT_CLASS}:disabled {
  cursor: not-allowed;
}
`

export interface TitleInputBoxProps {
  /** Controlled value of the title field. */
  value?: string
  /** Change handler. Receives the native input change event. */
  onChange?: ChangeEventHandler<HTMLInputElement>
  /** Placeholder text. Defaults to the Figma copy "제목을 입력해주세요.". */
  placeholder?: string
  /** Disables the input. */
  disabled?: boolean
  /** `name` forwarded to the underlying `<input>` (useful inside forms). */
  name?: string
  /** Accessible name for the field. Defaults to "제목". */
  'aria-label'?: string
  /**
   * Field width. Defaults to `'100%'` (capped at the Figma max of 840px); pass
   * e.g. `'840px'` to pin it to the design frame width.
   */
  width?: string
  /** Extra class forwarded to the root `<input>`. */
  className?: string
}

/**
 * A single-line title input box mirroring the Figma `Input` node (764:2345):
 * a 64px-tall bordered field with the placeholder "제목을 입력해주세요.".
 * All colors, spacing, radius and typography come from design tokens; the
 * placeholder color is handled in a scoped stylesheet since inline styles can
 * not target `::placeholder`.
 */
export function TitleInputBox({
  value,
  onChange,
  placeholder = '제목을 입력해주세요.',
  disabled = false,
  name,
  'aria-label': ariaLabel = '제목',
  width = '100%',
  className,
}: TitleInputBoxProps) {
  const inputStyle: CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width,
    maxWidth: '840px',
    height: 'var(--spacing-64)',
    paddingInline: 'var(--spacing-24)',
    paddingBlock: 'var(--spacing-16)',
    border: '1px solid var(--color-text-disabled)',
    borderRadius: 'var(--radius-md)',
    font: 'var(--title-lg-regular)',
    color: 'var(--color-text-primary)',
    background: 'transparent',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  const rootClassName = className ? `${ROOT_CLASS} ${className}` : ROOT_CLASS

  return (
    <>
      <style>{SCOPED_CSS}</style>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        aria-label={ariaLabel}
        className={rootClassName}
        style={inputStyle}
      />
    </>
  )
}
