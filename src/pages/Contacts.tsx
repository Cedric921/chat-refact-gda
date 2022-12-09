import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import Asidebar from '../components/Asidebar';
import ContactItem from '../components/ContactItem';

const Contacts = () => {
	const navigate = useNavigate();
	const { user } = useSelector((state: RootState) => state.auth);
	useEffect(() => {
		if (!user) navigate('/login');
	}, []);

	return (
		<div
			className='max-h-screen h-screen top-0 bottom-0 left-0 right-0  bg-gradient-to-br
     from-slate-300 via-slate-300 to-red-300  text-gray-400 md:p-8 flex gap-4'
		>
			<div className=' w-full sm:2/6 md:w-1/5'>
				<Asidebar />
			</div>
			<div
				className={`hidden md:flex w-full sm:4/6 md:w-4/5 h-full shadow-2xl  bg-[url('assets/telegrambg.png')]  bg-fixed flex-col justify-between`}
			>
				<div className='text-slate-100 h-full p-4 flex flex-col items-center justify-center bg-slate-600 bg-opacity-70'>
					<h4 className='text-4xl font-bold text-center'>Select one contact</h4>
					<span className='text-2xl'>to begin chat</span>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
