import type { CSSProperties } from 'react'

export interface PostWriteHeaderProps {
  /** Title text shown on top. Defaults to the Figma copy "게시글 쓰기". */
  title?: string
  /**
   * Guidance text shown below the title. Defaults to the Figma copy
   * "건전한 커뮤니티를 위해 바른말 고운말을 씁시다.".
   */
  subtitle?: string
  /**
   * Header width. Defaults to `'100%'` so it adapts to its container; the Figma
   * frame is a fixed 840px, pass `'840px'` to reproduce it exactly.
   */
  width?: string
  /** Extra class forwarded to the root element. */
  className?: string
}

/**
 * Page-level header for the post-writing screen: a bold title with a single line
 * of guidance copy beneath it.
 *
 * Pure text — owns only layout and typography, all driven by design tokens, so
 * it adds no hardcoded colors or sizes of its own.
 */
export function PostWriteHeader({
  title = '게시글 쓰기',
  subtitle = '건전한 커뮤니티를 위해 바른말 고운말을 씁시다.',
  width = '100%',
  className,
}: PostWriteHeaderProps) {
  const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'var(--spacing-12)',
    width,
  }

  const titleStyle: CSSProperties = {
    margin: 0,
    font: 'var(--display-lg-bold)',
    color: 'var(--color-content-strong)',
  }

  const subtitleStyle: CSSProperties = {
    margin: 0,
    font: 'var(--title-lg-regular)',
    color: 'var(--color-text-secondary)',
  }

  return (
    <div className={className} style={rootStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>{subtitle}</p>
    </div>
  )
}
