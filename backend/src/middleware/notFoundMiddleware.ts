/**
 * @module middleware/notFoundMiddleware
 * @description 404 Not Found middleware
 */

import { Request, Response } from 'express';

/**
 * @summary
 * Handles 404 Not Found errors
 *
 * @function notFoundMiddleware
 * @module middleware
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 *
 * @returns {void}
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: `Route ${req.method} ${req.path} not found`,
      details: {
        method: req.method,
        path: req.path,
      },
    },
    timestamp: new Date().toISOString(),
  });
}
