import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
  refList: RefObject<HTMLElement>[],
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      let isRefClk = false;
      for (let i = 0; i < refList.length; i++) {
        const ref = refList[i];
        if (!ref.current || ref.current.contains(e.target as Node)) {
          isRefClk = true;
          break;
        }
      }
      if (isRefClk) {
        return;
      }

      callback();
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [refList, callback]);
};
