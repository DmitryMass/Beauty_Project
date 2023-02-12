import { FC } from 'react';
import MessengersList from '@/components/MessengersList/MessengersList';
import phoneIcon from '@/assets/icons/phoneIcon.svg';
import geoPositionIcon from '@/assets/icons/geopositionIcon.svg';
import timeIcon from '@/assets/icons/timeIcon.svg';
import ButtonSubmit from '@/components/ButtonSubmit/ButtonSubmit';
//
import './contacts.scss';
import { contacts } from '@/styles/contacts';
import ContactsForm from '@/components/forms/ContactsForm';

const Contacts: FC = () => {
  return (
    <div className='max-w-[1320px] max-[992px] mx-auto container__сonctacts'>
      <div className='max-w-[50%] max-[992px]:max-w-[490px] max-[992px]:mx-auto w-full ml-auto px-[15px] pt-[15px] h-full'>
        <h2 className={contacts.titleContacts}>Контакти</h2>
        <p className={contacts.subtitleContacts}>Будь з нами на зв'язку!</p>
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
