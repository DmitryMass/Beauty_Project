import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
//
import Home from '@/pages/Home/Home';
import Admin from '@/pages/Admin/Admin';
import Study from '@/pages/Study/Study';
import Contacts from '@/pages/Contacts/Contacts';
//
import './app.scss';
import Masters from '@/pages/Masters/Masters';
import SignUpToMaster from '@/pages/SignUpToMaster/SignUpToMaster';
import ServicesAndPrice from '@/pages/ServicesAndPrice/ServicesAndPrice';

const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route path={ROUTE.STUDY} element={<Study />} />
      <Route path={ROUTE.MASTERS} element={<Masters />} />
      <Route path={ROUTE.MASTER} element={<SignUpToMaster />} />
      <Route path={ROUTE.CONTACTS} element={<Contacts />} />
      <Route path={ROUTE.SERVICES} element={<ServicesAndPrice />} />
      <Route path={import.meta.env.VITE_ADMIN} element={<Admin />} />
    </Routes>
  );
};

export default App;
