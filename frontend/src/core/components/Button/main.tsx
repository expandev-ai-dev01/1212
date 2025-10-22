import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import type { ButtonProps } from './types';
import { buttonVariants } from './variants';

/**
 * @component Button
 * @summary Reusable button component with multiple variants and sizes
 * @domain core
 * @type ui-component
 * @category form
 *
 * @props
 * @param {ButtonProps} props - Button properties
 *
 * @styling
 * - Variants: primary, secondary, outline, ghost, danger
 * - Sizes: small, medium, large
 * - Responsive: Full width on mobile optional
 *
 * @accessibility
 * - ARIA: Proper button semantics
 * - Keyboard: Native button keyboard support
 * - Screen Reader: Clear button labels
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={clsx(
          buttonVariants.base,
          buttonVariants.variants[variant],
          buttonVariants.sizes[size],
          fullWidth && buttonVariants.fullWidth,
          disabled && buttonVariants.disabled,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
