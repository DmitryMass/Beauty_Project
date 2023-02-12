import { FC } from "react";
import './contacts.scss';
import { contacts } from "@/styles/contacts";


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
			<div className="w-2/4"></div>
			<div className="w-2/4">
				<h2 className={contacts.titleContacts}>Контакты</h2>
				<p className={contacts.subtitleContacts}>Будь с нами на связи!</p>
				<div className={contacts.block}>
					<div>
						<img className="mr-[10px]" src={phoneIcon} alt="" />
					</div>
					<div className={contacts.blockWithPhons}>
						<p>+380 12 345 67 89</p>
						<p>+380 98 765 43 21</p>
					</div>
				</div>
				<div className={contacts.blockWithAdress}>
					<img className="mr-[10px]" src={geoPositionIcon} alt="" />
					<p>г. Днепр, пр. Гагарина, 198</p>
				</div>
				<div className={contacts.blockWithTime}>
					<div>
						<img className="mr-[10px]" src={timeIcon} alt="" />
					</div>
					<div>
						<p className="text-white text-[14px]">Пн - Сб</p>
						<p className="text-gold text-[14px]">09:00 - 21:00</p>
					</div>

				</div>
				<div className="flex mt-[20px]">
					<a href="#"><img className="mr-4" src={instIcon} alt="" /></a>
					<a href="#"><img className="mr-4" src={fbIcon} alt="" /></a>
					<a href="#"><img src={tgIcon} alt="" /></a>
				</div>
				<h2 className={contacts.blockWhithFeedback}>Обратная связь</h2>
				<p className={contacts.blockWithQuestion}>У вас есть вопросы? Оставьте нам свои контакты,
					и наш менеджер свяжется с вами в ближайшее время</p>
				<div className="form__group mt-[30px]">
					<p>Ваше имя</p>
					<input type="text" placeholder="Катерина" />
					<p>E-mail</p>
					<input type="text" placeholder="example@mail.com" />
					<p>Ваш вопрос</p>
					<input type="text" placeholder="Задайте ваш вопрос..." />
					<ButtonSubmit modificator={contacts.modificator}>Отправить</ButtonSubmit>
				</div>
			</div>

		</div>
	)
};
export default Contacts;
