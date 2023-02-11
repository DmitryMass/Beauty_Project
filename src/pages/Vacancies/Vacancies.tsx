import { FC } from 'react';
import masterLeft from '@/assets/images/masterLeftLogo.png';
import masterRigth from '@/assets/images/masterRightLogo.png';
import verf from '@/assets/icons/verf.svg';
import '../Vacancies/vacancies.scss';
import LinkButton from '@/components/LinkButton/LinkButton';


const Vacancies: FC = () => {
	interface IProduct {
		id: number
		title: string
		requirements: any[]
	}
	const vacancies: IProduct[] = [
		{
			id: 1,
			title: 'МАСТЕР ПО НАРАЩИВАНИЮ РЕСНИЦ',
			requirements: [
				'Владение техникой и опыт работы по наращиванию ресниц: классическое наращивание; 2D и 3D Голливуд — желательно.',
				'Консультирование клиентов по услугам наращивания ресниц.',
				'Обязательное соблюдение правил студии.',
				'Уход за рабочим местом.',
			]
		},
		{
			id: 2,
			title: 'МАСТЕР ПЕРМАНЕНТНОГО МАКИЯЖА',
			requirements: [
				'Коммуникабельность, ответственность, инициативность.',
				'Опыт работы от 1 года.',
				'Умение быстро и качественно оказывать услугу.',
				'Качественное выполнение перманентного макияжа (татуажа), владение навыками наращивания ресниц и др.'
			]
		},
		{
			id: 3,
			title: 'МАСТЕРА МАНИКЮРА И ПЕДИКЮРА',
			requirements: ['Требуются мастера Маникюра и педикюра, в дружную команду в ногтевой салон в самом центре города!']
		},
	];


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
					<div className='flex w-[1000px] mx-auto'>
						{vacancies.map((item) => (
							<div className='w-[320px] bg-gold h-[400px] mt-[40px] mr-[13px] relative block__div'>
								<div className='w-[100%] bg-[#181818] mt-[15px] block__black'>
									<p key={item.id} className='text-gold font-semibold text-[22px] ml-[15px]'>0{item.id}</p>
								</div>
								<p className='text-black text-[16px] font-bold text-center mt-[12px]'>{item.title}</p>
								<p className='text-black text-[14px] font-bold mt-[12px] ml-[10px]'>Требования:</p>
								<div >
									{item.requirements.map((item) => (
										<div className='flex' >
											<img src={verf} alt="" className='ml-[10px]' />
											<p className='text-[12px] font-medium mt-[10px] ml-[10px]' key={item.id}>{item}</p>
										</div>
									))}
								</div>
								<button className='bg-coal w-[170px] h-[45px] text-white text-[14px] absolute bottom-[17px] left-[20%]'>Условия работы</button>
								<LinkButton modificator='absolute left-[20%] text-[14px] bottom-[-170px] max-w-[170px] w-full py-[10px]  mb-[100px] max-[1140px]:mb-[80px] font-semibold hover:bg-hoverGold hover:scale-[1.03] transition-all duration-200'
									children='Отправить заявку' />
							</div>
						))}
					</div>
				</div>
			</div >
		</div >
	);
};

export default Vacancies;
