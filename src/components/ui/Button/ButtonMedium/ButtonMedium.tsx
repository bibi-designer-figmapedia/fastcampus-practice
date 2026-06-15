import { ButtonBase } from '../ButtonBase'
import { MEDIUM, type ButtonBaseProps } from '../buttonStyle'

export type ButtonMediumProps = ButtonBaseProps

/**
 * Medium (44px) button. Uses the `--body-sm-bold` label style, `--radius-md`
 * corners, and a 20px icon. Visual style, content type, and disabled state are
 * controlled via props; size is fixed (use `ButtonLarge` / `ButtonSmall` for others).
 */
export function ButtonMedium(props: ButtonMediumProps) {
  return <ButtonBase config={MEDIUM} {...props} />
}
