import { FC, useMemo, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
//
import ButtonSubmit from '../../ButtonSubmit/ButtonSubmit';
import Loader from '../../Loader/Loader';
import { useGetOneEmployeeQuery } from '@/store/api/adminApi';
import DropDown from '../../DropDown/DropDown';
import SelectTimeAndDate from '../selectTimeAndDate/SelectTimeAndDate';
//
import { study } from '@/styles/study';
import { IWorkDays } from '@/types/employee';
import GeneralErrorHandler from '@/components/ErrorHandler/GeneralErrorHandler';

interface IInitialValues {
  name: string;
  phoneNumber: string;
}
interface ISelectTimeAndDateProps {
  workDays: IWorkDays[] | [];
}

const SignToMasterForm: FC<{ id: string }> = ({ id }) => {
  const { data = null, isLoading, isError } = useGetOneEmployeeQuery(`${id}`);
  const [selectedProcedure, setSelectedProcedure] = useState<string>('Послуга');
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const selectTime = useMemo(
    () => data?.workDays!.find(({ day }) => day === selectDay),
    [selectDay]
  );

  const handleSubmit = async (
    values: IInitialValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    console.log({
      ...values,
      hour: selectedTime,
      day: selectDay,
      procedure: selectedProcedure,
      id,
    });
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
              <p className={study.label}>Тип курсу</p>
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
            <div className='flex justify-start items-center gap-[40px]'>
              <div>
                <p className={study.label}>Дата</p>
                <select
                  className={
                    'px-[15px] py-[10px] rounded-[6px] bg-inputBg text-gold placeholder:text-goldOpacity cursor-pointer border-[1px] border-gold mb-[10px] font-medium mt-[3px] focus-visible:outline-none focus:shadow-[inset_0_0px_2px_2px_rgba(0,0,0,0.6)] focus:shadow-gold'
                  }
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
                  className={
                    'px-[15px] py-[10px] rounded-[6px] bg-inputBg text-gold placeholder:text-goldOpacity cursor-pointer border-[1px] border-gold mb-[10px] font-medium mt-[3px] focus-visible:outline-none focus:shadow-[inset_0_0px_2px_2px_rgba(0,0,0,0.6)] focus:shadow-gold'
                  }
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
              modificator='max-w-[200px] w-full py-[10px] font-semibold rounded-[6px] hover:bg-hoverGold transition-all duration-100'
              //   children={isLoading ? <Loader /> : 'Зареєструватися'}
              children={'Зареєструватися'}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignToMasterForm;
