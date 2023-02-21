import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/utils/route/route';
import { useGetEmployeesQuery } from '@/store/api/adminApi';
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
import Comments from '@/pages/Comments/Comments';
import MoreComments from '@/pages/MoreComments/MoreComments';
import ClientReviewForm from '@/pages/ClientReview/ClientReviewForm';
import GeneralErrorHandler from './ErrorHandler/GeneralErrorHandler';
//
import '../language/i18n';
import './app.scss';

import preview from '@/assets/images/previewStyleLogo.png';
import circle from '@/assets/images/previewCircle.png';
import { useTranslation } from 'react-i18next';
import StudyCancel from '@/pages/StudyCancel/StudyCancel';

const App: FC = () => {
  // Тестовий запрос для Preview
  const { isLoading, isError } = useGetEmployeesQuery();
  const { t } = useTranslation();

  return (
    <>
      {isLoading ? (
        <div className='fixed inset-0 z-[500] bg-coal flex flex-col justify-center items-center gap-[30px]'>
          <img className='max-w-[200px]' src={preview} alt='previewLogo' />
          <img
            className=' max-w-[50px]  circle '
            src={circle}
            alt='circleLogo'
          />
        </div>
      ) : null}
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data={`${t('запис технічка')}`}
        />
      ) : null}
      <Routes>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.SERVICES} element={<ServicesAndPrice />} />
        <Route path={ROUTE.MASTERS} element={<Masters />} />
        <Route path={ROUTE.MASTER} element={<SignUpToMaster />} />
        <Route path={ROUTE.STUDY} element={<Study />} />
        <Route path={ROUTE.CONTACTS} element={<Contacts />} />
        <Route path={ROUTE.FEEDBACK} element={<Comments />} />
        <Route path={ROUTE.VACANCIES} element={<Vacancies />} />
        <Route path={ROUTE.FEEDBACKMORE} element={<MoreComments />} />
        <Route path={ROUTE.CLIENTFEEDBACK} element={<ClientReviewForm />} />
        <Route path={ROUTE.CANCELSTUDY} element={<StudyCancel />} />
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
    </>
  );
};

export default App;
