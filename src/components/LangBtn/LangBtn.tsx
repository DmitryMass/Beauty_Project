import { home } from '@/styles/home';
import { FC, useCallback } from 'react';
import i18n from '../../language/i18n';
import { useTranslation } from 'react-i18next';

const LangBtn: FC = () => {
  const { t } = useTranslation();

  const changeLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, []);

  return (
    <div className={home.langWrapper}>
      <button
        className={`${home.langBtn} ${
          i18n.language === 'ua' ? 'text-gold' : 'text-whiteOpacity'
        }`}
        onClick={() => changeLanguage('ua')}
      >
        {t('ua')}
      </button>
      <span className='text-gold mx-[2px]'>/</span>
      <button
        className={`${home.langBtn} ${
          i18n.language === 'en' ? 'text-gold' : 'text-whiteOpacity'
        }`}
        onClick={() => changeLanguage('en')}
      >
        {t('en')}
      </button>
    </div>
  );
};

export default LangBtn;
