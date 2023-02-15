import { FC } from 'react';
import MessengersList from '@/components/MessengersList/MessengersList';
import ContactsForm from '@/components/forms/ContactsForm';
import Logo from '@/components/Logo/Logo';
import BurgerMenu from '@/components/home/BurgerMenu';
//
import phoneIcon from '@/assets/icons/phoneIcon.svg';
import geoPositionIcon from '@/assets/icons/geopositionIcon.svg';
import timeIcon from '@/assets/icons/timeIcon.svg';
//
import './contacts.scss';
import { contacts } from '@/styles/contacts';

const Contacts: FC = () => {
  return (
    <div className='max-w-[1320px] max-[992px] mx-auto container__сonctacts'>
      <div className='max-w-[50%] max-[992px]:max-w-[620px] max-[992px]:mx-auto w-full ml-auto px-[15px] pt-[15px] h-full'>
        <div className='relative'>
          <div>
            <h2 className={contacts.titleContacts}>Контакти</h2>
            <p className={contacts.subtitleContacts}>Будь з нами на зв'язку!</p>
          </div>
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator=' w-[85px] absolute top-[-25px] right-0 max-[992px]:hidden'
          />
          <BurgerMenu modificator=' absolute top-0 right-[0px] justify-end' />
        </div>
        <div>
          <div className={contacts.block}>
            <img className='mr-[10px]' src={phoneIcon} alt='' />
            <div className={contacts.blockWithPhons}>
              <p className='text-s leading-s mb-[5px]'>+380 12 345 67 89</p>
              <p className='text-s leading-s'>+380 98 765 43 21</p>
            </div>
          </div>
          <div className={contacts.blockWithAdress}>
            <img className='mr-[10px]' src={geoPositionIcon} alt='' />
            <p>м. Дніпро, пр. Гагаріна, 198</p>
          </div>
          <div className={contacts.blockWithTime}>
            <img className='mr-[10px]' src={timeIcon} alt='' />
            <div>
              <p className='text-white text-s'>Пн - Сб</p>
              <p className='text-gold text-s'>08:00 - 20:00</p>
            </div>
          </div>
        </div>
        <MessengersList modificator='flex mb-[10px] items-center gap-[15px]' />
        <div className='mb-[15px]'>
          <h2 className={contacts.blockWhithFeedback}>Зворотній зв'язок</h2>
          <p className={contacts.blockWithQuestion}>
            У вас є питання? Залишіть нам свої контакти, і наш менеджер
            зв'яжеться з вами найближчим часом
          </p>
        </div>
        <ContactsForm />
      </div>
    </div>
  );
};
export default Contacts;