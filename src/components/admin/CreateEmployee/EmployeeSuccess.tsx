import { successModal } from '@/styles/success';
import { FC, useState } from 'react';

interface IEmployeeSuccessProps {
  success: boolean;
}

const EmployeeSuccess: FC<IEmployeeSuccessProps> = ({ success }) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(success);
  return (
    <>
      {isSuccess ? (
        <div
          onClick={() => setIsSuccess(false)}
          className={successModal.wrapper}
        >
          <div className={successModal.container}>
            <p className={successModal.success}>Сотрудник успешно добавлен!</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EmployeeSuccess;
