import { FC, useState } from 'react';
import RegisterToStudy from '@/components/forms/RegisterToStudy';
import { useGetGroupQuery } from '@/store/api/adminApi';
import Logo from '@/components/Logo/Logo';
import './study.scss';
import { study } from '@/styles/study';

const options = [
  'Basic eyebrow training',
  'Brows skill up',
  'Basic manicure training',
  'Manicure skill up',
];

interface IDropDownProps {
  setSelected: any;
  setToggleDropDown: any;
}
const DropDown: FC<IDropDownProps> = ({ setSelected, setToggleDropDown }) => {
  const hanldeClick = (value: string) => {
    setSelected(value);
    setToggleDropDown(false);
  };

  return (
    <div className='absolute top-[70px] left-0 w-full bg-black'>
      {options.map((value) => (
        <div
          className={study.select}
          key={value}
          onClick={() => hanldeClick(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

const Study: FC = () => {
  const [selected, setSelected] = useState<any>(options[0]);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const {
    data = null,
    refetch,
    isLoading,
    isError,
  } = useGetGroupQuery(
    { id: selected.toLowerCase() },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  return (
    <div className={study.container}>
      <div className={study.wrapper}>
        <Logo modificator='mb-[20px]' />
        <div>
          <h1 className={study.title}>Register for training</h1>
          <p className={study.subtitle}>
            Please fill in all the required fields
          </p>
        </div>
        <div className='relative'>
          <div
            onClick={() => setToggleDropDown((prev) => !prev)}
            className={`${study.select} flex justify-between`}
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
              setToggleDropDown={setToggleDropDown}
              setSelected={setSelected}
            />
          ) : null}
        </div>
        {data ? <RegisterToStudy refetch={refetch} data={data} /> : null}
      </div>
    </div>
  );
};

export default Study;
