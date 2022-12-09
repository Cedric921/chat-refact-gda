import React, { useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { getContact } from '../app/contact/contact-slice';
import { getContacts } from '../app/contacts/contacts-slice';
import { AppDispatch, RootState } from '../app/store';
import { iContact } from '../types/contact';

const ContactItem = ({ contact }: { contact: iContact }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const handleChat = (id: string) => {
		dispatch(getContact(id));
		navigate(`/chat/${id}`);
	};
	return (
		<div
			className=' flex p-2 gap-2 m-2 hover:bg-slate-400 text-slate-600 hover:text-slate-100 duration-1000 rounded-md cursor-pointer'
			onClick={() => handleChat(contact._id)}
		>
			<div className='rounded-full bg-slate-600 w-12 h-12 flex items-center justify-center'>
				{contact && contact.imageUrl ? (
					<div className='object-cover rounded-full'>
						<img src={contact.imageUrl} className='w-full rounded-full' />
					</div>
				) : (
					<BiUser className='text-white text-xl font-bold' />
				)}
			</div>
			<div>
				<h3 className=' font-extrabold'>
					<span>
						{contact.name.length > 10
							? contact.name.substring(0, 8)
							: contact.name}
					</span>{' '}
					<span>{contact.name.length < 10 ?? contact.lastname}</span>
				</h3>
				<span className='text-xs text-slate-600 hover:text-inherit'>
					{contact.username}
				</span>
			</div>
		</div>
	);
};

export default React.memo(ContactItem);
