import type { CSSProperties } from 'react'
import { Icon } from '../Icon'

export interface ChipAreaOption {
  value: string
  label: string
}

export interface ChipAreaProps {
  /** Selectable chip options. */
  options: ChipAreaOption[]
  /** Currently selected values (controlled). */
  selectedValues?: string[]
  /** Fired with the next selection whenever a chip is toggled. */
  onChange?: (values: string[]) => void
  /** When true, only one chip can be selected at a time. */
  singleSelect?: boolean
  /** Extra class forwarded to the root container. */
  className?: string
  /** Inline style merged onto the root container. */
  style?: CSSProperties
}

/**
 * A wrap-flowing group of selectable chips. Each chip toggles its value in/out
 * of `selectedValues`; `singleSelect` restricts selection to a single value.
 * Selected chips switch to the brand-subtle background with a brand outline.
 */
export function ChipArea({
  options,
  selectedValues = [],
  onChange,
  singleSelect = false,
  className,
  style,
}: ChipAreaProps) {
  function handleChipClick(value: string) {
    if (!onChange) return

    if (singleSelect) {
      onChange(selectedValues.includes(value) ? [] : [value])
      return
    }

    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((v) => v !== value))
    } else {
      onChange([...selectedValues, value])
    }
  }

  const rootStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--spacing-8)',
    ...style,
  }

  return (
    <div
      role="listbox"
      aria-label="카테고리 필터"
      aria-multiselectable={!singleSelect}
      className={className}
      style={rootStyle}
    >
      {options.map((option) => {
        const isSelected = selectedValues.includes(option.value)
        const accentColor = isSelected
          ? 'var(--color-interactive-primary)'
          : 'var(--color-content-strong)'

        return (
          <div
            key={option.value}
            role="option"
            aria-selected={isSelected}
            tabIndex={0}
            onClick={() => handleChipClick(option.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleChipClick(option.value)
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-4)',
              padding: 'var(--spacing-4) var(--spacing-8)',
              borderRadius: 'var(--radius-md)',
              backgroundColor: isSelected
                ? 'var(--color-background-brandsubtle)'
                : 'var(--color-background-muted)',
              outline: isSelected
                ? '2px solid var(--color-interactive-primary)'
                : 'none',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            <Icon name="design" size={16} color={accentColor} />
            <span
              style={{
                font: 'var(--body-sm-bold)',
                color: accentColor,
                whiteSpace: 'nowrap',
              }}
            >
              {option.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
