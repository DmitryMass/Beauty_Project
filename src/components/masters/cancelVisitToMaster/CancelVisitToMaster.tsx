import { FC, useMemo, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import { useGetOneEmployeeQuery } from '@/store/api/adminApi';
import { useCancelVisitMutation } from '@/store/api/visitMasterApi';
//
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import DropDown from '@/components/DropDown/DropDown';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import Loader from '@/components/Loader/Loader';
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';
//
import { signToMaster } from '@/styles/signToMaster';
import { study } from '@/styles/study';

interface ICancelFormProps {
  id?: string;
}
interface IInitialValues {
  name: string;
  phoneNumber: string;
}

const CancelVisitToMaster: FC<ICancelFormProps> = ({ id }) => {
  const { t } = useTranslation();
  const { data = null, isLoading, isError } = useGetOneEmployeeQuery(`${id}`);

  const [selectedProcedure, setSelectedProcedure] = useState<any>('...');
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const selectTime = useMemo(
    () => data?.schedule!.find(({ day }) => day === selectDay),
    [selectDay, data]
  );

  const [
    cancelVisit,
    { isError: cancelError, error, isSuccess, isLoading: cancelLoading },
  ]: any = useCancelVisitMutation();

  const handleSubmit = async (
    values: IInitialValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    resetForm();
    const body = new FormData();
    Object.entries(values).forEach((item) => {
      body.append(item[0], item[1].toString());
    });
    body.append('hour', selectedTime);
    body.append('day', selectDay);
    body.append('procedure', selectedProcedure);
    await cancelVisit({ data: body, id });
  };

  return (
    <div className='pt-[50px] max-w-[992px] w-full mx-auto relative z-[19] pb-[30px]'>
      {isError ? (
        <GeneralErrorHandler isError={isError} data={t('запис технічка')} />
      ) : null}
      {cancelError ? (
        <GeneralErrorHandler
          isError={cancelError}
          data={
            error?.data ? `${t(`${error.data.msg}`)}` : `${t('запис технічка')}`
          }
        />
      ) : null}
      {isSuccess ? (
        <SuccessHandler
          success={isSuccess}
          data={t('Ви успішно відмінили запис.')}
        />
      ) : null}
      <h3 className='text-h3 font-medium max-[576px]:text-md mb-[20px] max-[576px]:mb-[30px] text-center text-white'>
        {t('cancelTitle')}
      </h3>
      {isLoading ? (
        <div className='flex justify-center items-center max-w-[200px] w-full mx-auto'>
          <Loader />
        </div>
      ) : null}
      <Formik
        initialValues={{ name: '', phoneNumber: '' }}
        onSubmit={handleSubmit}
        validationSchema={''}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label className={study.label} htmlFor='name'>
                {t('name')}
                {touched.name && errors.name && (
                  <span className={study.error}>{t(`${errors.name}`)}</span>
                )}
                <Field
                  id='name'
                  type='text'
                  className={study.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  placeholder={t('namePlaceholder')}
                />
              </label>
              <label className={study.label} htmlFor='phoneNumber'>
                {t('number')}
                {touched.phoneNumber && errors.phoneNumber && (
                  <span className={study.error}>
                    {t(`${errors.phoneNumber}`)}
                  </span>
                )}
                <Field
                  id='phoneNumber'
                  type='string'
                  className={study.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  name='phoneNumber'
                  placeholder='0991223445'
                />
              </label>
            </div>
            <div className='relative'>
              <p className={study.label}>{t('service')}</p>
              <div
                onClick={() => setToggleDropDown((prev) => !prev)}
                className={`${study.input} flex justify-between mt-[5px]`}
              >
                <p>{t(`${selectedProcedure}`)}</p>
                <p
                  className={`${
                    toggleDropDown ? 'rotate-[0deg]' : 'rotate-[180deg]'
                  } transition-all duration-300 text-[16px] font-bold`}
                >
                  ^
                </p>
              </div>
              {toggleDropDown ? (
                <DropDown
                  options={data ? data.options : []}
                  visit
                  styles={`${study.option} flex justify-between items-center`}
                  modificator='masterDropdown absolute top-[80px] left-0 w-full bg-darkGrey border-[1px] border-gold  px-[15px] py-[20px] overflow-auto h-[230px] rounded-[6px]'
                  setToggleDropDown={setToggleDropDown}
                  setSelected={setSelectedProcedure}
                />
              ) : null}
            </div>
            <section>
              <span className={study.label}>{t('yourMaster')}</span>
              <h3 className={study.input}>
                {isError
                  ? 'Помилка серверу...'
                  : `${data?.name} ${data?.surname}`}
              </h3>
            </section>
            <div className={signToMaster.selectsWrapper}>
              <div>
                <p className={study.label}>{t('date')}</p>
                <select
                  className={signToMaster.select}
                  onChange={(e) => setSelectDay(e.target.value)}
                >
                  <option label={`${t('chooseDate')}`} value={``} />
                  {data?.schedule &&
                    data.schedule.map((data) => (
                      <option key={data.day} value={data.day} label={data.day}>
                        {data.day}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <p className={study.label}>{t('time')}</p>
                <select
                  className={signToMaster.select}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option label={`${t('chooseTime')}`} />
                  {selectTime &&
                    selectTime.hours.map((time: string) => (
                      <option key={time} value={time} label={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className='w-full max-[450px]:flex max-[450px]:justify-center'>
              <ButtonSubmit
                isDisabled={data ? false : true}
                modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100 '
                children={
                  cancelLoading ? <Loader /> : `${t('Скасувати запис')}`
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CancelVisitToMaster;
