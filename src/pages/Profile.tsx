import React, { useEffect, useRef, useState } from 'react';
import Asidebar from '../components/Asidebar';
import { io } from 'socket.io-client';
import MessageSent from '../components/MessageSent';
import MessageReceive from '../components/MessageReceive';
import ChatHeader from '../components/ChatHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../app/contact/contact-slice';
import { AppDispatch, RootState } from '../app/store';
import { getMessages } from '../app/messages/messages.slice';
import { iMessage } from '../types/messages';
import { BiLoaderCircle, BiUser } from 'react-icons/bi';
import { BsImageFill } from 'react-icons/bs';
import MessageForm from '../components/MessageForm';
import { iUser } from '../types/globalState';

const Profile = () => {
	const navigate = useNavigate();
	const inputImage = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch<AppDispatch>();
	const { contact } = useSelector((state: RootState) => state.contact);
	const { user } = useSelector((state: RootState) => state.auth);
	const [userInput, setUserInput] = useState<any>(user);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};

	return (
		<div
			className='max-h-screen h-screen top-0 bottom-0 left-0 right-0  bg-gradient-to-br
     from-blue-300  to-red-300  text-gray-700 p-0 sm:p-4 md:p-8 flex gap-4'
		>
			<div className='hidden sm:2/4 md:flex w-1/5'>
				<Asidebar />
			</div>
			<div
				className={`w-full sm:4/6 md:w-4/5 h-full shadow-2xl  bg-[url('assets/telegrambg.png')]  bg-fixed flex flex-col justify-between`}
			>
				<ChatHeader contact={contact} />
				<div className='text-blue-500 h-full max-w-full overflow-y-auto p-0 flex flex-row bg-slate-500 bg-opacity-80'>
					<div className='w-full flex flex-col items-center p-4 sm:p-10 overflow-y-auto'>
						<div className='bg-slate-300 w-full sm:w-1/2 pt-4'>
							<div className='relative w-40 min-h-[10rem] bg-slate-600 rounded-full mx-auto mb-4 '>
								<div className='rounded-full w-full min-h-full  mx-auto z-50'>
									{user && user.imageUrl ? (
										<div className='w-full rounded-full z-50'>
											<img
												src={user?.imageUrl}
												alt=''
												className='object-cover w-full rounded-full'
											/>
										</div>
									) : (
										<div className=' w-32 h-32 p-4 rounded-full bg-slate-600'>
											<BiUser />
										</div>
									)}
								</div>
								<div
									className='bg-white p-2 rounded-full w-10 h-10 absolute bottom-0 right-5 flex justify-center items-center cursor-pointer hover:'
									onClick={() => inputImage.current?.click()}
								>
									<BsImageFill className='text-xl' />
								</div>
								<input
									type='file'
									name=''
									id=''
									className='absolute hidden'
									ref={inputImage}
								/>
							</div>
						</div>

						<form action='' className='p-2  bg-slate-300 w-full sm:w-1/2'>
							<div className='flex gap-0 flex-wrap  w-full mb-4'>
								<div className='w-full sm:w-1/2 p-1 px-1'>
									<label htmlFor=''>name</label>
									<input
										type='text'
										name='name'
										className='w-full p-2 text-gray-600 outline-none'
										value={userInput ? userInput.name : undefined}
										onChange={handleChange}
									/>
								</div>
								<div className='w-full sm:w-1/2 p-1'>
									<label htmlFor=''>lastname</label>
									<input
										type='text'
										name='lastname'
										className='w-full p-2 text-gray-600 outline-none'
										value={userInput ? userInput.lastname : undefined}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='flex gap-0 flex-wrap w-full mb-4'>
								<div className='w-full sm:w-1/2 p-1 '>
									<label htmlFor=''>username</label>
									<input
										type='text'
										name='username'
										className='w-full p-2 text-gray-600 outline-none'
										value={userInput ? userInput.username : undefined}
										onChange={handleChange}
									/>
								</div>
								<div className='w-full sm:w-1/2 p-1'>
									<label htmlFor=''>email</label>
									<input
										type='email'
										name='email'
										className='w-full p-2 text-gray-600 outline-none'
										value={userInput ? userInput.email : undefined}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='flex gap-0 flex-wrap w-full mb-4'>
								<div className='w-full p-1'>
									<label htmlFor=''>Current Password</label>
									<input
										type='password'
										name='currentpassword'
										className='w-full p-2 text-gray-600 outline-none'
										placeholder={'123456'}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='flex gap-0 flex-wrap w-full mb-4'>
								<div className='w-full sm:w-1/2 p-1'>
									<label htmlFor=''>New Password</label>
									<input
										type='password'
										name='password'
										className='w-full p-2 text-gray-600 outline-none'
										placeholder={'123456'}
										onChange={handleChange}
									/>
								</div>
								<div className='w-full sm:w-1/2 p-1'>
									<label htmlFor=''>Repeat new Password</label>
									<input
										type='password'
										name='password2'
										className='w-full p-2 text-gray-600 outline-none'
										placeholder={'123456'}
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className='flex gap-0 flex-wrap w-full mb-4 px-1'>
								<button className='w-full bg-blue-400 hover:bg-blue-700 duration-1000 text-white p-2'>
									Update profile
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Profile);
