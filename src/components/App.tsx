import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
//
import Home from '@/pages/Home/Home';
import Admin from '@/pages/Admin/Admin';
import Study from '@/pages/Study/Study';
//
import './app.scss';
import Masters from '@/pages/Masters/Masters';
import SignUpToMaster from '@/pages/SignUpToMaster/SignUpToMaster';
import Vacancies from '@/pages/Vacancies/Vacancies';

const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route path={ROUTE.STUDY} element={<Study />} />
      <Route path={ROUTE.MASTERS} element={<Masters />} />
      <Route path={ROUTE.MASTER} element={<SignUpToMaster />} />
      <Route path={ROUTE.VACANCIES} element={<Vacancies />} />
      <Route path={import.meta.env.VITE_ADMIN} element={<Admin />} />
    </Routes>
  );
};

export default App;
