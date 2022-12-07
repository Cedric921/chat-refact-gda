import React from 'react';
import { BiUser } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { iContact } from '../types/contact';

const ContactItem = ({ contact }: { contact: iContact }) => {
	return (
		<NavLink to={'/chat'}>
			<div className=' flex p-2 gap-2 m-2 hover:bg-red-400 duration-1000 rounded-md'>
				<div className='rounded-full bg-gray-400 w-12 h-12 flex items-center justify-center'>
					{contact && contact.imageUrl ? (
						<div className='object-cover rounded-full'>
							<img src={contact.imageUrl} className='w-full rounded-full' />
						</div>
					) : (
						<BiUser className='text-white text-xl font-bold' />
					)}
				</div>
				<div>
					<h3 className='text-blue-400 font-extrabold'>
						<span>
							{contact.name.length > 10
								? contact.name.substring(0, 8)
								: contact.name}
						</span>{' '}
						<span>{contact.name.length < 10 ?? contact.lastname}</span>
					</h3>
					<span className='text-xs text-gray-800'>{contact.username}</span>
				</div>
			</div>
		</NavLink>
	);
};

export default ContactItem;
