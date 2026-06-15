import { useState, type ButtonHTMLAttributes, type CSSProperties } from 'react'
import { Icon } from '../Icon'

export interface BookmarkButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'children'
> {
  /** 저장(북마크) 활성화 여부. true면 채워진 아이콘. 기본 `false`. */
  filled?: boolean
  /** 아이콘 크기(px). 기본 16. */
  size?: number
}

const baseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 'var(--spacing-4)',
  border: 'none',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
}

/**
 * 게시글 저장용 북마크 토글 버튼. `filled` 두 상태를 가지며 controlled로 동작한다
 * (상태는 부모가 `filled` + `onClick`으로 제어). 아이콘은 공용 {@link Icon}을
 * 재사용하고, default는 `--color-text-tertiary`(기존 stats 아이콘과 동일),
 * filled는 `--color-brand-primary` 토큰을 사용한다. 모든 스타일은 DS 토큰 기반.
 */
export function BookmarkButton({
  filled = false,
  size = 16,
  'aria-label': ariaLabel,
  ...rest
}: BookmarkButtonProps) {
  const [hovered, setHovered] = useState(false)
  const label = ariaLabel ?? (filled ? '북마크 해제' : '북마크')

  return (
    <button
      type="button"
      aria-pressed={filled}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseStyle,
        background: hovered ? 'var(--color-background-muted)' : 'transparent',
      }}
      {...rest}
    >
      <Icon
        name={filled ? 'bookmark_fill' : 'bookmark_empty'}
        size={size}
        color={
          filled ? 'var(--color-brand-primary)' : 'var(--color-text-tertiary)'
        }
      />
    </button>
  )
}
