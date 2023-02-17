import GoldTitleBox from '@/components/GoldTitleBox/GoldTitleBox';
import { FC } from 'react';
import '../Comments/comments.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import BurgerMenu from '@/components/home/BurgerMenu';
import { IComments } from '@/types/employee';
import star from '@/assets/images/star.png';
import { breakPointes } from './breakPointes';
import LinkButton from '@/components/LinkButton/LinkButton';
import Logo from '@/components/Logo/Logo';



const Comments: FC = () => {
	const data = [
		{
			id: 1,
			name: 'Anastasia',
			date: '10.02.2023',
			stars: 4.4,
			descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
		},
		{
			id: 2,
			name: 'Oleg',
			date: '11.02.2023',
			stars: 3.2,
			descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
		},
		{
			id: 3,
			name: 'Taras',
			date: '11.02.2023',
			stars: 2,
			descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
		},
		{
			id: 1,
			name: 'Anastasia',
			date: '10.02.2023',
			stars: 1.5,
			descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
		},
		{
			id: 2,
			name: 'Oleg',
			date: '11.02.2023',
			stars: 5,
			descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
		},
		{
			id: 3,
			name: 'Taras',
			date: '11.02.2023',
			stars: 3,
			descripton: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.',
		},

	]
	return (
		<div className='relative h-full bg_img'>
			<GoldTitleBox>Отзывы</GoldTitleBox>
			<BurgerMenu modificator='w-[85px] h-[85px] absolute top-[15px] right-[30px] justify-end ' />
			<Logo
				imgModificator='w-[80px] h-[85px]'
				modificator=' w-[85px] absolute top-[0] right-[30px] max-[992px]:hidden'
			/>
			<p className='text-white text-[22px] text-center pt-[150px] mb-[70px]'>Наши мастера настоящие профессионалы своего дела. </p>
			<div className='flex mt-[50px] max-w-[992px] w-full mx-auto justify-center py-[20px] max-h-[280px]'>
				<Swiper
					freeMode={true}
					modules={[FreeMode, Pagination]}
					breakpoints={breakPointes}
				>
					{data
						? data.map((item: IComments) => (
							<SwiperSlide key={item.id}>
								<div className='max-w-xs bg-gold block'>
									<div className='flex justify-between items-start ml-[25px] pt-[15px]'>
										<div>
											<p className='text-white text-coal text-[20px] font-bold'>{item.name}</p>
											<div className='flex items-center'>
												<p className='mt-[3px]'>{item.stars}</p>
												<img className='ml-[5px] w-[15px] h-[15px]' src={star} alt="" />
											</div>
										</div>
										<p className='text-[14px] mr-[25px] mt-[6px]'>{item.date}</p>
									</div>
									<p className='text-[12px] ml-[25px] pt-[20px] pb-[35px]'>{item.descripton}</p>
								</div>
							</SwiperSlide>
						))
						: null}
				</Swiper>
			</div>
			<div className='max-w-[992px] flex mx-auto justify-between'>
				<LinkButton modificator='max-w-[200px] text-[15px] bg-transparent text-[#F0DDA3] font-medium'>Читать больше отзывов </LinkButton>
				<LinkButton modificator='max-w-[200px] text-[15px] bg-transparent text-[#F0DDA3] font-medium'>Оставить отзыв</LinkButton>
			</div>
			<p className='justify-center flex text-white text-[23px] pt-[80px]'>И самое главное - они влюблены в свою работу. </p>
		</div>
	);
}

export default Comments;