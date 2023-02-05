import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Formik, Field } from 'formik';
//
import { useCreateGroup } from '@/components/customHooks/useCreateGroup';
import DropDown from '@/components/DropDown/DropDown';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
import SuccessResponse from '@/components/SuccessResponse/SuccessResponse';
//
import { createGroup } from '@/styles/forms';
import { createGroupValidation } from '@/utils/validation/createGroupValidation';
import 'react-datepicker/dist/react-datepicker.css';

const CreateGroup: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [selected, setSelected] = useState<string>(options[0]);
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);
  const { handleSubmit, isLoading, isSuccess, data } = useCreateGroup(
    startDate,
    selected
  );

  return (
    <div className='p-[10px]'>
      {isSuccess ? <SuccessResponse success type={data?.type} /> : null}
      <Formik
        initialValues={{ countPlaces: '', price: '' }}
        onSubmit={handleSubmit}
        validationSchema={createGroupValidation}
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
            <div className={createGroup.inputsWrapper}>
              <div className='relative w-full py-[10px]'>
                <div onClick={() => setToggleDropDown((prev) => !prev)}>
                  <span className='text-white'>Course name</span>
                  <div className={`${createGroup.input} w-full cursor-pointer`}>
                    {selected}
                  </div>
                </div>
                {toggleDropDown ? (
                  <DropDown
                    styles={createGroup.input}
                    options={options}
                    modificator='absolute top-[30 px] left-0 w-full bg-darkGrey border-[3px] border-gold  px-[15px] py-[20px] [&>*:nth-child(4)]:mb-0'
                    setToggleDropDown={setToggleDropDown}
                    setSelected={setSelected}
                  />
                ) : null}
              </div>
              <label className={createGroup.label} htmlFor='countPlaces'>
                Number of places
                {touched.countPlaces && errors.countPlaces && (
                  <span className={createGroup.errorSpan}>
                    {errors.countPlaces}
                  </span>
                )}
                <Field
                  className={createGroup.input}
                  id='countPlaces'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.countPlaces}
                  name='countPlaces'
                  placeholder='Number of places'
                />
              </label>
              <label htmlFor='price' className={createGroup.label}>
                Price
                {touched.price && errors.price && (
                  <span className={createGroup.errorSpan}>{errors.price}</span>
                )}
                <Field
                  className={createGroup.input}
                  id='price'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                  name='price'
                  placeholder='Price UAH'
                />
              </label>
              <div className='py-[10px] mb-[20px]'>
                <span className='text-white'>Date</span>
                <DatePicker
                  className={createGroup.input}
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  dateFormat='dd/MM/yyyy'
                />
              </div>
            </div>
            <ButtonSubmit
              children={isLoading ? 'Loading...' : 'Create Group'}
              modificator={createGroup.btnSubmit}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

const options = [
  'Basic eyebrow training',
  'Brows skill up',
  'Basic manicure training',
  'Manicure skill up',
];
export default CreateGroup;
