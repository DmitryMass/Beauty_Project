import { FC, memo } from 'react';
import closeLogo from '@/assets/icons/closeIcon.svg';
import { errorHanlder } from '@/styles/errorHandler';

interface IErrorHandlerProps {
  data: any;
  setResponseData: any;
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
