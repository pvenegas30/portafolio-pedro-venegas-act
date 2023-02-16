import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import { classNames } from '../../../styles/utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='fixed bottom-8 right-5'>
      <button
        type='button'
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-2 rounded-full shadow-sm text-white bg-teal-700 transition-opacity hover:bg-black dark:active:outline-none dark:active:ring-2 dark:active:ring-offset-2'
        )}
      >
        <AiOutlineArrowUp className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};
