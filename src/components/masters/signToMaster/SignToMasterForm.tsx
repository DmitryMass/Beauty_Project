import { FC, useMemo, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
//
import ButtonSubmit from '../../ButtonSubmit/ButtonSubmit';
import Loader from '../../Loader/Loader';
import { useGetOneEmployeeQuery } from '@/store/api/adminApi';
import DropDown from '../../DropDown/DropDown';
//
import { study } from '@/styles/study';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';
import { useFetchVisitMasterMutation } from '@/store/api/visitMasterApi';
import SuccessHandler from '@/components/SuccessHandler/SuccessHandler';
import { signToMaster } from '@/styles/signToMaster';

interface IInitialValues {
  name: string;
  phoneNumber: string;
}

const SignToMasterForm: FC<{ id: string }> = ({ id }) => {
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
  const [selectedProcedure, setSelectedProcedure] = useState<string>('Послуга');
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

    try {
      const response: any = await fetchVisitMaster(body);
      if (response.data) {
        refetch();
      }
    } catch (err) {
      console.log(`${err} помикла в записі на процедуру`);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {isError ? (
        <GeneralErrorHandler
          isError={isError}
          data='Йдуть технічні роботи. Вибачте за незручності.'
        />
      ) : null}
      {visitError ? (
        <GeneralErrorHandler
          isError={visitError}
          data={
            error?.data
              ? error.data.msg
              : 'Йдуть технічні роботи. Вибачте за незручності.'
          }
        />
      ) : null}
      {isSuccess ? (
        <SuccessHandler success={isSuccess} data={'Запис успішний!'} />
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
                Ім'я
                {touched.name && errors.name && (
                  <span className={study.error}>{errors.name}</span>
                )}
                <Field
                  id='name'
                  type='text'
                  className={study.input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name='name'
                  placeholder="Ваше ім'я"
                />
              </label>
              <label className={study.label} htmlFor='phoneNumber'>
                Номер телефону
                {touched.phoneNumber && errors.phoneNumber && (
                  <span className={study.error}>{errors.phoneNumber}</span>
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
              <p className={study.label}>Послуга</p>
              <div
                onClick={() => setToggleDropDown((prev) => !prev)}
                className={`${study.input} flex justify-between mt-[5px]`}
              >
                <p>{selectedProcedure}</p>
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
                  modificator='absolute top-[90px] left-0 w-full bg-darkGrey border-[1px] border-gold  px-[15px] py-[20px]'
                  setToggleDropDown={setToggleDropDown}
                  setSelected={setSelectedProcedure}
                />
              ) : null}
            </div>
            <section>
              <span className={study.label}>Ваш майстер</span>
              <h3 className={study.input}>
                {isError
                  ? 'Помилка серверу...'
                  : `${data?.name} ${data?.surname}`}
              </h3>
            </section>
            <div className={signToMaster.selectsWrapper}>
              <div>
                <p className={study.label}>Дата</p>
                <select
                  className={signToMaster.select}
                  defaultValue={'Оберіть дату'}
                  onChange={(e) => setSelectDay(e.target.value)}
                >
                  <option disabled value={'Оберіть дату'}>
                    Оберіть дату
                  </option>
                  {data?.workDays &&
                    data.workDays.map((data) => (
                      <option key={data.day} value={data.day}>
                        {data.day}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <p className={study.label}>Час</p>
                <select
                  className={signToMaster.select}
                  defaultValue={'Вільний час'}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value={'Вільний час'}>Вільний час</option>
                  {selectTime &&
                    selectTime.hours.map((time: string) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <ButtonSubmit
              isDisabled={data ? false : true}
              modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
              children={visitLoading ? <Loader /> : 'Зареєструватися'}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignToMasterForm;
