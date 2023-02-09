import Logo from '@/components/Logo/Logo';
import { useGetOneEmployeeQuery } from '@/store/api/adminApi';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import nailBgc from '@/assets/images/visitToTheMaster.png';

import './signUpToMaster.scss';
import SignToMasterForm from '@/components/signToMaster/SignToMasterForm';

const SignUpToMaster: FC = () => {
  const { id } = useParams();

  return (
    <div className='relative w-full h-full flex max-w-[1340px] mx-auto'>
      <div className='visitBgc' />
      <div className='visitGradient' />
      <div className='max-w-[992px] w-full ml-auto relative z-20 px-[15px]'>
        <div>
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator='w-[85px] ml-auto'
          />
        </div>
        <div>
          <h2 className='text-gold text-h2 leading-mb mb-[5px] font-bold'>
            Запис на візит до майстра
          </h2>
          <p className='text-white text-sm leading-m mb-[15px]'>
            Будь ласка, заповніть усі необхідні дані
          </p>
        </div>
        <SignToMasterForm id={id!} />
      </div>
    </div>
  );
};

export default SignUpToMaster;
