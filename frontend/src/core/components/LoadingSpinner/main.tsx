import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';
import { spinnerVariants } from './variants';

/**
 * @component LoadingSpinner
 * @summary Animated loading indicator
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <div className={clsx(spinnerVariants.base, spinnerVariants.sizes[size])}>
        <div className={spinnerVariants.spinner}></div>
      </div>
    </div>
  );
};
