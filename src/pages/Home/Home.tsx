import Logo from '@/components/Logo/Logo';
import { FC } from 'react';
import Navigation from '../../components/home/Navigation';

import './home.scss';

const Home: FC = () => {
  return (
    <div className='container' >
      <Logo />
      <Navigation />
    </div>
  )
};

export default Home;
