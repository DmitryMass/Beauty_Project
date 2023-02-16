import { FC } from 'react';
//
import Requirements from '@/components/Requirements/Requirements';
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
//
import vacancyLeft from '@/assets/images/vacancyLeftBranch.png';
import vacancyRight from '@/assets/images/vacancyRightBranch.png';
//
import './vacancies.scss';
import BurgerMenu from '@/components/home/BurgerMenu';
import Logo from '@/components/Logo/Logo';

const Vacancies: FC = () => {
  return (
    <div className='relative h-full'>
      <img
        className='absolute bottom-0 left-0 max-w-[250px] w-full'
        src={vacancyLeft}
        alt=''
      />
      <img
        className='absolute right-0 bottom-0 max-w-[250px] w-full'
        src={vacancyRight}
        alt=''
      />
      <GoldTitleBox>Вакансії</GoldTitleBox>
      <BurgerMenu modificator='w-[85px] h-[85px] absolute top-[15px] right-[30px] justify-end ' />
      <Logo
        imgModificator='w-[80px] h-[85px]'
        modificator=' w-[85px] absolute top-[0] right-[30px] max-[992px]:hidden'
      />
      <div className='max-w-[1030px] w-full mx-auto px-[15px] pt-[100px]'>
        <div className='w-full text-center mb-[10px]'>
          <p className='text-white text-h2 leading-md'>
            Приєднуйся до нашої дружної команди професіоналів
          </p>
        </div>
        <div className=' w-full bg-gold text-center mx-auto'>
          <p className='leading-6 tracking-[.35em] text-sm font-semibold py-[5px]'>
            Адже разом ми зробимо цей світ кращим!
          </p>
        </div>
        <Requirements />
      </div>
    </div>
  );
};

export default Vacancies;
