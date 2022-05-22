import { useEffect } from 'react';

const useEscCloser = (onClose: () => void) => {
  useEffect(() => {
    function handleEscClose(e: { keyCode: number }) {
      if (e.keyCode === 27) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);
};

export default useEscCloser;
