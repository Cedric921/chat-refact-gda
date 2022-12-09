import React, { useEffect } from 'react';
import { BiArrowBack, BiUser } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { logout } from '../app/auth/auth-slice';
import { AppDispatch, RootState } from '../app/store';
import { iContact } from '../types/contact';
import { reset } from '../app/contact/contact-slice';

const ChatHeader = ({ contact }: { contact: iContact | null }) => {
	const dispatch = useDispatch<AppDispatch>();
	const { contactId } = useParams();
	const { user } = useSelector((state: RootState) => state.auth);
	const navigate = useNavigate();
	const handleLogout = () => {
		dispatch(logout());
		navigate('/login');
	};
	useEffect(() => {
		if (!contactId) dispatch(reset());
	}, []);
	return (
		<div className='bg-slate-200 p-2 flex items-center justify-between gap-2'>
			<div className='flex gap-2 items-center w-full'>
				<NavLink to={'/contact'}>
					<div className=' h-12 w-12 duration-1000 flex justify-center items-center rounded-full'>
						<BiArrowBack className='text-2xl text-gray-600 hover:' />
					</div>
				</NavLink>
				{contact ? (
					<>
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
							<h3 className='text-blue-500 font-extrabold p-0 m-0'>
								<span>{contact && contact.name}</span>{' '}
								<span>{contact && contact.lastname}</span>
							</h3>
							<span className='text-xs p-0 m-0'>
								{contact && contact.email}
							</span>
						</div>
					</>
				) : (
					<div className='mx-auto w-max'>
						{user ? (
							<>
								<h3 className='text-center font-bold'>Profile</h3>
								<span className='text-xs text-blue-500'>
									<span>{user.name}</span> <span>{user.lastname}</span>
								</span>
							</>
						) : null}
					</div>
				)}
			</div>
			<button
				className=' hover:bg-red-400 w-12 sm:w-10 h-12 sm:h-10 flex justify-center items-center rounded-xl text-red-500 hover:text-white duration-1000 cursor-pointer mr-2'
				onClick={handleLogout}
			>
				<FiLogOut className='text-2xl ' />
			</button>
		</div>
	);
};

export default React.memo(ChatHeader);
