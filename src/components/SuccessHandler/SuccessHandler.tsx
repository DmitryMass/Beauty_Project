import { successModal } from '@/styles/success';
import { FC, useState } from 'react';

interface ISuccessHandler {
  success: boolean;
  data: string;
}

const SuccessHandler: FC<ISuccessHandler> = ({ success, data }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(success);

  return (
    <>
      {isSuccess ? (
        <div
          onClick={() => setIsSuccess(false)}
          className={successModal.wrapper}
        >
          <div className={successModal.container}>
            <p className={successModal.success}>{data}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SuccessHandler;
