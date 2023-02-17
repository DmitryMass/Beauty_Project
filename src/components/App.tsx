import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
//
import Home from '@/pages/Home/Home';
import Admin from '@/pages/Admin/Admin';
import Study from '@/pages/Study/Study';
import Contacts from '@/pages/Contacts/Contacts';
import Masters from '@/pages/Masters/Masters';
import SignUpToMaster from '@/pages/SignUpToMaster/SignUpToMaster';
import ServicesAndPrice from '@/pages/ServicesAndPrice/ServicesAndPrice';
import Vacancies from '@/pages/Vacancies/Vacancies';
import EditEmployeeModal from './admin/CreateEmployee/EditEmployeeModal';
import EditService from './admin/CreateServices/EditService';
//
import './app.scss';
import Comments from '@/pages/Comments/Comments';

const App: FC = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home />} />
      <Route path={ROUTE.SERVICES} element={<ServicesAndPrice />} />
      <Route path={ROUTE.MASTERS} element={<Masters />} />
      <Route path={ROUTE.STUDY} element={<Study />} />
      <Route path={ROUTE.CONTACTS} element={<Contacts />} />
      <Route path={ROUTE.COMMENTS} element={<Comments />} />
      <Route path={ROUTE.MASTER} element={<SignUpToMaster />} />
      <Route path={ROUTE.VACANCIES} element={<Vacancies />} />
      <Route path={import.meta.env.VITE_ADMIN} element={<Admin />} />
      <Route
        path={import.meta.env.VITE_SETTING_EMPLOYEE}
        element={<EditEmployeeModal />}
      />
      <Route
        path={import.meta.env.VITE_SETTING_PRICE}
        element={<EditService />}
      />
    </Routes>
  );
};

export default App;
