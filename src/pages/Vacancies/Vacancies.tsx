import { FC } from 'react';
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

const Vacancies: FC = () => {
  const { t } = useTranslation();

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
      <GoldTitleBox>{t('vacancies')}</GoldTitleBox>
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
