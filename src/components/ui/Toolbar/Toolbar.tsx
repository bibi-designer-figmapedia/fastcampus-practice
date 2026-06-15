import type { ChangeEventHandler, CSSProperties } from 'react'
import { SortTab, type SortTabOption } from '../SortTab'
import { SearchBar } from '../SearchBar'

export interface ToolbarProps {
  /** Sort-tab option list, forwarded to {@link SortTab}. */
  sortOptions: SortTabOption[]
  /** Currently selected sort value. */
  sortValue: string
  /** Sort selection change callback. */
  onSortChange?: (value: string) => void
  /** Controlled value of the search field. */
  searchValue?: string
  /** Search field change handler. Receives the native input change event. */
  onSearchChange?: ChangeEventHandler<HTMLInputElement>
  /** Search field placeholder. Defaults to the SearchBar copy "제목, 내용, 작성자". */
  searchPlaceholder?: string
  /** Disables the search field. */
  searchDisabled?: boolean
  /**
   * Toolbar width. Defaults to `'100%'` so the bar adapts to its container; the
   * Figma frame is a fixed 840px, pass `'840px'` to reproduce it exactly.
   */
  width?: string
  /** Extra class forwarded to the root element. */
  className?: string
}

/**
 * A composite toolbar that pairs a {@link SortTab} (left) with a
 * {@link SearchBar} (right), separated by `justify-content: space-between`.
 *
 * Toolbar owns only layout — all visual styling lives in the reused SortTab and
 * SearchBar components, so it adds no hardcoded colors or spacing of its own.
 */
export function Toolbar({
  sortOptions,
  sortValue,
  onSortChange,
  searchValue,
  onSearchChange,
  searchPlaceholder,
  searchDisabled,
  width = '100%',
  className,
}: ToolbarProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width,
  }

  return (
    <div className={className} style={rootStyle}>
      <SortTab
        options={sortOptions}
        value={sortValue}
        onChange={onSortChange}
      />
      <SearchBar
        value={searchValue}
        onChange={onSearchChange}
        placeholder={searchPlaceholder}
        disabled={searchDisabled}
      />
    </div>
  )
}
