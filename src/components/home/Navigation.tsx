import React from 'react';
import { FC } from 'react';
import '../../pages/Home/home.scss';
import TranslateNav from './TranslateNav';

const Navigation: FC = () => {
	return (
		<div className='menu'>
			<ul className='flex justify-between mt-[50px] menu__link'>
				<li>Главная</li>
				<li>Услуги</li>
				<li>Прайс</li>
				<li>Мастера</li>
				<li>Обучение</li>
				<li>Ещё</li>
				<TranslateNav />
			</ul>
		</div>
	);
}

export default Navigation;