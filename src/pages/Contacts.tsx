import React from 'react';
import Asidebar from '../components/Asidebar';
import ContactItem from '../components/ContactItem';

const Contacts = () => {
	return (
		<div
			className='max-h-screen h-screen top-0 bottom-0 left-0 right-0  bg-gradient-to-br
     from-slate-300 via-slate-300 to-red-300  text-gray-400 sm:p-10 flex gap-4'
		>
			<div className=' w-full sm:w-1/5'>
				<Asidebar />
			</div>
			<div
				className={`hidden sm:flex w-full sm:w-4/5 h-full shadow-2xl  bg-[url('assets/telegrambg.png')]  bg-fixed flex-col justify-between`}
			>
				<div className='text-slate-100 h-full p-4 flex flex-col items-center justify-center bg-slate-500 bg-opacity-70'>
					<h4 className='text-4xl font-bold text-center'>
						Selectionner un contact
					</h4>
					<span className='text-2xl text-slate-200'>pour communiquer</span>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
