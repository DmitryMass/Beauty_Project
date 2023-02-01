import { FC, useState } from 'react';
import { Formik, Field } from 'formik';
import { createGroupValidation } from '@/utils/validation/createGroupValidation';
import { createGroup } from '@/styles/forms';
import DatePicker from 'react-datepicker';
import { useCreateGroup } from '@/components/customHooks/useCreateGroup';

const CreateGroup: FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { handleSubmit, isError, isLoading } = useCreateGroup(startDate);

  return (
    <div className='p-[10px]'>
      <Formik
        initialValues={{ countPlaces: '', type: '', price: '' }}
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
              <label htmlFor='type' className={createGroup.label}>
                Type
                {touched.type && errors.type && (
                  <span className={createGroup.errorSpan}>{errors.type}</span>
                )}
                <Field
                  className={createGroup.input}
                  id='type'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                  name='type'
                  placeholder='Basic / Advanced'
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
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                  //   minDate={startDate}
                  dateFormat='dd/MM/yyyy'
                />
              </div>
            </div>
            <button className={createGroup.btnSubmit} type='submit'>
              {isLoading ? 'Loading...' : 'Create Group'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateGroup;
