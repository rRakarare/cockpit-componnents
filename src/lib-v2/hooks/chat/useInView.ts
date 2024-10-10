/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useCallback, RefObject } from 'react';

const useInView = (dependencies: unknown[]): [RefObject<HTMLDivElement>, boolean, () => void] => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const callbackFunction = useCallback((entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction);
    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [callbackFunction, ...dependencies]);

  const scrollToElement: () => void = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }, []);

  return [elementRef, isInView, scrollToElement];
};

export default useInView;
