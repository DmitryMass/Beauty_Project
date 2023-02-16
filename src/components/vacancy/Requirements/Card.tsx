import { FC, useState } from 'react';
import CardInfo from './CardInfo';
import LinkButton from '@/components/LinkButton/LinkButton';

import './requirements.scss';

interface IVacancy {
  id: string;
  title: string;
  requirements: string[];
  isFlipped: boolean;
  conditions: any[];
}

const Card: FC = () => {
  const [showFront, setShowFront] = useState<string | null>('');

  const handleClick = (id: string) => {
    if (id === showFront) {
      setShowFront(null);
      return;
    }
    setShowFront(id);
  };

  return (
    <>
      {vacancies.map((vacancy) => (
        <div key={vacancy.id} className='card'>
          <div className='card__group group h-[400px] max-w-[320px] w-full [perspective:1000px] mb-[20px] '>
            <div
              className={`card__container relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${
                showFront === vacancy.id ? '[transform:rotateY(-180deg)]' : ''
              }`}
            >
              <div className='card__front absolute inset-0 h-full w-full bg-goldOpacity [backface-visibility:hidden] bg-goldWhite'>
                <CardInfo handleClick={handleClick} vacancy={vacancy} />
              </div>
              <div className='card__back absolute  inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]  bg-gold'>
                <CardInfo handleClick={handleClick} vacancy={vacancy} back />
              </div>
            </div>
          </div>
          <LinkButton
            modificator='py-[7px] max-w-[220px] w-full mx-auto rounded-[7px]'
            route='/#'
          >
            Залишити заявку
          </LinkButton>
        </div>
      ))}
    </>
  );
};

const vacancies: IVacancy[] = [
  {
    id: '1',
    title: 'Мастер по наращиванию ресниц',
    requirements: [
      'Владение техникой и опыт работы по наращиванию ресниц: классическое наращивание; 2D и 3D Голливуд — желательно.',
      'Консультирование клиентов по услугам наращивания ресниц.',
      'Обязательное соблюдение правил студии.',
      'Уход за рабочим местом.',
    ],
    conditions: [
      'Высокая заработная плата',
      'Полная запись',
      'Все материалы для работы с клиентами',
      'Профессионально оборудованное рабочие место',
      'Гибкий рабочий график',
    ],
    isFlipped: false,
  },
  {
    id: '2',
    title: 'Мастер перманентного макияжа',
    requirements: [
      'Коммуникабельность, ответственность, инициативность.',
      'Опыт работы от 1 года.',
      'Умение быстро и качественно оказывать услугу.',
      'Качественное выполнение перманентного макияжа (татуажа), владение навыками наращивания ресниц и др.',
    ],
    conditions: [
      'Высокая заработная плата',
      'Полная запись',
      'Все материалы для работы с клиентами',
      'Профессионально оборудованное рабочие место',
      'Гибкий рабочий график',
    ],
    isFlipped: false,
  },
  {
    id: '3',
    title: 'Мастер маниюкра и педикюра',
    requirements: [
      'Требуются мастера Маникюра и педикюра, в дружную команду в ногтевой салон в самом центре города!',
    ],
    conditions: [
      'Высокая заработная плата',
      'Полная запись',
      'Все материалы для работы с клиентами',
      'Профессионально оборудованное рабочие место',
      'Гибкий рабочий график',
    ],
    isFlipped: false,
  },
];

export default Card;
