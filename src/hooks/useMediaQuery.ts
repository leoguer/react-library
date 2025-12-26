import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 640px)');
};

export const useIsTablet = (): boolean => {
  return useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
};

export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1025px)');
};

export const useIsTouchDevice = (): boolean => {
  return useMediaQuery('(hover: none) and (pointer: coarse)');
};
