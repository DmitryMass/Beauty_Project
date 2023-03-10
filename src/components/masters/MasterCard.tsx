import { FC, useState } from 'react';
import info from '@/assets/icons/info.svg';
import { IEmployee, IOptions } from '@/types/employee';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import close from '@/assets/icons/closeButton.svg';
import './mastersCard.scss';
import { masters } from '@/styles/masters';

interface IMasterCardProps {
  employee: IEmployee;
}

const MasterCard: FC<IMasterCardProps> = ({
  employee: { position, imgPath, name, surname, options, _id },
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [flip, setFlip] = useState<boolean>(false);
  return (
    <>
      <div className={masters.masterCardContainer}>
        <div className={flip ? 'front__disable' : 'front__active'}>
          <img
            onClick={() => setFlip(true)}
            className={masters.infoLogo}
            src={info}
            alt=''
          />
          <img
            className='absolute w-full h-full object-cover   rounded-[28px] bg-masterBg'
            src={`https://beauty-style-server.onrender.com/assets/${imgPath}`}
            alt=''
          />
        </div>
        <div
          className={`${
            !flip ? 'back__disable' : 'back__active'
          } h-full text-white pt-[10px]`}
        >
          <div className={masters.masterInfoWrapper}>
            <h3 className={masters.nameTitle}>
              {name} {surname}
            </h3>
            <p className={masters.position}>{t(`${position}`)}</p>
          </div>
          <div className='px-[10px]'>
            <h3 className={masters.servicesTitle}>{t('Послуги')}</h3>
            <ul className='master__services h-[150px] overflow-auto pointer-events-auto'>
              {options?.map((services: IOptions) => (
                <li
                  className='mb-[5px] pointer-events-none'
                  key={services.procedure}
                >
                  <span className={masters.listStyle} />
                  <span className={masters.procedure}>
                    {t(`${services.procedure}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <button
            className={`${flip ? 'visible' : 'invisible'} ${masters.btnClose}`}
            onClick={() => setFlip(false)}
          >
            <img src={close} alt='close' />
          </button>
        </div>
      </div>
      <div className={masters.underCardWrapper}>
        <h2 className={masters.underCardTitleName}>
          {name} {surname}
        </h2>
        <p className={masters.underCardPosition}>{t(`${position}`)}</p>
        <button
          onClick={() => navigate(`/masters/${_id}`)}
          className={masters.btnSignUp}
        >
          {t('signUp')}
        </button>
      </div>
    </>
  );
};

export default MasterCard;
