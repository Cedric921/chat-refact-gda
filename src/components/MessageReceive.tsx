import React from 'react';
import { iMessage } from '../types/messages';

const MessageReceive = ({ message }: { message: iMessage }) => {
	return (
		<div className='w-max my-2'>
			<div className='bg-rose-600 hover:bg-rose-900 shadow-xl duration-1000 w-max max-w-full sm:max-w-2xl p-2 px-4 text-white rounded-3xl rounded-tl-none my-0 '>
				{message.content}
			</div>
			<span className='text-slate-200 font-extrabold text-xs'>
				{new Date(message.updatedAt).toLocaleString()}
			</span>
		</div>
	);
};

export default React.memo(MessageReceive);
