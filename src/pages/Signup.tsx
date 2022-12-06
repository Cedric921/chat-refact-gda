import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
	};
	return (
		<div className='min-h-screen h-screen'>
			<div className='container mx-auto h-full flex items-center md:px-5'>
				<div className='w-1/2 sm:pr-20'>
					<span>🥰 Welcome to </span>
					<h1 className='text-7xl font-extrabold  mb-2 text-blue-400'>
						Crypto-chat
					</h1>
					<p className='text-lg font-medium'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
						similique sequi eligendi corporis in tempora ducimus obcaecati
						animi.ui eligendi corporis in te
					</p>
					<NavLink to={'/login'}>
						<button className='border-red-400 border-2 font-bold text-red-400 p-4 rounded-sm mt-4 hover:bg-red-400 hover:text-slate-900 w-52 duration-700'>
							login
						</button>
					</NavLink>
				</div>
				<div className='w-1/2'>
					<form
						className='flex flex-col max-w-xl w-full'
						onSubmit={handleSubmit}
					>
						<h3 className='text-4xl font-bold my-4 text-red-400'>
							Create an account
						</h3>
						<div className='flex w-full gap-2'>
							<div className='w-1/2'>
								<label htmlFor='firstname'>Firstname</label>
								<input
									type='text'
									name='firstname'
									placeholder='cedric vb'
									className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
							<div className='w-1/2'>
								<label htmlFor='lastname'>lastname</label>
								<input
									type='text'
									name='lastname'
									placeholder='cedric vb'
									className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
						</div>
						<div className='flex w-full gap-2'>
							<div className='w-1/2'>
								<label htmlFor='Email'>Email</label>
								<input
									type='email'
									name='email'
									placeholder='cedric vb'
									className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
							<div className='w-1/2'>
								<label htmlFor='username'>username</label>
								<input
									type='text'
									name='username'
									placeholder='cedric vb'
									className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
						</div>

						<label htmlFor='password'>password</label>
						<input
							type='password'
							name='password'
							placeholder='password'
							className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<label htmlFor='password2'>confirm password</label>
						<input
							type='password'
							name='password2'
							placeholder='password2'
							className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<button className='bg-blue-400 hover:shadow-xl p-4 rounded-sm mt-4 text-gray-100 text-xl font-semibold'>
							register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
