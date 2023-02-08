import { FC, useState } from 'react';
//
import { successModal } from '@/styles/success';
import './successResponse.scss';

interface ISuccessResponseProps {
  success: boolean;
  type?: string;
  register?: boolean;
}

const SuccessResponse: FC<ISuccessResponseProps> = ({
  register = false,
  success,
  type,
}) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(success);
  return (
    <>
      {isSuccess ? (
        <div
          onClick={() => setIsSuccess(false)}
          className={successModal.wrapper}
        >
          {register ? (
            <div className={successModal.container}>
              <p className={successModal.subtitle}>Ви записалися на курс</p>
              <h2 className={successModal.title}>{type}</h2>
              <p className={successModal.success}>Успіхів у навчанні!</p>
            </div>
          ) : (
            <div className={successModal.container}>
              <p className={successModal.subtitle}>Набір до групи</p>
              <h2 className={successModal.title}>Курс {type}</h2>
              <p className={successModal.success}>Відкритий</p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default SuccessResponse;
