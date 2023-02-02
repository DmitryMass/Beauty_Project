import { FC, useState } from 'react';
import RegisterToStudy from '@/components/forms/RegisterToStudy';
import { useGetGroupQuery } from '@/store/api/adminApi';
import Logo from '@/components/Logo/Logo';
import './study.scss';

const options = [
  'Basic eyebrow training',
  'Brows skill up',
  'Basic manicure training',
  'Manicure skill up',
];

const Study: FC = () => {
  const [selected, setSelected] = useState<any>(options[0]);
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
    <div className='study h-full relative max-w-[1340px] mx-auto '>
      <div className=' w-[50%] h-full ml-auto  bg-black px-[15px]'>
        <Logo modificator={'flex justify-end'} />
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
        {data ? <RegisterToStudy refetch={refetch} data={data} /> : null}

        {data ? (
          <div>
            <p>Кол-во мест: {data.countPlaces}</p>
            <p>Дата: {data.whenStart}</p>
            <p>Cтоимость: {data.price}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Study;
