import { FC, useState } from 'react';
import info from '@/assets/icons/info.svg';
import { IEmployee, IOptions } from '@/types/employee';

import { useNavigate } from 'react-router-dom';
import close from '@/assets/icons/closeButton.svg';

interface IMasterCardProps {
  employee: IEmployee;
}

const MasterCard: FC<IMasterCardProps> = ({
  employee: { position, imgPath, name, surname, options, _id },
}) => {
  const navigate = useNavigate();

  const [flip, setFlip] = useState<boolean>(false);
  return (
    <>
      <div className='max-w-[235px] w-full mx-auto min-h-[300px] h-full bg-masterCard border-[2px] border-gold rounded-[30px] relative pointer-events-none'>
        {!flip ? (
          <>
            <img
              onClick={() => setFlip(true)}
              className='w-[25px] h-[25px] cursor-pointer absolute top-[15px] right-[15px] z-10 hover:scale-[1.2] transition-all duration-75 pointer-events-auto'
              src={info}
              alt=''
            />
            <img
              className='absolute w-full h-full   rounded-[28px] bg-masterBg'
              src={`http://localhost:5005/assets/${imgPath}`}
              alt=''
            />
          </>
        ) : (
          <div className='h-full text-white pt-[10px]'>
            <div className='w-full py-[5px] text-center bg-masterNameBg rounded-tl-[15px] rounded-tr-[15px] mb-[10px]'>
              <h3 className='text-classic font-medium leading-s text-gold '>
                {name} {surname}
              </h3>
              <p className='text-gold text-s leading-s'>{position}</p>
            </div>
            <div className='px-[10px]'>
              <h3 className='text-classic leading-s font-semibold text-gold mb-[7px]'>
                Послуги:
              </h3>
              <ul className='h-[150px] overflow-auto pointer-events-auto'>
                {options?.map((services: IOptions) => (
                  <li
                    className='mb-[5px] pointer-events-none'
                    key={services.procedure}
                  >
                    <span className='w-[5px] h-[5px] bg-gold inline-block rounded-full mr-[10px] mb-[2px]' />
                    <span className='text-white text-s leading-classic font-medium'>
                      {services.procedure}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className='w-full absolute bottom-[5px] flex justify-center items-center pt-[10px]  pointer-events-auto'
              onClick={() => setFlip(false)}
            >
              <img src={close} alt='close' />
            </button>
          </div>
        )}
      </div>
      <div className='text-white mt-[20px] flex flex-col justify-center items-center min-h-[135px]'>
        <h2 className='text-classic leading-s text-gold mb-[3px] font-medium text-center'>
          {name} {surname}
        </h2>
        <p className='block grow mb-[15px] text-classic leading-s text-white font-medium  text-center'>
          {position}
        </p>
        <button
          onClick={() => navigate(`/masters/${_id}`)}
          className='font-semibold text-classic text-darkGrey bg-gold flex items-center justify-center py-[10px] max-w-[190px] w-full rounded-[15px]  leading-classic hover:bg-hoverGold transition-all duration-100'
        >
          Записатись
        </button>
      </div>
    </>
  );
};

export default MasterCard;
