import { FC } from "react";
import './contacts.scss';

import phoneIcon from '@/assets/icons/phoneIcon.svg';
import geoPositionIcon from '@/assets/icons/geopositionIcon.svg';
import timeIcon from '@/assets/icons/timeIcon.svg';
import fbIcon from '@/assets/icons/fbIcon.svg';
import tgIcon from '@/assets/icons/tgIcon.svg';
import instIcon from '@/assets/icons/instIcon.svg';
import ButtonSubmit from "@/components/ButtonSubmit/ButtonSubmit";

const Contacts: FC = () => {
	return (
		<div className="container">
			<h2 className="font-semibold text-[27px] leading-8 text-gold">Контакты</h2>
			<p className="font-normal text-xs text-white">Будь с нами на связи!</p>
			<div className="flex items-center">
				<div>
					<img src={phoneIcon} alt="" />
				</div>
				<div className="font-medium text-white text-sm">
					<p>+380 12 345 67 89</p>
					<p>+380 98 765 43 21</p>
				</div>
			</div>
			<div className="flex font-medium text-white text-sm">
				<img src={geoPositionIcon} alt="" />
				<p>г. Днепр, пр. Гагарина, 198</p>
			</div>
			<div className="flex font-medium">
				<img src={timeIcon} alt="" />
				<p className="text-white text-sm">Пн - Сб</p>
				<p className="text-gold text-sm">&nbsp;09:00 - 21:00</p>
			</div>
			<div className="flex">
				<img className="mr-4" src={instIcon} alt="" />
				<img className="mr-4" src={fbIcon} alt="" />
				<img src={tgIcon} alt="" />
			</div>
			<h2 className="font-semibold text-[27px] leading-8 text-gold">Обратная связь</h2>
			<p className="font-normal text-xs text-white w-[450px]">У вас есть вопросы? Оставьте нам свои контакты,
				и наш менеджер свяжется с вами в ближайшее время</p>
			<div className="form__group">
				<p>Ваше имя</p>
				<input type="text" placeholder="Катерина" />
				<p>E-mail</p>
				<input type="text" placeholder="example@mail.com" />
				<p>Ваш вопрос</p>
				<input type="text" placeholder="Задайте ваш вопрос..." />
				<ButtonSubmit modificator="">Записаться</ButtonSubmit>
			</div>
		</div>
	)
};
export default Contacts;
