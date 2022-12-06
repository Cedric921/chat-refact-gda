import React from 'react';
import ContactItem from './ContactItem';

const Asidebar = () => {
	return (
		<div className='asidebar bg-white max-h-full h-full w-full relative shadow-2xl'>
			<h2 className='sm:hidden bg-slate-200 p-4 pb-2 font-extrabold'>Crypto</h2>
			<div className='bg-slate-200 flex p-4 gap-2'>
				<div className='rounded-full bg-gray-400 w-12 h-12 flex items-center justify-center'>
					.
				</div>
				<div>
					<h3 className='text-red-500 font-extrabold'>Cedric karungu</h3>
					<span className='text-xs'>@cedric</span>
				</div>
			</div>
			<h3 className='text-blue-400 px-4 py-1 bg-slate-300'>Contacts</h3>
			<div className=' max-h-full overflow-y-auto absolute bottom-0 top-40 sm:top-28 right-0 left-0'>
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
			</div>
		</div>
	);
};

export default Asidebar;
