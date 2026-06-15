import { ButtonBase } from '../ButtonBase'
import { SMALL, type ButtonBaseProps } from '../buttonStyle'

export type ButtonSmallProps = ButtonBaseProps

/**
 * Small (32px) button. Uses the `--caption-lg-bold` label style, `--radius-md`
 * corners, and a 16px icon. Visual style, content type, and disabled state are
 * controlled via props; size is fixed (use `ButtonLarge` / `ButtonMedium` for others).
 */
export function ButtonSmall(props: ButtonSmallProps) {
  return <ButtonBase config={SMALL} {...props} />
}
