import React from 'react';
import { iMessage } from '../types/messages';

const MessageSent = ({ message }: { message: iMessage }) => {
	return (
		<div className='w-max self-end'>
			<div className='bg-blue-500 hover:bg-blue-900 shadow-xl duration-1000 w-max max-w-full sm:max-w-2xl  p-2 px-4 text-justify self-end text-white rounded-3xl rounded-br-none my-2 '>
				{message.content}
			</div>
			<span className='text-slate-300 font-extrabold text-xs text-right block'>
				{new Date(message.updatedAt).toLocaleString()}
			</span>
		</div>
	);
};

export default React.memo(MessageSent);
