import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactItem = () => {
	return (
		<NavLink to={'/chat'}>
			<div className=' flex p-2 gap-2 m-2 hover:bg-red-400 duration-1000'>
				<div className='rounded-full bg-gray-400 w-12 h-12 flex items-center justify-center'>
					.
				</div>
				<div>
					<h3 className='text-blue-400 font-extrabold'>Arick B.</h3>
					<span className='text-xs text-gray-800'>@arick</span>
				</div>
			</div>
		</NavLink>
	);
};

export default ContactItem;
