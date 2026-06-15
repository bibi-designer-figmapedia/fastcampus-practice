import postImage1 from '../../../assets/post-images/post-image-1.png'
import postImage2 from '../../../assets/post-images/post-image-2.png'
import postImage3 from '../../../assets/post-images/post-image-3.png'
import postImage4 from '../../../assets/post-images/post-image-4.png'
import postImage5 from '../../../assets/post-images/post-image-5.png'
import postImage6 from '../../../assets/post-images/post-image-6.png'

/** The six post image themes available in the design system. */
export type PostImageType = 1 | 2 | 3 | 4 | 5 | 6

const SOURCES: Record<PostImageType, string> = {
  1: postImage1,
  2: postImage2,
  3: postImage3,
  4: postImage4,
  5: postImage5,
  6: postImage6,
}

const ORIGINAL_WIDTH = 500
const ORIGINAL_HEIGHT = 319
const ASPECT_RATIO = ORIGINAL_HEIGHT / ORIGINAL_WIDTH

/**
 * Vertical focal point per theme, matching the crop Figma applies to each fill.
 * Figma scales the source to the frame width and offsets it vertically; the
 * equivalent `object-fit: cover` vertical alignment is `M / (N - 100)`, where
 * N is the source height and M the negative top offset (both as % of the frame).
 * Themes Figma renders as plain centered cover keep the 50% default.
 */
const OBJECT_POSITION_Y: Record<PostImageType, string> = {
  1: '50%',
  2: '57.5%',
  3: '45.7%',
  4: '62.6%',
  5: '50%',
  6: '50%',
}

export interface PostImageProps {
  /** Which of the six image themes to render. */
  type: PostImageType
  /**
   * Accessible alt text. Pass an empty string for purely decorative usage.
   */
  alt: string
  /** Rendered width in px. Height is derived from the original 500:319 ratio. Default 500. */
  width?: number
  /** Extra class names forwarded to the root `<img>`. */
  className?: string
}

/**
 * Large post body image (500×319 frame). The source raster is cropped to fill
 * via `object-fit: cover`, with the `--radius-md` corner radius and
 * `--color-border-default` border from the design system.
 */
export function PostImage({
  type,
  alt,
  width = ORIGINAL_WIDTH,
  className,
}: PostImageProps) {
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
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--color-border-default)',
      }}
    />
  )
}
