import { useEffect, useRef } from 'react';

function useIntersectionObserver(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, options);

    const { current: currentObserver } = observer;

    return () => currentObserver.disconnect();
  }, [callback, options]);

  return observer;
}