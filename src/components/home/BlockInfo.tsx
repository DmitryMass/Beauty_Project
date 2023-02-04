import { FC } from 'react';
import icon1 from '../../assets/icons/icon1.svg';
import icon2 from '../../assets/icons/icon2.svg';

const BlockInfo: FC = () => {
	return (
		<div className='mt-[80px] w-[360px] flex justify-between'>
			<img src={icon1} alt="icon" />
			<p className='font-medium text-[13px] leading-[22px] text-gold'>+380 12 345 67 89</p>
			<img src={icon2} alt="icon" />
			<p className='font-medium text-[13px] leading-[22px] text-gold'>г. Днепр, пр. Гагарина, 198</p>
		</div>
	);
}

export default BlockInfo;