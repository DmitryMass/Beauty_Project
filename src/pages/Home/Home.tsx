import Logo from '@/components/Logo/Logo';
import { FC } from 'react';

import './home.scss';

const Home: FC = () => {
  return (
    <div className='container' >
      <h5 className='text-white'> Main Page</h5>
      <Logo />
    </div>
  )
};

export default Home;
