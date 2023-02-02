import React from 'react';
import { FC } from 'react';
import '../../pages/Home/home.scss';

const Navigation: FC = () => {
	return (
		<div className='menu'>
			<ul className='menu__link'>
				<li>Главная</li>
				<li>Услуги</li>
				<li>Прайс</li>
				<li>Мастера</li>
				<li>Обучение</li>
				<li>Ещё</li>
				<li>Рус / Укр</li>
			</ul>
		</div>
	);
}

export default Navigation;