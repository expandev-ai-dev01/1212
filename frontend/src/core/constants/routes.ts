export const ROUTES = {
  HOME: '/',
  QUIZ: '/quiz',
  NOT_FOUND: '*',
} as const;

export type RouteKey = keyof typeof ROUTES;
