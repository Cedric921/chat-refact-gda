import React, { useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../app/contacts/contacts-slice';
import { AppDispatch, RootState } from '../app/store';
import ContactItem from './ContactItem';
import ContactItemSkeleton from './skeleton/contactItem';
import { FiLogOut } from 'react-icons/fi';
import { logout } from '../app/auth/auth-slice';
import { useNavigate } from 'react-router-dom';

const Asidebar = () => {
	const navigate = useNavigate();
	const { user } = useSelector((state: RootState) => state.auth);
	const { contacts, isLoading } = useSelector(
		(state: RootState) => state.contacts
	);
	const dispatch = useDispatch<AppDispatch>();
	const handleLogout = () => {
		dispatch(logout());
		navigate('/login');
	};

	useEffect(() => {
		dispatch(getContacts());
	}, []);

	return (
		<div className='asidebar bg-white max-h-full h-full w-full relative shadow-2xl'>
			<h2 className='md:hidden bg-gradient-to-r from-blue-400 to-rose-400 p-4 pb-2 font-extrabold text-red-500'>
				Crypto
			</h2>
			<div className='bg-slate-200 flex justify-between items-center p-4 gap-2'>
				<div className='flex items-center gap-2'>
					<div className='rounded-full bg-gray-400 w-12 h-12 flex items-center justify-center'>
						{user && user.imageUrl ? (
							<div className='object-cover rounded-full'>
								<img src={user.imageUrl} className='w-full rounded-full' />
							</div>
						) : (
							<BiUser className='text-white text-xl font-bold' />
						)}
					</div>
					<div>
						<h3 className='text-red-500 font-extrabold'>
							{user ? (
								<>
									<span>{user?.name}</span>
									<span> {user?.lastname}</span>
								</>
							) : (
								<>incognito</>
							)}
						</h3>
						<span className='text-xs'>@{user ? user?.username : 'cedric'}</span>
					</div>
				</div>
				<button
					className='sm:hidden hover:bg-red-400 w-12 sm:w-10 h-12 sm:h-10 flex justify-center items-center rounded-xl text-red-500 hover:text-white duration-1000 cursor-pointer'
					onClick={handleLogout}
				>
					<FiLogOut className='text-2xl ' />
				</button>
			</div>
			<h3 className='text-blue-400 px-4 py-1 bg-slate-300'>Contacts</h3>
			<div className=' max-h-full overflow-y-auto absolute bottom-0 top-40 md:top-28 right-0 left-0'>
				{contacts ? (
					<>
						{contacts &&
							contacts.map((contact) => (
								<ContactItem contact={contact} key={contact._id} />
							))}
					</>
				) : (
					<>
						{isLoading ? (
							<>
								<ContactItemSkeleton />
								<ContactItemSkeleton />
								<ContactItemSkeleton />
							</>
						) : (
							<>
								<div className='p-4'>
									<h3>No contacts found</h3>
								</div>
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default React.memo(Asidebar);
