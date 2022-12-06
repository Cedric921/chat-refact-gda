import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const handleSubmit = () => {
		navigate('/');
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
					<NavLink to={'/register'}>
						<button className='border-red-400 border-2 font-bold text-red-400 p-4 rounded-sm mt-4 hover:bg-red-400 hover:text-slate-900 w-52 duration-700'>
							register
						</button>
					</NavLink>
				</div>
				<div className='w-1/2'>
					<form onSubmit={handleSubmit} className='flex flex-col max-w-sm'>
						<h3 className='text-4xl font-bold my-4 text-red-400'>
							Welcome again
						</h3>
						<label htmlFor='username'>username</label>
						<input
							type='text'
							name='username'
							placeholder='cedric vb'
							className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<label htmlFor='password'>password</label>
						<input
							type='text'
							name='password'
							placeholder='password'
							className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<button className='bg-blue-400 hover:shadow-xl p-4 rounded-sm mt-4 text-gray-100 text-xl font-semibold'>
							login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
