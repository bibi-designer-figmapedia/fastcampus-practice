import type { CSSProperties } from 'react'
import { Chip, type ChipVariant } from '../Chip'
import type { IconName } from '../Icon'
import { PostCardImage, type PostCardImageType } from '../PostCardImage'
import { PostCardStats } from '../PostCardStats'

/** A single chip rendered in the post card's chip row. */
export interface PostCardChip {
  /** Chip label text. */
  label: string
  /** Visual variant. `notice` = danger (공지사항), `category` = muted (디자인). */
  variant: ChipVariant
  /** Optional leading icon name forwarded to {@link Chip}. */
  icon?: IconName
}

export interface PostCardProps {
  /** Post title (title/sm/bold). */
  title?: string
  /** Preview/excerpt text (body/lg/regular). Clamped to 2 lines. */
  preview?: string
  /** Relative time label shown in the footer (e.g. "3시간 전"). */
  timeAgo?: string
  /** Chips shown above the body. Defaults to the Figma 공지사항 + 디자인 pair. */
  chips?: PostCardChip[]
  /** Whether to render the right-hand thumbnail. Defaults to `true`. */
  showThumbnail?: boolean
  /** Which {@link PostCardImage} theme (1–6) to render. Defaults to `1`. */
  thumbnailType?: PostCardImageType
  /** Accessible alt text for the thumbnail. */
  thumbnailAlt?: string
  /** View-count value forwarded to {@link PostCardStats}. Defaults to `"0"`. */
  viewCount?: string
  /** Like-count value forwarded to {@link PostCardStats}. Defaults to `"0"`. */
  likeCount?: string
  /**
   * Optional click handler. When provided the whole card becomes an
   * interactive link (pointer cursor, keyboard-focusable, Enter to activate).
   * Omit it to keep the card a plain, non-interactive `<article>`.
   */
  onClick?: () => void
  /** Extra class forwarded to the root element. */
  className?: string
}

const DEFAULT_CHIPS: PostCardChip[] = [
  { label: '공지사항', variant: 'notice', icon: 'notification' },
  { label: '디자인', variant: 'category', icon: 'design' },
]

// ⚠️ 토큰 외 값: 아래 수치들은 docs/design-tokens.md 매핑 테이블에 대응 토큰이 없음.
// spacing 스케일이 4→8→12→16→24로 6/20을 건너뛰고, content width(840)·py(24는
// spacing-24 있으나 가로 정렬상 고정폭)는 레이아웃 고정값이라 신규 토큰 임의 추가 대신
// Figma 원본과 1:1 일치를 위해 플래그된 리터럴 const로 처리한다.
const CHIP_ROW_GAP = '6px' // ChipArea gap (spacing 토큰 없음)
const BODY_GAP = '20px' // PostCardBody 좌우 gap (spacing 토큰 없음)
const CONTENT_WIDTH = '840px' // PostCardContent / Footer 고정 폭 (토큰 없음)

const rootStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-12)',
  paddingTop: 'var(--spacing-24)',
  paddingBottom: 'var(--spacing-24)',
}

const contentStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-8)',
  width: CONTENT_WIDTH,
}

const chipRowStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: CHIP_ROW_GAP,
}

const bodyStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: BODY_GAP,
}

const textColumnStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-8)',
  flex: 1,
  minWidth: 0,
}

const titleStyle: CSSProperties = {
  font: 'var(--title-sm-bold)',
  color: 'var(--color-text-primary)',
  margin: 0,
}

const previewStyle: CSSProperties = {
  font: 'var(--body-lg-regular)',
  color: 'var(--color-content-default)',
  margin: 0,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}

const footerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: CONTENT_WIDTH,
}

const timeAgoStyle: CSSProperties = {
  font: 'var(--caption-lg-medium)',
  color: 'var(--color-text-secondary)',
}

/**
 * A feed/list post card: a chip row, a title + 2-line preview with an optional
 * right-hand thumbnail, and a footer with view/like stats and a relative time.
 *
 * Composes the existing {@link Chip}, {@link PostCardImage} and
 * {@link PostCardStats} design-system components — no raw SVG or duplicated
 * markup. All colors/spacing/typography use design tokens; the few layout
 * dimensions without a matching token are flagged literal consts.
 */
export function PostCard({
  title = '디자인 시스템 토큰 설계 가이드',
  preview = '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다. 색상, 스페이싱, 타이포그래피 토큰의 네이밍과 계층 구조를 다룹니다.',
  timeAgo = '3시간 전',
  chips = DEFAULT_CHIPS,
  showThumbnail = true,
  thumbnailType = 1,
  thumbnailAlt = '',
  viewCount = '0',
  likeCount = '0',
  onClick,
  className,
}: PostCardProps) {
  const interactive = typeof onClick === 'function'

  return (
    <article
      className={className}
      style={interactive ? { ...rootStyle, cursor: 'pointer' } : rootStyle}
      onClick={onClick}
      role={interactive ? 'link' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? title : undefined}
      onKeyDown={
        interactive
          ? (event) => {
              if (event.key === 'Enter') onClick?.()
            }
          : undefined
      }
    >
      <div style={contentStyle}>
        {chips.length > 0 ? (
          <div style={chipRowStyle}>
            {chips.map((chip, index) => (
              <Chip
                key={`${chip.label}-${index}`}
                variant={chip.variant}
                icon={chip.icon}
              >
                {chip.label}
              </Chip>
            ))}
          </div>
        ) : null}

        <div style={bodyStyle}>
          <div style={textColumnStyle}>
            <h3 style={titleStyle}>{title}</h3>
            <p style={previewStyle}>{preview}</p>
          </div>
          {showThumbnail ? (
            <PostCardImage type={thumbnailType} alt={thumbnailAlt} />
          ) : null}
        </div>
      </div>

      <div style={footerStyle}>
        <PostCardStats viewCount={viewCount} likeCount={likeCount} />
        <span style={timeAgoStyle}>{timeAgo}</span>
      </div>
    </article>
  )
}
