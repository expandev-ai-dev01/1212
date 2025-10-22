/**
 * @module config
 * @description Application configuration management
 */

import dotenv from 'dotenv';

dotenv.config();

/**
 * @interface Config
 * @description Application configuration interface
 */
interface Config {
  server: {
    nodeEnv: string;
  };
  api: {
    port: number;
    version: string;
    cors: {
      origin: string | string[];
      credentials: boolean;
      methods: string[];
      allowedHeaders: string[];
      exposedHeaders: string[];
      maxAge: number;
    };
  };
  cache: {
    ttl: number;
    checkPeriod: number;
  };
}

/**
 * @summary
 * Application configuration object
 *
 * @constant config
 * @type {Config}
 */
export const config: Config = {
  server: {
    nodeEnv: process.env.NODE_ENV || 'development',
  },
  api: {
    port: parseInt(process.env.PORT || '3000'),
    version: process.env.API_VERSION || 'v1',
    cors: {
      origin:
        process.env.NODE_ENV === 'production'
          ? process.env.CORS_ORIGINS?.split(',') || []
          : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      exposedHeaders: ['X-Total-Count', 'X-Page-Count'],
      maxAge: 86400,
    },
  },
  cache: {
    ttl: parseInt(process.env.CACHE_TTL || '3600'),
    checkPeriod: parseInt(process.env.CACHE_CHECK_PERIOD || '600'),
  },
};
