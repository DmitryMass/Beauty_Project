import { FC, useMemo, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import { useFetchVisitMasterMutation } from '@/store/api/visitMasterApi';
import { visitToMasterValidation } from '@/utils/validation/createGroupValidation';

//
import ButtonSubmit from '../../ButtonSubmit/ButtonSubmit';
import Loader from '../../Loader/Loader';
import { useGetOneEmployeeQuery } from '@/store/api/adminApi';
import DropDown from '../../DropDown/DropDown';
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
//
import { study } from '@/styles/study';
import { signToMaster } from '@/styles/signToMaster';
import '../mastersCard.scss';

interface IInitialValues {
  name: string;
  phoneNumber: string;
}

const SignToMasterForm: FC<{ id: string }> = ({ id }) => {
  const { t } = useTranslation();

  const {
    data = null,
    isLoading,
    isError,
    refetch,
  } = useGetOneEmployeeQuery(`${id}`);

  const [
    fetchVisitMaster,
    { isLoading: visitLoading, isError: visitError, error, isSuccess },
  ]: any = useFetchVisitMasterMutation();

  const [selectedProcedure, setSelectedProcedure] = useState<any>('...');
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const selectTime = useMemo(
    () => data?.workDays!.find(({ day }) => day === selectDay),
    [selectDay, data]
  );

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
    body.append('id', id);

    const response: any = await fetchVisitMaster(body);
    if (response.data) {
      refetch();
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='pb-[30px]'>
      {isError ? (
        <GeneralErrorHandler isError={isError} data={t('запис технічка')} />
      ) : null}
      {visitError ? (
        <GeneralErrorHandler
          isError={visitError}
          data={
            error?.data ? `${t(`${error.data.msg}`)}` : `${t('запис технічка')}`
          }
        />
      ) : null}
      {isSuccess ? (
        <SuccessHandler success={isSuccess} data={t('запис успішний')} />
      ) : null}
      <Formik
        initialValues={{ name: '', phoneNumber: '' }}
        onSubmit={handleSubmit}
        validationSchema={visitToMasterValidation}
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
                  type='number'
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
                  {data?.workDays &&
                    data.workDays.map((data) => (
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
            <ButtonSubmit
              isDisabled={data ? false : true}
              modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
              children={visitLoading ? <Loader /> : `${t('signUp')}`}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignToMasterForm;
