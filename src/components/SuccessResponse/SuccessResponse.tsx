import { successModal } from '@/styles/success';
import { FC, useState } from 'react';

import './successResponse.scss';

interface ISuccessResponseProps {
  success: boolean;
  type: string;
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
              <p className={successModal.subtitle}>Вы записались на курс</p>
              <h2 className={successModal.title}>{type}</h2>
              <p className={successModal.success}>Успехов в обучении!</p>
            </div>
          ) : (
            <div className={successModal.container}>
              <p className={successModal.subtitle}>Набор в группу</p>
              <h2 className={successModal.title}>Курс {type}</h2>
              <p className={successModal.success}>Открыт</p>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default SuccessResponse;
