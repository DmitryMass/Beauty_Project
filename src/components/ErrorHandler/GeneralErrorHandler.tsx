import { FC, memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//
import closeLogo from '@/assets/icons/closeIcon.svg';
import { errorHanlder } from '@/styles/errorHandler';

interface IGeneralErrorHandlerProps {
  data: string;
  isError: boolean;
  edit?: boolean;
}

const GeneralErrorHandler: FC<IGeneralErrorHandlerProps> = ({
  data,
  isError,
  edit = false,
}) => {
  const navigate = useNavigate();
  const [error, setError] = useState(isError);
  const handleClick = () => {
    if (edit) {
      setError(false);
      navigate(import.meta.env.VITE_ADMIN);
      return;
    }
    setError(false);
  };

  return (
    <>
      {error ? (
        <div onClick={handleClick} className={errorHanlder.wrapper}>
          <div className={errorHanlder.container}>
            <p className='text-gold text-center'>{data}</p>
            <img
              className={errorHanlder.closeBtn}
              src={closeLogo}
              alt='closeLogo'
              onClick={handleClick}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(GeneralErrorHandler);
