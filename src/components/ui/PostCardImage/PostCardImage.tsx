import postCardImage1 from '../../../assets/post-images/post-card-image-1.png'
import postCardImage2 from '../../../assets/post-images/post-card-image-2.png'
import postCardImage3 from '../../../assets/post-images/post-card-image-3.png'
import postCardImage4 from '../../../assets/post-images/post-card-image-4.png'
import postCardImage5 from '../../../assets/post-images/post-card-image-5.png'
import postCardImage6 from '../../../assets/post-images/post-card-image-6.png'

/** The six post card thumbnail themes available in the design system. */
export type PostCardImageType = 1 | 2 | 3 | 4 | 5 | 6

const SOURCES: Record<PostCardImageType, string> = {
  1: postCardImage1,
  2: postCardImage2,
  3: postCardImage3,
  4: postCardImage4,
  5: postCardImage5,
  6: postCardImage6,
}

const ORIGINAL_WIDTH = 160
const ORIGINAL_HEIGHT = 102
const ASPECT_RATIO = ORIGINAL_HEIGHT / ORIGINAL_WIDTH

/**
 * Vertical focal point per theme, matching the crop Figma applies to each fill.
 * Figma scales the source to the frame width and offsets it vertically; the
 * equivalent `object-fit: cover` vertical alignment is `M / (N - 100)`, where
 * N is the source height and M the negative top offset (both as % of the frame).
 * Themes Figma renders as plain centered cover keep the 50% default.
 */
const OBJECT_POSITION_Y: Record<PostCardImageType, string> = {
  1: '50%',
  2: '77.5%',
  3: '50%',
  4: '59.7%',
  5: '72.1%',
  6: '50%',
}

export interface PostCardImageProps {
  /** Which of the six thumbnail themes to render. */
  type: PostCardImageType
  /**
   * Accessible alt text. Pass an empty string for purely decorative usage.
   */
  alt: string
  /** Rendered width in px. Height is derived from the original 160:102 ratio. Default 160. */
  width?: number
  /** Extra class names forwarded to the root `<img>`. */
  className?: string
}

/**
 * Post card thumbnail image (160×102 frame). The source raster is cropped to
 * fill via `object-fit: cover`, with the `--radius-sm` corner radius and
 * `--color-border-default` border from the design system.
 */
export function PostCardImage({
  type,
  alt,
  width = ORIGINAL_WIDTH,
  className,
}: PostCardImageProps) {
  const height = width * ASPECT_RATIO

  return (
    <img
      src={SOURCES[type]}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        display: 'block',
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'cover',
        objectPosition: `center ${OBJECT_POSITION_Y[type]}`,
        boxSizing: 'border-box',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--color-border-default)',
      }}
    />
  )
}
