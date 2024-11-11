
import { useState, useEffect, useRef, useCallback, RefObject } from 'react';

type InViewProps = {
  isLoading: boolean;
  autoScrollDependency: (string | null) [];
  enableAutoScroll: boolean;
}

const useInView = ({ isLoading, autoScrollDependency, enableAutoScroll }: InViewProps
): [RefObject<HTMLDivElement>, boolean, () => void] => {
  const [isInView, setIsInView] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);

  const callbackFunction = useCallback((entries) => {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (isLoading) return;

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
  }, [isLoading, callbackFunction]);

  const scrollToElement: () => void = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }, []);

  useEffect(() => {
    if (enableAutoScroll) {
      scrollToElement();
    }
  }, [...autoScrollDependency, enableAutoScroll, scrollToElement]);

  return [elementRef, isInView, scrollToElement];
};

export default useInView;
