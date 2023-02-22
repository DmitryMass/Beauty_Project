import { FC } from 'react';
import backBgcLogo from '@/assets/icons/backBgcLogo.svg';
import { useNavigate } from 'react-router-dom';

interface IBackBtnProps {
  modificator: string;
}

const BackBtn: FC<IBackBtnProps> = ({ modificator }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={modificator}>
      <img src={backBgcLogo} alt='backLogo' />
    </button>
  );
};

export default BackBtn;
