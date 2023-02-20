import { FC, useState } from 'react';
import { useGetAllVacanciesQuery } from '@/store/api/adminApi';
//
import CardInfo from './CardInfo';
import LinkButton from '@/components/LinkButton/LinkButton';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import Loader from '@/components/Loader/Loader';

import { IVacancy } from '@/types/vacancies';
import './requirements.scss';
import { vacanciesStyle } from '@/styles/vacanciesStyle';
import { useTranslation } from 'react-i18next';

const Card: FC = () => {
  const { data = null, isLoading, isError } = useGetAllVacanciesQuery('');
  const [showFront, setShowFront] = useState<string | null>('');
  const { t } = useTranslation();

  const handleClick = (id: string) => {
    if (id === showFront) {
      setShowFront(null);
      return;
    }
    setShowFront(id);
  };

  return (
    <>
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={`${t('запис технічка')}`}
        />
      ) : null}

      {isLoading ? (
        <div className={vacanciesStyle.cardLoading}>
          <Loader />
        </div>
      ) : null}

      {data
        ? data.map((vacancy: IVacancy, idx: number) => (
            <div key={vacancy._id} className='card'>
              <div className='card__group group h-[400px] max-w-[320px] w-full [perspective:1000px] mb-[20px] '>
                <div
                  className={`card__container relative z-30 h-full w-full transition-all duration-500 [transform-style:preserve-3d]  ${
                    showFront === vacancy._id
                      ? '[transform:rotateY(-180deg)]'
                      : ''
                  }`}
                >
                  <div
                    className={`${
                      showFront === vacancy._id
                        ? 'card__hidden'
                        : 'card__visible'
                    } card__front  absolute inset-0 h-full w-full bg-goldOpacity [backface-visibility:hidden]  bg-goldWhite block`}
                  >
                    <CardInfo
                      idx={idx}
                      handleClick={handleClick}
                      vacancy={vacancy}
                    />
                  </div>
                  <div
                    className={`${
                      showFront === vacancy._id
                        ? 'card__visible'
                        : 'card__hidden'
                    } card__back absolute  h-full w-full  inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]  bg-gold block`}
                  >
                    <CardInfo
                      idx={idx}
                      handleClick={handleClick}
                      vacancy={vacancy}
                      back={true}
                    />
                  </div>
                </div>
              </div>
              <LinkButton
                modificator='relative py-[7px] max-w-[220px] w-full mx-auto rounded-[7px]'
                route='/#'
              >
                Залишити заявку
              </LinkButton>
            </div>
          ))
        : null}
    </>
  );
};

export default Card;
