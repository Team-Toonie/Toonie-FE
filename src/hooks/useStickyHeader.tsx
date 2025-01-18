import { useState, useEffect } from 'react';

const useStickyHeader = (
  contentRef: React.RefObject<HTMLDivElement>,
  defaultHeaderRef: React.RefObject<HTMLDivElement>
) => {
  const [isStickyHeaderVisible, setIsStickyHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      const defaultHeaderElement = defaultHeaderRef.current;

      if (contentElement && defaultHeaderElement) {
        const contentTop = contentElement.getBoundingClientRect().top;
        const defaultHeaderBottom = defaultHeaderElement.getBoundingClientRect().bottom;

        setIsStickyHeaderVisible(contentTop >= defaultHeaderBottom);
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
  }, [contentRef, defaultHeaderRef]);

  return isStickyHeaderVisible;
};

export default useStickyHeader;
