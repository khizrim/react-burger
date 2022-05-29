import { useEffect } from 'react';

const useOverlayCloser = (onClose: () => void) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleOverlayClose(e: any) {
      if (e.target.className.includes('modal_overlay')) {
        onClose();
      }
    }
    document.addEventListener('click', handleOverlayClose);

    return () => {
      document.removeEventListener('click', handleOverlayClose);
    };
  }, [onClose]);
};

export default useOverlayCloser;
