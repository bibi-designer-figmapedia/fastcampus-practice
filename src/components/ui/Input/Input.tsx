import { useId } from 'react'
import type { CSSProperties, InputHTMLAttributes, ReactNode } from 'react'

export type InputVariant = 'default' | 'focused' | 'error' | 'disabled'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 입력 필드 레이블 */
  label?: string
  /** 에러 메시지 (설정 시 error 상태로 표시) */
  error?: string
  /** 왼쪽 아이콘 */
  leadingIcon?: ReactNode
  /** 오른쪽 아이콘 */
  trailingIcon?: ReactNode
  /** 추가 클래스 */
  className?: string
  /** 인라인 스타일 */
  style?: CSSProperties
}

export function Input({
  label,
  error,
  leadingIcon,
  trailingIcon,
  disabled = false,
  className,
  style,
  id: idProp,
  ...inputProps
}: InputProps) {
  const generatedId = useId()
  const inputId = idProp ?? generatedId

  const hasError = Boolean(error)

  /* 컨테이너 테두리 색상 — 상태별 */
  const borderColor = hasError
    ? 'var(--color-border-danger)'
    : 'var(--color-border-default)'

  const focusColor = hasError
    ? 'var(--color-border-danger)'
    : 'var(--color-border-brand)'

  const iconColor = disabled
    ? 'var(--color-text-disabled)'
    : 'var(--color-text-tertiary)'

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-4)',
        ...style,
      }}
    >
      {/* 레이블 */}
      {label && (
        <label
          htmlFor={inputId}
          style={{
            font: 'var(--body-sm-bold)',
            color: disabled
              ? 'var(--color-text-disabled)'
              : 'var(--color-text-primary)',
          }}
        >
          {label}
        </label>
      )}

      {/* 입력 박스 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-8)',
          paddingLeft: leadingIcon ? 'var(--spacing-12)' : 'var(--spacing-16)',
          paddingRight: trailingIcon
            ? 'var(--spacing-12)'
            : 'var(--spacing-16)',
          /* ⚠️ 토큰 외 값(44px): 대응 spacing/size 토큰이 없어 입력 필드 고정 높이로 직접 지정 */
          height: '44px',
          borderRadius: 'var(--radius-md)',
          border: `1px solid ${borderColor}`,
          backgroundColor: disabled
            ? 'var(--color-background-muted)'
            : 'var(--color-background-default)',
        }}
        /* focus-within 은 인라인 스타일로 표현 불가하므로 onFocus/onBlur로 테두리 색 전환 */
        onFocus={(e) => {
          if (!disabled) {
            e.currentTarget.style.borderColor = focusColor
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = borderColor
        }}
      >
        {/* 왼쪽 아이콘 */}
        {leadingIcon && (
          <span
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: iconColor,
            }}
          >
            {leadingIcon}
          </span>
        )}

        {/* 입력 필드 */}
        <input
          id={inputId}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={error ? `${inputId}-error` : undefined}
          style={{
            flex: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            padding: 0,
            background: 'transparent',
            font: 'var(--body-lg-regular)',
            color: disabled
              ? 'var(--color-text-disabled)'
              : 'var(--color-text-primary)',
          }}
          {...inputProps}
        />

        {/* 오른쪽 아이콘 */}
        {trailingIcon && (
          <span
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              color: iconColor,
            }}
          >
            {trailingIcon}
          </span>
        )}
      </div>

      {/* 에러 메시지 */}
      {error && (
        <span
          id={`${inputId}-error`}
          role="alert"
          style={{
            font: 'var(--caption-lg-regular)',
            color: 'var(--color-text-danger)',
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}
