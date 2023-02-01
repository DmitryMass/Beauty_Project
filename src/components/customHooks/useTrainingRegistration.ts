// import { ITrainingRegister } from './../../types/user';
// import { useDispatch } from 'react-redux';
// import useActions from '@/store/hooks/useActions';
export const i = 1;
// export const useTrainingRegistration = () => {
//   const dispatch = useDispatch();
//   const { setCourses } = useActions();

//   const handleSubmit = async (
//     values: ITrainingRegister,
//     { resetForm }: any
//   ) => {
//     resetForm();
//     const trainingDate = transformDate(date);
//     const body = new FormData();
//     Object.entries(values).forEach((item) => {
//       body.append(item[0], item[1]);
//     });
//     body.append('whenStart', trainingDate);

//     try {
//       const response: any = await createGroupReq(body);
//       if (response.data.group) {
//         dispatch(setCourses(response.data.group));
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

// };
