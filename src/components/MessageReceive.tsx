import React from 'react';

const MessageReceive = ({
	message,
}: {
	message: { content: string; date: Date };
}) => {
	return (
		<div className='w-max my-2'>
			<div className='bg-red-400 hover:bg-blue-800 shadow-xl duration-1000 w-max max-w-full sm:max-w-2xl p-2 text-white rounded-3xl rounded-tl-none my-0'>
				{message.content}
			</div>
			<span className='text-slate-200 font-extrabold text-xs'>
				{new Date(message.date).toLocaleTimeString()}
			</span>
		</div>
	);
};

export default MessageReceive;
