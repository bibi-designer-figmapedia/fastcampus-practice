import type {
  ChangeEventHandler,
  CSSProperties,
  MouseEventHandler,
} from 'react'
import { Toolbar } from '../Toolbar'
import { ButtonMedium } from '../Button'
import type { SortTabOption } from '../SortTab'

export interface PostFilterHeaderProps {
  /** Title text shown top-left. Defaults to the Figma copy "전체 게시글". */
  title?: string
  /** Action-button label shown top-right. Defaults to "글쓰기". */
  buttonLabel?: string
  /** Click handler for the action button. */
  onButtonClick?: MouseEventHandler<HTMLButtonElement>

  /** Sort-tab option list, forwarded to {@link Toolbar}. */
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
   * Header width. Defaults to `'100%'` so it adapts to its container; the Figma
   * frame is a fixed 840px, pass `'840px'` to reproduce it exactly.
   */
  width?: string
  /** Extra class forwarded to the root element. */
  className?: string
}

/**
 * Page-level post-filter header: a title with a primary action button on the top
 * row, and a {@link Toolbar} (sort tabs + search) on the bottom row.
 *
 * Owns only layout and the title — all visual styling comes from the reused
 * {@link ButtonMedium} (action button) and {@link Toolbar} (sort + search)
 * components, so it adds no hardcoded colors of its own.
 */
export function PostFilterHeader({
  title = '전체 게시글',
  buttonLabel = '글쓰기',
  onButtonClick,
  sortOptions,
  sortValue,
  onSortChange,
  searchValue,
  onSearchChange,
  searchPlaceholder,
  searchDisabled,
  width = '100%',
  className,
}: PostFilterHeaderProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--spacing-12)',
    width,
  }

  const topRowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }

  const titleStyle: CSSProperties = {
    margin: 0,
    font: 'var(--display-lg-bold)',
    color: 'var(--color-content-strong)',
  }

  return (
    <div className={className} style={rootStyle}>
      <div style={topRowStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <ButtonMedium style="core" onClick={onButtonClick}>
          {buttonLabel}
        </ButtonMedium>
      </div>

      <Toolbar
        width="100%"
        sortOptions={sortOptions}
        sortValue={sortValue}
        onSortChange={onSortChange}
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        searchPlaceholder={searchPlaceholder}
        searchDisabled={searchDisabled}
      />
    </div>
  )
}
