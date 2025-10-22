import { clsx, ClassValue } from 'clsx';

/**
 * @utility cn
 * @summary Utility for merging class names with clsx
 * @category styling
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
