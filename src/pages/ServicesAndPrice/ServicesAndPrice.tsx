import { FC, useEffect, useState } from 'react';
import { useGetServicesApiQuery } from '@/store/api/adminApi';
import { useTranslation } from 'react-i18next';

//
import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import Logo from '@/components/Logo/Logo';
import Loader from '@/components/Loader/Loader';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import BurgerMenu from '@/components/home/BurgerMenu';
//
import circleMinus from '@/assets/images/circleMinus.png';
import circlePlus from '@/assets/images/circlePlus.png';
import servicesRightBranch from '@/assets/images/servicesRightBranch.png';
import servicesLeftBranch from '@/assets/images/servicesLeftBranch.png';
//
import { IServices, IServicesOptions } from '@/types/services';
import { servicesStyle } from '@/styles/services';
import './services.scss';

const ServicesAndPrice: FC = () => {
  const { t } = useTranslation();

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
    if (data && data?.length > 0) {
      setActive(data[0]._id);
    }
  }, [data]);

  return (
    <div>
      <img
        className={servicesStyle.rightBranch}
        src={servicesRightBranch}
        alt='branch'
      />
      <img
        className={servicesStyle.leftBranch}
        src={servicesLeftBranch}
        alt='branch'
      />
      <div className={servicesStyle.serviceContainer}>
        <BurgerMenu modificator={servicesStyle.burgerModificator} />
        <Logo
          imgModificator='w-[80px] h-[85px]'
          modificator={servicesStyle.logoModificator}
        />
        <GoldTitleBox>{t('services')}</GoldTitleBox>
        {isLoading ? (
          <div className={servicesStyle.loadingWrapper}>
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
        <div>
          {data
            ? data.map((procedure: IServices, idx: number) => (
                <div
                  key={procedure._id}
                  className='w-full bg-servicesAndPriceBg border-[1px] border-gold relative mb-[20px] '
                >
                  <div
                    onClick={() => handleClick(procedure)}
                    className={servicesStyle.procedureContainer}
                  >
                    <div className='flex gap-[20px] items-center'>
                      <span className={servicesStyle.procedureIdx}>{`0${
                        idx + 1
                      }`}</span>
                      <h3 className={servicesStyle.procedureTitle}>
                        {t(`${procedure.procedure}`)}
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
                              className={servicesStyle.optionContainer}
                            >
                              <div>
                                <h2 className={servicesStyle.optionTitle}>
                                  {t(`${option.title}`)}
                                </h2>
                                <h3 className={servicesStyle.optionSubtitle}>
                                  {t(`${option.subtitle}`)}
                                </h3>
                              </div>
                              <p className={servicesStyle.optionPrice}>
                                <span className={servicesStyle.optionPriceSpan}>
                                  {option.price}
                                </span>{' '}
                                <span>{t('money')}</span>
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
      </div>
    </div>
  );
};

export default ServicesAndPrice;
