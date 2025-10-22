/**
 * @module utils/validation
 * @description Common validation utilities using Zod
 */

import { z } from 'zod';

/**
 * @summary
 * Validates a string field (required, non-empty)
 *
 * @constant zString
 * @type {ZodString}
 */
export const zString = z.string().min(1, 'Field is required');

/**
 * @summary
 * Validates a nullable string field
 *
 * @constant zNullableString
 * @type {ZodNullable<ZodString>}
 */
export const zNullableString = z.string().nullable();

/**
 * @summary
 * Validates a name field (1-100 characters)
 *
 * @constant zName
 * @type {ZodString}
 */
export const zName = z
  .string()
  .min(1, 'Name is required')
  .max(100, 'Name must be at most 100 characters');

/**
 * @summary
 * Validates a description field (nullable, max 500 characters)
 *
 * @constant zNullableDescription
 * @type {ZodNullable<ZodString>}
 */
export const zNullableDescription = z
  .string()
  .max(500, 'Description must be at most 500 characters')
  .nullable();

/**
 * @summary
 * Validates a positive integer
 *
 * @constant zPositiveInt
 * @type {ZodNumber}
 */
export const zPositiveInt = z.number().int().positive('Must be a positive integer');

/**
 * @summary
 * Validates a foreign key (positive integer)
 *
 * @constant zFK
 * @type {ZodNumber}
 */
export const zFK = z.coerce.number().int().positive('Invalid ID');

/**
 * @summary
 * Validates a nullable foreign key
 *
 * @constant zNullableFK
 * @type {ZodNullable<ZodNumber>}
 */
export const zNullableFK = z.coerce.number().int().positive('Invalid ID').nullable();

/**
 * @summary
 * Validates a bit field (0 or 1)
 *
 * @constant zBit
 * @type {ZodNumber}
 */
export const zBit = z.number().int().min(0).max(1, 'Must be 0 or 1');

/**
 * @summary
 * Validates a date string in ISO format
 *
 * @constant zDateString
 * @type {ZodString}
 */
export const zDateString = z.string().datetime('Invalid date format');

/**
 * @summary
 * Validates an email address
 *
 * @constant zEmail
 * @type {ZodString}
 */
export const zEmail = z.string().email('Invalid email address');

/**
 * @summary
 * Validates a URL
 *
 * @constant zUrl
 * @type {ZodString}
 */
export const zUrl = z.string().url('Invalid URL format');

/**
 * @summary
 * Validates a boolean value
 *
 * @constant zBoolean
 * @type {ZodBoolean}
 */
export const zBoolean = z.boolean();
