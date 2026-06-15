import { Icon } from '../Icon'
import {
  getButtonRootStyle,
  type ButtonBaseProps,
  type SizeConfig,
} from './buttonStyle'

interface ButtonBaseInternalProps extends ButtonBaseProps {
  /** Per-size geometry supplied by the wrapping size component. */
  config: SizeConfig
}

/**
 * Internal base renderer for the three Button size components. Not exported from
 * the group barrel — consume `ButtonLarge` / `ButtonMedium` / `ButtonSmall` instead.
 */
export function ButtonBase({
  config,
  style = 'core',
  type = 'label',
  disabled = false,
  icon,
  children,
  onClick,
  className,
  radius,
  'aria-label': ariaLabel,
}: ButtonBaseInternalProps) {
  const rootStyle = getButtonRootStyle(config, style, type, disabled)

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      style={radius ? { ...rootStyle, borderRadius: radius } : rootStyle}
    >
      {icon ? (
        <Icon name={icon} size={config.iconSize} color="currentColor" />
      ) : null}
      {type === 'label' && children != null ? <span>{children}</span> : null}
    </button>
  )
}
