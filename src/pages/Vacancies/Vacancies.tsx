import { FC } from 'react';
import masterLeft from '@/assets/images/masterLeftLogo.png';
import masterRigth from '@/assets/images/masterRightLogo.png';


const Vacancies: FC = () => {
	return (
		<div className='relative'>
			<img
				className='absolute bottom-0 left-0 max-w-[350px] w-full'
				src={masterLeft}
				alt=''
			/>
			<img
				className='absolute right-0 bottom-0 max-w-[300px] w-full'
				src={masterRigth}
				alt=''
			/>
			<div className='min-h-[100vh] max-w-[1320px] w-full mx-auto px-[30px] relative flex justify-center items-center '>
				<div className='linearBg  p-[15px] w-[58%] text-right fixed top-[30px] left-0'>
					<h1 className='text-coal font-bold text-h2 leading-md'>
						Вакансии
					</h1>
				</div>
				<p className='leading-md text-white'>Присоединяйся к нашей дружной команде профессионалов</p>
				<div className='max-w-[235px] w-full max-h-[250px] h-full rounded-full bg-goldBlur blur-[200px] absolute top-0 right-0' />
				<div className='flex mt-[50px] max-w-[992px] w-full mx-auto justify-center  h-full py-[20px] '>
				</div>
			</div>
		</div>
	);
};

export default Vacancies;
