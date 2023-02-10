import { FC, memo, useState } from 'react';
//
import { errorHanlder } from '@/styles/errorHandler';
import closeLogo from '@/assets/icons/closeIcon.svg';

interface IGeneralErrorHandlerProps {
  data: string;
  isError: boolean;
}

const GeneralErrorHandler: FC<IGeneralErrorHandlerProps> = ({
  data,
  isError,
}) => {
  const [error, setError] = useState(isError);

  return (
    <>
      {error ? (
        <div onClick={() => setError(false)} className={errorHanlder.wrapper}>
          <div className={errorHanlder.container}>
            <p className='text-gold text-center'>{data}</p>
            <img
              className={errorHanlder.closeBtn}
              src={closeLogo}
              alt='closeLogo'
              onClick={() => setError(false)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(GeneralErrorHandler);
