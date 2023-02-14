import { FC, useEffect, useState } from 'react';
import { useGetServicesApiQuery } from '@/store/api/adminApi';
//
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import Logo from '@/components/Logo/Logo';
import Loader from '@/components/Loader/Loader';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
//
import { IServices, IServicesOptions } from '@/types/services';
import circleMinus from '@/assets/images/circleMinus.png';
import circlePlus from '@/assets/images/circlePlus.png';
import servicesRightBranch from '@/assets/images/servicesRightBranch.png';
import servicesLeftBranch from '@/assets/images/servicesLeftBranch.png';
import { servicesStyle } from '@/styles/services';
import './services.scss';
import BurgerMenu from '@/components/home/BurgerMenu';

const ServicesAndPrice: FC = () => {
  const { data = null, isLoading, isError } = useGetServicesApiQuery('');
  const [active, setActive] = useState<string | null | undefined>('');

  const handleClick = (procedure: IServices) => {
    if (active === procedure._id) {
      setActive(null);
      return;
    }
    setActive(procedure._id!);
  };

  useEffect(() => {
    data && setActive(data[0]._id);
  }, [data]);

  return (
    <>
      <img
        className='absolute top-0 right-0 max-w-[400px] '
        src={servicesRightBranch}
        alt='branch'
      />
      <img
        className='absolute bottom-0 left-0 max-w-[200px] '
        src={servicesLeftBranch}
        alt='branch'
      />
      <div className='max-w-[1140px] relative w-full h-full mx-auto px-[15px] pt-[130px]'>
        <BurgerMenu modificator='w-[85px] h-[85px] absolute top-[15px] right-[30px] justify-end' />
        <Logo
          imgModificator='w-[80px] h-[85px]'
          modificator=' w-[85px] absolute top-[0] right-[30px] max-[992px]:hidden'
        />
        <GoldTitleBox>Послуги та ціни</GoldTitleBox>
        {isLoading ? (
          <div className='max-w-[200px] w-full h-full flex justify-center items-center mx-auto'>
            <Loader />
          </div>
        ) : null}
        {isError ? (
          <GeneralErrorHandler
            isError={isError}
            data={
              'Вибачте йдуть технічні роботи. Перезавантажте сторінку або спробуйте пізніше.'
            }
          />
        ) : null}
        {data
          ? data.map((procedure: IServices, idx: number) => (
              <div
                key={procedure._id}
                className='w-full bg-servicesAndPriceBg border-[1px] border-gold relative mb-[40px] '
              >
                <div
                  onClick={() => handleClick(procedure)}
                  className='w-full text-gold py-[10px] px-[20px] border-b-[1px] border-gold flex justify-between items-center'
                >
                  <div className='flex gap-[20px] items-center'>
                    <span className='text-h2 leading-lg text-gold uppercase font-bold'>{`0${
                      idx + 1
                    }`}</span>
                    <h3 className='text-h2 leading-md text-gold font-semibold'>
                      {procedure.procedure}
                    </h3>
                  </div>
                  {active === procedure._id ? (
                    <img src={circleMinus} alt='-' />
                  ) : (
                    <img src={circlePlus} alt='+' />
                  )}
                </div>
                <div
                  className={`
                  ${
                    active !== procedure._id
                      ? `${servicesStyle.nonActiveContent}`
                      : `${servicesStyle.activeContent}`
                  }  `}
                >
                  <div className='overflow-auto deleteScroll pb-[15px]'>
                    {procedure.options
                      ? procedure.options.map((option: IServicesOptions) => (
                          <div
                            key={option.subtitle}
                            className='flex justify-between items-center py-[10px] border-b-[2px] border-b-gold overflow-hidden'
                          >
                            <div>
                              <h2 className='text-gold font-semibold text-md leading-m uppercase mb-[5px]'>
                                {option.title}
                              </h2>
                              <h3 className='text-classic leading-s text-white'>
                                {option.subtitle}
                              </h3>
                            </div>
                            <p className='text-white text-s font-bold '>
                              <span className='text-gold font-semibold text-sm leading-sm'>
                                {option.price}
                              </span>{' '}
                              грн
                            </p>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default ServicesAndPrice;
