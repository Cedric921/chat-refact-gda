import React from 'react';
import { iMessage } from '../types/messages';

const MessageReceive = ({ message }: { message: iMessage }) => {
	return (
		<div className='w-max my-2'>
			<div className='bg-slate-700 hover:bg-slate-900 shadow-xl duration-1000 w-max max-w-full sm:max-w-2xl p-2 px-4 text-slate-300 rounded-3xl rounded-tl-none my-0 '>
				{message.content}
			</div>
			<span className='text-gray-400 font-extrabold text-xs'>
				{new Date(message.updatedAt).toLocaleString()}
			</span>
		</div>
	);
};

export default React.memo(MessageReceive);
