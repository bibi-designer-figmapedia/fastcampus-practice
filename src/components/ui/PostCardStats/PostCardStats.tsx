import type { CSSProperties } from 'react'
import { Icon } from '../Icon'
import { BookmarkButton } from '../BookmarkButton'

export interface PostCardStatsProps {
  /** View count value. Defaults to `"0"`. */
  viewCount?: string
  /** Like count value. Defaults to `"0"`. */
  likeCount?: string
  /** 좋아요 활성화 여부. true면 채워진 빨간 하트. 기본 `false`. */
  liked?: boolean
  /** 북마크 활성화 여부. `onToggleBookmark`와 함께 사용한다. */
  bookmarked?: boolean
  /**
   * 북마크 토글 핸들러. 전달될 때만 세 번째 아이템으로 북마크 버튼을 노출한다
   * (미전달 시 조회수·좋아요만 렌더 — 하위호환 유지).
   */
  onToggleBookmark?: () => void
  /** Extra class forwarded to the root element. */
  className?: string
}

// ⚠️ 토큰 외 값(6px): Figma `gap` 6px에 대응하는 spacing 토큰이 없음
// (spacing 스케일이 --spacing-4 → --spacing-8로 건너뜀). Category 컴포넌트의
// 6px 처리 선례를 따라 Figma 원본과 1:1 일치를 위해 직접 지정.
const ICON_TEXT_GAP = '6px'

const rootStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 'var(--spacing-24)',
}

const areaStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: ICON_TEXT_GAP,
}

const textStyle: CSSProperties = {
  font: 'var(--caption-lg-medium)',
  color: 'var(--color-text-tertiary)',
}

/**
 * Compact stats row for a post card: a view-count area (eye icon + count) and a
 * like-count area (heart icon + count), separated by a `--spacing-24` gap.
 *
 * Icons reuse the shared {@link Icon} component at 16px; text uses the
 * `--caption-lg-medium` typography token in `--color-text-tertiary`.
 */
export function PostCardStats({
  viewCount = '0',
  likeCount = '0',
  liked = false,
  bookmarked = false,
  onToggleBookmark,
  className,
}: PostCardStatsProps) {
  return (
    <div className={className} style={rootStyle}>
      <div style={areaStyle}>
        <Icon name="eye-on" size={16} title="조회수" />
        <span style={textStyle}>{viewCount}</span>
      </div>
      <div style={areaStyle}>
        <Icon
          name={liked ? 'heart_fill' : 'heart_empty'}
          size={16}
          color={liked ? 'var(--color-text-danger)' : undefined}
          title="좋아요"
        />
        <span style={textStyle}>{likeCount}</span>
      </div>
      {onToggleBookmark ? (
        <BookmarkButton filled={bookmarked} onClick={onToggleBookmark} />
      ) : null}
    </div>
  )
}
