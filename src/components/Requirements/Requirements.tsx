import { FC, useState } from 'react';
import verf from '@/assets/icons/verf.svg';
import LinkButton from '@/components/LinkButton/LinkButton';
import curcl from '@/assets/icons/curcl.svg';
import '../Requirements/requirements.scss';

interface IVacancy {
  id: number;
  title: string;
  requirements: string[];
  isFlipped: boolean;
}
const vacancies: IVacancy[] = [
  {
    id: 1,
    title: 'МАСТЕР ПО НАРАЩИВАНИЮ РЕСНИЦ',
    requirements: [
      'Владение техникой и опыт работы по наращиванию ресниц: классическое наращивание; 2D и 3D Голливуд — желательно.',
      'Консультирование клиентов по услугам наращивания ресниц.',
      'Обязательное соблюдение правил студии.',
      'Уход за рабочим местом.',
    ],
    isFlipped: false,
  },
  {
    id: 2,
    title: 'МАСТЕР ПЕРМАНЕНТНОГО МАКИЯЖА',
    requirements: [
      'Коммуникабельность, ответственность, инициативность.',
      'Опыт работы от 1 года.',
      'Умение быстро и качественно оказывать услугу.',
      'Качественное выполнение перманентного макияжа (татуажа), владение навыками наращивания ресниц и др.',
    ],
    isFlipped: false,
  },
  {
    id: 3,
    title: 'МАСТЕРА МАНИКЮРА И ПЕДИКЮРА',
    requirements: [
      'Требуются мастера Маникюра и педикюра, в дружную команду в ногтевой салон в самом центре города!',
    ],
    isFlipped: false,
  },
];
const conditions = {
  id: 0,
  requirements: [
    'Высокая заработная плата',
    'Полная запись',
    'Все материалы для работы с клиентами',
    'Профессионально оборудованное рабочие место',
    'Гибкий рабочий график',
  ],
};

const Requirements: FC = () => {
  const [arrVacancies, setArrVacancies] = useState(vacancies);
  const [flip, setFlip] = useState(false);

  const handleClick = (id: number) => {
    const newArrVacancies = arrVacancies.map((item) => {
      if (id == item.id) {
        item.isFlipped = !item.isFlipped;
        setFlip(!flip);
      }
      return item;
    });
    setArrVacancies(newArrVacancies);
  };

  return (
    <div className='flex w-[1000px] mx-auto'>
      {arrVacancies.map((item) => (
        <div
          className={`w-[320px] bg-gold h-[400px] mt-[40px] mr-[13px] relative block__div ${
            item.isFlipped ? 'card-container' : 'card-cont'
          }`}
        >
          <div className='w-[100%] bg-[#181818] mt-[15px] block__black'>
            <p
              key={item.id}
              className={`text-gold font-semibold text-[22px] ml-[15px] ${
                item.isFlipped ? 'card-container pl-[15px]' : ''
              }`}
            >
              0{item.id}
            </p>
          </div>
          <p
            className={`text-black text-[16px] font-bold text-center mt-[12px] ${
              item.isFlipped ? 'card-front' : ''
            }`}
          >
            {item.title}
          </p>
          <p
            className={`text-black text-[14px] font-bold mt-[12px] ml-[10px] ${
              item.isFlipped ? 'card-front pl-[15px]' : ''
            }`}
          >
            {!item.isFlipped ? 'Требовния' : 'Условия работы'}
          </p>
          {!item.isFlipped ? (
            <div>
              {item.requirements.map((item: any) => (
                <div className={`flex `}>
                  <img src={verf} alt='' className='ml-[10px]' />
                  <p
                    className={`text-[12px] font-medium mt-[10px] ml-[10px]`}
                    key={item.id}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${item.isFlipped ? 'card-back' : ''}`}>
              {conditions.requirements.map((item) => (
                <div className={`flex`}>
                  <img src={curcl} alt='' className='ml-[10px] mt-[10px]' />
                  <p className={`text-[12px] font-medium mt-[10px] ml-[10px]`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}
          <button
            className={`bg-coal w-[170px] h-[45px] text-white text-[14px] absolute bottom-[17px] left-[23%] ${
              item.isFlipped ? 'card-front' : ''
            }`}
            onClick={() => handleClick(item.id)}
          >
            {!item.isFlipped ? 'Условия работы' : 'Требовния'}
          </button>
          <LinkButton
            modificator={`absolute left-[23%] text-[14px] bottom-[-170px] max-w-[170px] w-full py-[10px] mb-[100px] max-[1140px]:mb-[80px] font-semibold  ${
              item.isFlipped ? 'card-front' : ''
            }`}
            children='Отправить заявку'
          />
        </div>
      ))}
    </div>
  );
};

export default Requirements;
