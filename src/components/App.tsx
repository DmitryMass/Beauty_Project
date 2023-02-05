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


const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route path={ROUTE.STUDY} element={<Study />} />
      <Route path={ROUTE.CONTACTS} element={<Contacts />} />
      <Route path={import.meta.env.VITE_ADMIN} element={<Admin />} />
    </Routes>
  );
};

export default App;
