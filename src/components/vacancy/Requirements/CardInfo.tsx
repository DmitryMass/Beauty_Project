import { FC } from 'react';
//
import dotLogo from '@/assets/images/dot.png';
import checkMark from '@/assets/images/checkMark.png';
//
import './requirements.scss';

interface IVacancy {
  id: string;
  title: string;
  requirements: string[];
  isFlipped: boolean;
  conditions: any[];
}
interface IVacancyProps {
  vacancy: IVacancy;
  back?: boolean;
  handleClick: any;
}

const CardInfo: FC<IVacancyProps> = ({
  vacancy,
  back = false,
  handleClick,
}) => {
  return (
    <>
      <div className='card__title ml-auto bg-coal mt-[15px] pointer-events-none'>
        <p
          key={vacancy.id}
          className={`text-gold font-semibold text-h3 ml-[15px]`}
        >
          0{vacancy.id}
        </p>
      </div>
      <div className='w-full px-[10px] py-[15px]'>
        <h3
          className={`pointer-events-none text-coal text-[16px] font-bold uppercase mb-[10px]`}
        >
          {vacancy.title}
        </h3>
        {back ? (
          <div className='pointer-events-auto'>
            <h3 className='text-sm leading-sm mb-[10px] font-semibold'>
              Умови роботи:
            </h3>
            <ul className=' overflow-auto h-[180px] mb-[10px]'>
              {vacancy.conditions.map((condition) => (
                <li key={condition} className='flex gap-[5px] pb-[3px]'>
                  <img
                    className='mt-[3px] w-[15px] h-[15px]'
                    src={dotLogo}
                    alt='dot'
                  />
                  <span className='text-coal  text-s font-medium'>
                    {condition}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleClick(`${vacancy.id}`)}
              className='  relative z-10 w-full bg-coal text-white max-w-[200px] mx-auto block py-[10px]'
            >
              Вимоги
            </button>
          </div>
        ) : (
          <div>
            <h3 className='text-sm pointer-events-none leading-sm mb-[10px] font-semibold'>
              Вимоги:
            </h3>
            <ul className=' overflow-auto h-[180px] mb-[10px]'>
              {vacancy.requirements.map((require) => (
                <li key={require} className='flex  gap-[5px] pb-[3px]'>
                  <img
                    className='mt-[3px] w-[15px] h-[15px]'
                    src={checkMark}
                    alt='dot'
                  />
                  <span className='text-coal text-s font-medium'>
                    {require}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleClick(`${vacancy.id}`)}
              className=' w-full bg-coal text-white max-w-[200px] mx-auto block py-[10px]'
            >
              Умови роботи
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CardInfo;
