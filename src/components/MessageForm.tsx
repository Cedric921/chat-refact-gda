import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../app/messages/messages.slice';
import { AppDispatch, RootState } from '../app/store';

const MessageForm = () => {
	const [messageInput, setMessageInput] = useState('');
	const dispatch = useDispatch<AppDispatch>();
	const { contact } = useSelector((state: RootState) => state.contact);
	const { user } = useSelector((state: RootState) => state.auth);
	const { isLoading } = useSelector((state: RootState) => state.messages);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const messageData = {
			receiverId: contact?._id!,
			content: messageInput,
		};
		dispatch(addMessage(messageData));
		setMessageInput('');
	};

	return (
		<div className='p-2  bg-slate-600 bg-opacity-70'>
			<form
				onSubmit={handleSubmit}
				className='p-0 m-0 flex w-full sm:w-3/4 rounded-full mx-auto bg-blue-300'
			>
				<textarea
					name='content'
					id=''
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setMessageInput(e.target.value)
					}
					value={messageInput}
					className='m-0 bg-gradient-to-r from-gray-600 to-blue-300 w-full rounded-full px-4 py-1 outline-none text-white h-10 resize-none'
				></textarea>
				<button
					className={`${
						messageInput.length < 1 ? 'bg-slate-600' : 'bg-blue-600'
					}  duration-1000 text-white font-extrabold rounded-full w-16 flex justify-center items-center`}
					type='submit'
				>
					{isLoading ? (
						<span className='w-full flex justify-center'>
							<BiLoaderCircle className='animate-spin text-2xl' />
						</span>
					) : (
						<AiOutlineSend className='font-extrabold text-xl' />
					)}
				</button>
			</form>
		</div>
	);
};

export default React.memo(MessageForm);
