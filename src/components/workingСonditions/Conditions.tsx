import { FC } from 'react';
import curcl from '@/assets/icons/curcl.svg';


const Conditions: FC = () => {
	return (
		<div className='w-[320px] bg-gold h-[400px] mt-[40px] mr-[13px] relative block__div'>
			<div className='w-[100%] bg-[#181818] mt-[15px] block__black'>
				<p className='text-gold font-semibold text-[22px] ml-[15px]'>01</p>
			</div>
			<p className='text-black text-[16px] font-bold text-center mt-[12px]'>МАСТЕР ПО НАРАЩИВАНИЮ РЕСНИЦ</p>
			<p className='text-black text-[14px] font-bold mt-[12px] ml-[10px]'>Требования:</p>
			<div >
				<img src={curcl} alt="" className='ml-[10px]' />
				<p className='text-[12px] font-medium mt-[10px] ml-[10px]'>item</p>
			</div>
			<button className='bg-coal w-[170px] h-[45px] text-white text-[14px] absolute bottom-[17px] left-[23%]' >Требования</button>
		</div>
	);
}

export default Conditions;