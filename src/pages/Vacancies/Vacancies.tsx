import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//
import Requirements from '@/components/vacancy/Requirements/Requirements';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import BurgerMenu from '@/components/home/BurgerMenu';
import Logo from '@/components/Logo/Logo';
//
import vacancyLeft from '@/assets/images/vacancyLeftBranch.png';
import vacancyRight from '@/assets/images/vacancyRightBranch.png';
//
import './vacancies.scss';
import { vacanciesStyle } from '@/styles/vacanciesStyle';
import { useHideTitle } from '@/components/customHooks/useHideTitle';

const Vacancies: FC = () => {
  const { t } = useTranslation();
  const { listenToScroll, visibility } = useHideTitle();

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  return (
    <div className={vacanciesStyle.vacancyWrapper}>
      <img
        className={vacanciesStyle.vacancyLeftBranch}
        src={vacancyLeft}
        alt='vacancyBranch'
      />
      <img
        className={vacanciesStyle.vacancyRightBranch}
        src={vacancyRight}
        alt='vacancyBranch'
      />
      <GoldTitleBox
        modificator={`${
          visibility
            ? 'visible opacity-1 transition-all duration-150'
            : 'invisible opacity-0 transition-all duration-150'
        }`}
      >
        {t('vacancies')}
      </GoldTitleBox>
      <BurgerMenu modificator={vacanciesStyle.burgerModificator} />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator={vacanciesStyle.logoModificator}
      />
      <div className={vacanciesStyle.vacancyContainer}>
        <div className='w-full text-center mb-[10px]'>
          <p className={vacanciesStyle.vacancyTitle}>{t('vacancyTitle')}</p>
        </div>
        <div className=' w-full bg-gold text-center mx-auto'>
          <p className={vacanciesStyle.vacancySubtitle}>
            {t('vacancySubtitle')}
          </p>
        </div>
        <Requirements />
      </div>
    </div>
  );
};

export default Vacancies;
