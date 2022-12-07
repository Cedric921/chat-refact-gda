import React from 'react';
import Asidebar from '../components/Asidebar';
import ContactItem from '../components/ContactItem';
import { AiOutlineSend } from 'react-icons/ai';
import MessageSent from '../components/MessageSent';
import MessageReceive from '../components/MessageReceive';
import ChatHeader from '../components/ChatHeader';

const Chat = () => {
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
				<ChatHeader />
				<div className='text-blue-400 h-full max-w-full overflow-y-auto p-4 flex flex-col bg-slate-500 bg-opacity-70'>
					{/* chat */}

					<MessageSent message={{ content: 'saww akakak', date: new Date() }} />
					<MessageReceive message={{ content: 'hello', date: new Date() }} />
					<MessageReceive message={{ content: 'big bro', date: new Date() }} />
					<MessageSent
						message={{
							content: 'lorem mooe mod msmiiejhh',
							date: new Date(),
						}}
					/>
					{/* chat */}
				</div>
				<div className='p-2  bg-slate-500 bg-opacity-70'>
					<form
						action=''
						className='p-0 m-0 flex w-full sm:w-3/4 rounded-full mx-auto bg-blue-300'
					>
						<textarea
							name='content'
							id=''
							className='m-0 bg-gradient-to-r from-red-300 to-blue-300 w-full rounded-full px-4 py-1 outline-none text-white h-10 resize-none'
						></textarea>
						<button className='bg-red-400 hover:bg-blue-600 duration-1000 text-white font-extrabold rounded-full w-16 flex justify-center items-center'>
							<AiOutlineSend className='font-extrabold text-xl' />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Chat;
