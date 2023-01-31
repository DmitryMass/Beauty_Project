import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';

import './app.scss';

const App: FC = () => {
  return (
    <div className='App'>
      <h1 className='text-[50px] text-red-600'>hello world</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
