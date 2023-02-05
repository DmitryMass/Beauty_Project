import { FC, useState } from 'react';
import { useGetGroupQuery } from '@/store/api/adminApi';
//
import RegisterToStudy from '@/components/forms/RegisterToStudy';
import Logo from '@/components/Logo/Logo';
import DropDown from '@/components/DropDown/DropDown';
//
import { study } from '@/styles/study';
import './study.scss';

export const options = [
  'Basic eyebrow training',
  'Brows skill up',
  'Basic manicure training',
  'Manicure skill up',
];

const Study: FC = () => {
  const [selected, setSelected] = useState<string>(options[0]);
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);

  const { data = null, refetch } = useGetGroupQuery(
    { id: selected.toLowerCase() },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className='bg-black w-full h-full'>
      <div className={`${study.container} flex justify-start`}>
        <div className='blur h-[105vh]'></div>
        <div className='h-full w-[50%] relative z-10'>
          <div className='study'></div>
        </div>
        <div className={`${study.wrapper} relative z-20`}>
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator='w-[85px] ml-auto'
          />
          <div>
            <h1 className={study.title}>Register for training</h1>
            <p className={study.subtitle}>
              Please fill in all the required fields
            </p>
          </div>
          <div className='relative'>
            <p className={study.label}>Course type</p>
            <div
              onClick={() => setToggleDropDown((prev) => !prev)}
              className={`${study.select} flex justify-between mt-[5px]`}
            >
              <p>{selected}</p>
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
                options={options}
                styles={study.option}
                modificator='absolute top-[90px] left-0 w-full bg-darkGrey border-[1px] border-gold  px-[15px] py-[20px] [&>*:nth-child(4)]:mb-0'
                setToggleDropDown={setToggleDropDown}
                setSelected={setSelected}
              />
            ) : null}
          </div>
          <RegisterToStudy refetch={refetch} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Study;
