import { vacanciesStyle } from '@/styles/vacanciesStyle';
import { FC } from 'react';
import Card from './Card';

const Requirements: FC = () => {
  return (
    <div className={vacanciesStyle.requirementsWrapper}>
      <Card />
    </div>
  );
};

export default Requirements;
