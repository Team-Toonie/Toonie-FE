import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollShadow = (contentRef: React.RefObject<HTMLDivElement>) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

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

  // 경로가 변경될 떄 스크롤 상태 초기화
  useEffect(() => {
    setHasScrolled(false);

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.scrollTop = 0;
    }
  }, [location.pathname]);

  return hasScrolled;
};

export default useScrollShadow;
