import { FC } from 'react';
import { IReview } from '@/types/review';
//
import star from '@/assets/images/star.png';

interface IClientReviewProps {
  item: IReview;
  nameModificator?: string;
}

const ClientReview: FC<IClientReviewProps> = ({ item, nameModificator }) => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <p
          className={`${nameModificator} text-md leading-md text-coal font-bold pointer-events-none `}
        >
          {item.name}
        </p>
        <p className='text-s font-medium pointer-events-none'>
          {Intl.DateTimeFormat('ua').format(Date.parse(item.updatedAt))}
        </p>
      </div>
      <div className='flex items-center mb-[10px] gap-[5px]'>
        <p className='text-classic font-medium pointer-events-none'>
          {item.stars}
        </p>
        <img className='w-[15px] h-[15px]' src={star} alt='star' />
      </div>
      <p className='reviews__description text-classic font-medium h-[130px] pointer-events-none'>
        {item.review}
      </p>
    </>
  );
};

export default ClientReview;
