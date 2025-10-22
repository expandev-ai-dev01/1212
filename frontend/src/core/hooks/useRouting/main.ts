import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useMemo, useCallback } from 'react';
import type { UseRoutingReturn } from './types';

/**
 * @hook useRouting
 * @summary Provides routing utilities and navigation helpers
 * @domain core
 * @type routing-hook
 * @category navigation
 */
export const useRouting = (): UseRoutingReturn => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const query = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location.search]);

  const navigateTo = useCallback(
    (path: string, options?: { replace?: boolean; state?: any }) => {
      navigate(path, options);
    },
    [navigate]
  );

  const navigateBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const getQueryParam = useCallback(
    (key: string): string | null => {
      return query.get(key);
    },
    [query]
  );

  const setQueryParam = useCallback(
    (key: string, value: string) => {
      query.set(key, value);
      navigate(`${location.pathname}?${query.toString()}`, { replace: true });
    },
    [query, navigate, location.pathname]
  );

  return {
    navigate: navigateTo,
    navigateBack,
    location,
    params,
    query,
    getQueryParam,
    setQueryParam,
  };
};
