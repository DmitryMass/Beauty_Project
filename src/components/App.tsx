import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';

import Admin from '@/pages/Admin/Admin';
import Study from '@/pages/Study/Study';
import './app.scss';
import { ROUTE } from '@/utils/route/route';

const App: FC = () => {
  return (
    <div className='h-full  '>
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.STUDY} element={<Study />} />
        <Route path={import.meta.env.VITE_ADMIN} element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
