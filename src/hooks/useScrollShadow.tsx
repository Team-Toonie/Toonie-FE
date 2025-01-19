import { useState, useEffect } from 'react';

const useScrollShadow = (contentRef: React.RefObject<HTMLDivElement>) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;

      if (contentElement) {
        setHasScrolled(contentElement.scrollTop > 0);
      }
    };

    // 스크롤이 감지되면, handleScroll 함수를 실행
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [contentRef]);

  return hasScrolled;
};

export default useScrollShadow;
