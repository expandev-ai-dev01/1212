/**
 * @module constants/http
 * @description HTTP status codes and messages
 */

/**
 * @summary
 * HTTP status codes
 *
 * @enum {number}
 */
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

/**
 * @summary
 * HTTP error messages
 *
 * @constant HttpMessage
 */
export const HttpMessage = {
  OK: 'Success',
  CREATED: 'Resource created successfully',
  NO_CONTENT: 'No content',
  BAD_REQUEST: 'Bad request',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'Resource not found',
  CONFLICT: 'Resource conflict',
  UNPROCESSABLE_ENTITY: 'Unprocessable entity',
  INTERNAL_SERVER_ERROR: 'Internal server error',
} as const;
