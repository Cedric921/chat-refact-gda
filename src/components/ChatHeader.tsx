import React from 'react';
import { BiArrowBack, BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const ChatHeader = () => {
	return (
		<div className='bg-slate-200 p-2 flex items-center gap-2'>
			<NavLink to={'/contact'}>
				<div className=' hover:bg-blue-400 duration-1000 p-4 rounded-full'>
					<BiArrowBack className='text-2xl text-red-400' />
				</div>
			</NavLink>
			<div className=' bg-slate-400 duration-1000 h-12 w-12 flex justify-center items-center rounded-full'>
				<BiUser className='text-3xl text-white' />
			</div>
			<div className=''>
				<h3 className='text-blue-400 font-extrabold p-0 m-0'>Arick B.</h3>
				<span className='text-xs p-0 m-0'>@arick</span>
			</div>
		</div>
	);
};

export default ChatHeader;
