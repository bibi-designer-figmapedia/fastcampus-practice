import type { CSSProperties } from 'react'
import { PostImage, type PostImageType } from '../PostImage'

/** Container state. Maps to the Figma `state` variant (node 783:2817). */
export type ContentInputContainerState = 'empty' | 'filled'

export interface ContentInputContainerProps {
  /** Which state to render. Defaults to `empty`. */
  state?: ContentInputContainerState
  /** Placeholder shown in the `empty` state. */
  placeholder?: string
  /** Body text shown in the `filled` state. */
  value?: string
  /** Which post image theme to render in the `filled` state. Defaults to `1`. */
  imageType?: PostImageType
  /** Accessible alt text for the `filled` state image. */
  imageAlt?: string
  /** Extra class forwarded to the root element. */
  className?: string
}

const DEFAULT_PLACEHOLDER = '게시글 내용을 입력해주세요.'

// Layout frame dimensions from Figma — plain px, not spacing-scale tokens.
const FRAME_MAX_WIDTH = 840
const FRAME_HEIGHT = 766
const IMAGE_WIDTH = 500

/**
 * Post content area container mirroring the Figma `ContentInputContainer`
 * (node 783:2817). The `empty` state renders a bordered box with a tertiary
 * placeholder; the `filled` state stacks a {@link PostImage} above the body
 * text. All colors, spacing, radius and type come from design tokens.
 */
export function ContentInputContainer({
  state = 'empty',
  placeholder = DEFAULT_PLACEHOLDER,
  value = '',
  imageType = 1,
  imageAlt = '',
  className,
}: ContentInputContainerProps) {
  const isFilled = state === 'filled'

  const baseStyle: CSSProperties = {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: `${FRAME_MAX_WIDTH}px`,
    height: `${FRAME_HEIGHT}px`,
    borderRadius: 'var(--radius-md)',
  }

  const rootStyle: CSSProperties = isFilled
    ? {
        ...baseStyle,
        flexDirection: 'column',
        gap: 'var(--spacing-32)',
      }
    : {
        ...baseStyle,
        border: '1px solid var(--color-text-disabled)',
        paddingInline: 'var(--spacing-24)',
        paddingBlock: 'var(--spacing-32)',
      }

  const placeholderStyle: CSSProperties = {
    font: 'var(--body-lg-regular)',
    color: 'var(--color-text-tertiary)',
    whiteSpace: 'nowrap',
  }

  const bodyStyle: CSSProperties = {
    font: 'var(--body-lg-regular)',
    color: 'var(--color-content-strong)',
    minWidth: '100%',
    wordBreak: 'break-word',
    margin: 0,
  }

  return (
    <div className={className} style={rootStyle}>
      {isFilled ? (
        <>
          <PostImage type={imageType} alt={imageAlt} width={IMAGE_WIDTH} />
          <p style={bodyStyle}>{value}</p>
        </>
      ) : (
        <span style={placeholderStyle}>{placeholder}</span>
      )}
    </div>
  )
}
