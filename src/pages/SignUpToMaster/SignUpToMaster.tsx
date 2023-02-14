import Logo from '@/components/Logo/Logo';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

import './signUpToMaster.scss';
import SignToMasterForm from '@/components/masters/signToMaster/SignToMasterForm';
import { signToMaster } from '@/styles/signToMaster';
import BurgerMenu from '@/components/home/BurgerMenu';

const SignUpToMaster: FC = () => {
  const { id } = useParams();

  return (
    <div className={signToMaster.container}>
      <div className='visitBgc' />
      <div className='visitGradient' />
      <div className={signToMaster.dataWrapper}>
        <div>
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator='w-[85px] ml-auto  max-[992px]:hidden'
          />
          <BurgerMenu modificator='w-[85px] h-[85px] ml-auto justify-end' />
        </div>
        <div>
          <h2 className={signToMaster.title}>Запис на візит до майстра</h2>
          <p className={signToMaster.subtitle}>
            Будь ласка, заповніть усі необхідні дані
          </p>
        </div>
        <SignToMasterForm id={id!} />
      </div>
    </div>
  );
};

export default SignUpToMaster;
