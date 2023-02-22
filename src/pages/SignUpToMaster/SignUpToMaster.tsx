import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//
import Logo from '@/components/Logo/Logo';
import BurgerMenu from '@/components/home/BurgerMenu';
import SignToMasterForm from '@/components/masters/signToMaster/SignToMasterForm';
import BackBtn from '@/components/BackBtn/BackBtn';
//

import { signToMaster } from '@/styles/signToMaster';
import './signUpToMaster.scss';

const SignUpToMaster: FC = () => {
  const { t } = useTranslation();

  const { id } = useParams();

  return (
    <div className={signToMaster.container}>
      <div className='visitBgc' />
      <div className='visitGradient' />
      <div className={signToMaster.dataWrapper}>
        <div>
          <BackBtn modificator='w-[35px] h-[35px] absolute top-[40px] left-[15px] z-[50] max-[992px]:hidden' />
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator='w-[85px] ml-auto  max-[992px]:hidden'
          />
          <BurgerMenu modificator='w-[85px] h-[85px] max-[576px]:h-[50px] ml-auto justify-end' />
        </div>
        <div className='pt-[30px] max-[576px]:pt-[20px]'>
          <h2 className={signToMaster.title}>{t('titleMaster')}</h2>
          <p className={signToMaster.subtitle}>{t('subtitleMaster')}</p>
        </div>
        <SignToMasterForm id={id!} />
      </div>
    </div>
  );
};

export default SignUpToMaster;
