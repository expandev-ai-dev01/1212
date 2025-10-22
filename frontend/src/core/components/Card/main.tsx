import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import type { CardProps } from './types';
import { cardVariants } from './variants';

/**
 * @component Card
 * @summary Container component with elevation and rounded corners
 * @domain core
 * @type ui-component
 * @category display
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'elevated', padding = 'medium', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          cardVariants.base,
          cardVariants.variants[variant],
          cardVariants.padding[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
