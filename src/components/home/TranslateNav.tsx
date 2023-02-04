import { home } from '@/styles/home';
import { FC } from 'react';

const TranslateNav: FC = () => {
  return (
    <div className={home.langWrapper}>
      <button className={`${home.langBtn}`}>Укр</button>
      <span className='text-gold'>/</span>
      <button className={`${home.langBtn} text-whiteOpacity`}>Анг</button>
    </div>
  );
};

export default TranslateNav;
