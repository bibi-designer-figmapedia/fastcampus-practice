import { ButtonBase } from '../ButtonBase'
import { LARGE, type ButtonBaseProps } from '../buttonStyle'

export type ButtonLargeProps = ButtonBaseProps

/**
 * Large (56px) button. Uses the `--body-lg-bold` label style, `--radius-md`
 * corners, and a 24px icon. Visual style, content type, and disabled state are
 * controlled via props; size is fixed (use `ButtonMedium` / `ButtonSmall` for others).
 */
export function ButtonLarge(props: ButtonLargeProps) {
  return <ButtonBase config={LARGE} {...props} />
}
