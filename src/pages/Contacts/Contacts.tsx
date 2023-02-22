import { FC } from 'react';
import { useTranslation } from 'react-i18next';

//
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
import BackBtn from '@/components/BackBtn/BackBtn';

const Contacts: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={contacts.contactsContainer}>
      <div className={contacts.contactsSubContainer}>
        <div className='relative'>
          <div>
            <h2 className={contacts.titleContacts}>{t('contacts')}</h2>
            <p className={contacts.subtitleContacts}>{t('beInTouch')}</p>
          </div>
          <BackBtn modificator='w-[35px] h-[35px] absolute top-[10px] left-[-65px] z-[50] max-[992px]:hidden' />
          <Logo
            imgModificator='w-[80px] h-[85px]'
            modificator={contacts.logoModificator}
          />
          <BurgerMenu modificator=' absolute top-0 right-[0px] justify-end' />
        </div>
        <div>
          <div className={contacts.block}>
            <img className='mr-[10px]' src={phoneIcon} alt='phoneIcon' />
            <div className={contacts.blockWithPhons}>
              <p className='text-s leading-s mb-[5px]'>+380 12 345 67 89</p>
              <p className='text-s leading-s'>+380 98 765 43 21</p>
            </div>
          </div>
          <div className={contacts.blockWithAdress}>
            <img className='mr-[10px]' src={geoPositionIcon} alt='' />
            <p>{t('address')}</p>
          </div>
          <div className={contacts.blockWithTime}>
            <img className='mr-[10px]' src={timeIcon} alt='' />
            <div>
              <p className='text-white text-s'>{t('workDays')}</p>
              <p className='text-gold text-s'>08:00 - 20:00</p>
            </div>
          </div>
        </div>
        <MessengersList modificator='flex mb-[10px] items-center gap-[15px]' />
        <div className='mb-[15px]'>
          <h2 className={contacts.blockWhithFeedback}>{t('feedBack')}</h2>
          <p className={contacts.blockWithQuestion}>{t('haveQuestion')}</p>
        </div>
        <ContactsForm />
      </div>
    </div>
  );
};
export default Contacts;
