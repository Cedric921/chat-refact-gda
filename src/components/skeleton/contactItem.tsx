const ContactItemSkeleton = () => {
	return (
		<div className=' flex p-2 gap-2 m-2 bg-slate-200 hover:bg-red-400 duration-1000 rounded-md animate-pulse items-center'>
			<div className='rounded-full bg-gray-400 w-12 h-12 '></div>
			<div className='flex-1 flex flex-col justify-center'>
				<h4 className='bg-gray-400 p-2 mb-2 w-3/4 rounded-2xl'></h4>
				<span className=' bg-gray-300 p-1 rounded-lg m-1 block w-1/2'></span>
			</div>
		</div>
	);
};

export default ContactItemSkeleton;
