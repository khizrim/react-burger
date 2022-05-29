import { useEffect } from 'react';

import { ESC_CODE } from '../utils/constants';

const useEscCloser = (onClose: () => void) => {
  useEffect(() => {
    function handleEscClose(e: { keyCode: number }) {
      if (e.keyCode === ESC_CODE) {
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
