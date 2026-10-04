import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Aakanksh`;
  }, [title]);
};

export default usePageTitle;
