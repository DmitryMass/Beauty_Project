import { FC, useState } from 'react';
import masterLeft from '@/assets/images/masterLeftLogo.png';
import masterRigth from '@/assets/images/masterRightLogo.png';
import '../Vacancies/vacancies.scss';
import LinkButton from '@/components/LinkButton/LinkButton';
import Conditions from '@/components/workingСonditions/Conditions';
import Requirements from '@/components/Requirements/Requirements';


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
			<div className='min-h-[100vh] max-w-[1320px] w-full mx-auto px-[30px] flex'>
				<div className='linearBg p-[15px] w-[58%] text-right fixed top-[30px] left-0'>
					<h1 className='text-coal font-bold text-h2 leading-md'>
						Вакансии
					</h1>
				</div>
				<div className='min-h-[100vh] max-w-[1320px] w-full mx-auto px-[30px]'>
					<p className='text-white text-[22px] mt-[130px] flex mx-auto justify-center items-center'>Присоединяйся к нашей дружной команде профессионалов</p>
					<div>
						<p className='leading-6 tracking-[.35em] mt-[10px] flex mx-auto justify-center items-center bg-gold w-[1000px] text-[18px] font-semibold h-[40px]'>Ведь вместе мы сделаем этот мир лучше!</p>
					</div>
					<Requirements />
				</div>
			</div >
		</div >
	);
};

export default Vacancies;
