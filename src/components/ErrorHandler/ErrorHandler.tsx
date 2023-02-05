import { FC, memo } from 'react';
//
import { errorHanlder } from '@/styles/errorHandler';
import closeLogo from '@/assets/icons/closeIcon.svg';

interface IErrorHandlerProps {
  data: string;
  setResponseData: (prev: string | null) => void;
}

const ErrorHandler: FC<IErrorHandlerProps> = ({ data, setResponseData }) => {
  const handleClick = () => {
    setResponseData(null);
  };
  return (
    <>
      <div onClick={handleClick} className={errorHanlder.wrapper}>
        <div className={errorHanlder.container}>
          <p className='text-gold'>{data}</p>
          <img
            className={errorHanlder.closeBtn}
            src={closeLogo}
            alt='closeLogo'
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

export default memo(ErrorHandler);
