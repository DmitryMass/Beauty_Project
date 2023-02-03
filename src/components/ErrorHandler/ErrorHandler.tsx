import { FC, memo, useState } from 'react';

interface IErrorHandlerProps {
  data: any;
  setResponseData: any;
}

const ErrorHandler: FC<IErrorHandlerProps> = ({ data, setResponseData }) => {
  const [error, setError] = useState<string | null>(data);

  const handleClick = () => {
    setError(null);
    setResponseData(null);
  };
  return (
    <>
      {error ? (
        <div
          onClick={handleClick}
          className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-slate-900 bg-opacity-80 flex justify-center items-center'
        >
          <div className='max-w-[400px] bg-slate-600 h-[200px] w-full p-[20px]'>
            <p>{data}</p>
            <img src='' alt='' />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(ErrorHandler);
