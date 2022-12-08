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
import { BiLoaderCircle } from 'react-icons/bi';
import MessageForm from '../components/MessageForm';

const Profile = () => {
	const navigate = useNavigate();
	const messagesDiv = useRef<HTMLDivElement>(null);
	const { contactId } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const { contact } = useSelector((state: RootState) => state.contact);
	const { user } = useSelector((state: RootState) => state.auth);
	const { messages, isLoading } = useSelector(
		(state: RootState) => state.messages
	);

	return (
		<div
			className='max-h-screen h-screen top-0 bottom-0 left-0 right-0  bg-gradient-to-br
     from-slate-300 via-slate-300 to-red-300  text-gray-400 p-0 sm:p-4 md:p-10 flex gap-4'
		>
			<div className='hidden sm:2/4 md:flex w-1/5'>
				<Asidebar />
			</div>
			<div
				className={`w-full sm:4/6 md:w-4/5 h-full shadow-2xl  bg-[url('assets/telegrambg.png')]  bg-fixed flex flex-col justify-between`}
			>
				<ChatHeader contact={contact} />
				<div
					className='text-blue-400 h-full max-w-full overflow-y-auto p-4 flex flex-col bg-slate-600 bg-opacity-80'
					ref={messagesDiv}
				></div>
			</div>
		</div>
	);
};

export default React.memo(Profile);
