import React from 'react';
import { BiArrowBack, BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { iContact } from '../types/contact';

const ChatHeader = ({ contact }: { contact: iContact | null }) => {
	return (
		<div className='bg-slate-200 p-2 flex items-center gap-2'>
			<NavLink to={'/contact'}>
				<div className=' h-12 w-12 duration-1000 flex justify-center items-center rounded-full'>
					<BiArrowBack className='text-2xl text-red-400 hover:' />
				</div>
			</NavLink>
			<div className=' bg-slate-400 duration-1000 h-12 w-12 flex justify-center items-center rounded-full'>
				{contact && contact.imageUrl ? (
					<div className='object-cover rounded-full'>
						<img src={contact.imageUrl} className='w-full rounded-full' />
					</div>
				) : (
					<BiUser className='text-white text-2xl font-bold' />
				)}
			</div>
			<div className=''>
				<h3 className='text-blue-400 font-extrabold p-0 m-0'>
					<span>{contact && contact.name}</span>{' '}
					<span>{contact && contact.lastname}</span>
				</h3>
				<span className='text-xs p-0 m-0'>{contact && contact.email}</span>
			</div>
		</div>
	);
};

export default React.memo(ChatHeader);
