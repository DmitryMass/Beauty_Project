import { FC, useState } from 'react';
import { useGetGroupQuery, useGetGroupsQuery } from '@/store/api/adminApi';
import { useTranslation } from 'react-i18next';
//
import RegisterToStudy from '@/components/forms/RegisterToStudy';
import Logo from '@/components/Logo/Logo';
import DropDown from '@/components/DropDown/DropDown';
import BurgerMenu from '@/components/home/BurgerMenu';
//
import { study } from '@/styles/study';
import './study.scss';
import Loader from '@/components/Loader/Loader';
import BackBtn from '@/components/BackBtn/BackBtn';

const Study: FC = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<string>('...');
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const {
    data: groupData = [],
    isLoading: groupLoading,
    isError: groupError,
  } = useGetGroupsQuery('');

  const {
    data = null,
    refetch,
    isError,
    isFetching,
  } = useGetGroupQuery(
    { id: selected.toLowerCase() },
    {
      refetchOnMountOrArgChange: true,
      skip: selected === '...' ? true : false,
    }
  );

  return (
    <div className='bg-black w-full h-full'>
      <div className={`${study.container} flex justify-start`}>
        <div className='blur h-[105vh]'></div>
        <div className='study' />
        <div className={`${study.wrapper} relative z-[19]`}>
          <BackBtn modificator='w-[35px] h-[35px] absolute top-[40px] left-[15px] z-[50] max-[992px]:hidden' />
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator='w-[85px] ml-auto max-[992px]:hidden absolute top-0 right-[15px]'
          />
          <BurgerMenu modificator='ml-auto justify-end w-[80px] h-[85px] max-[576px]:h-[50px] max-[992px]:absolute top-0 right-[15px]' />
          <div>
            <h1 className={study.title}>{t('courseRegister')}</h1>
            <p className={study.subtitle}>{t('requiredFields')}</p>
          </div>
          <div className='relative'>
            <div className='flex justify-start items-center mb-[10px]'>
              <p className={`${study.label} w-[130px]`}>{t('courseType')}</p>
              {isFetching ? (
                <div className='mb-[-2px]'>
                  <Loader />
                </div>
              ) : null}
              {groupLoading ? (
                <div className='mb-[-2px]'>
                  <Loader />
                </div>
              ) : null}
              {groupError ? (
                <p className='text-[12px] text-red-500'>
                  {t('запис технічка')}
                </p>
              ) : null}
            </div>
            <div
              onClick={() => setToggleDropDown((prev) => !prev)}
              className={`${study.select} flex justify-between mt-[5px]`}
            >
              <p className='block first-letter:uppercase'>{t(`${selected}`)}</p>
              <p
                className={`${
                  toggleDropDown ? 'rotate-[0deg]' : 'rotate-[180deg]'
                } transition-all duration-300 text-[16px] font-bold`}
              >
                ^
              </p>
            </div>
            {toggleDropDown ? (
              <DropDown
                options={groupData ? groupData : []}
                styles={study.option}
                modificator='absolute top-[80px] left-0 w-full bg-darkGrey border-[1px] border-gold  px-[15px] py-[20px] [&>*:nth-child(4)]:mb-0 rounded-[6px]'
                setToggleDropDown={setToggleDropDown}
                setSelected={setSelected}
              />
            ) : null}
          </div>
          <RegisterToStudy refetch={refetch} data={data} isError={isError} />
        </div>
      </div>
    </div>
  );
};

export default Study;
