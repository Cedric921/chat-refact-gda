import React, { useEffect, useState } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../app/auth/auth-slice';
import { AppDispatch, RootState } from '../app/store';

const Signup = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { user, isLoading, isError, error, isSuccess } = useSelector(
		(state: RootState) => state.auth
	);
	const [userInput, setUserInput] = useState({
		name: '',
		lastname: '',
		email: '',
		username: '',
		password: '',
		password2: '',
	});
	const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (userInput.password !== userInput.password2) {
			toast.warning('password verification failed');
			return;
		}
		const user = {
			name: userInput.name,
			lastname: userInput.lastname,
			email: userInput.email,
			username: userInput.username,
			password: userInput.password,
		};
		dispatch(register(user));
	};

	useEffect(() => {
		if (isError) toast.error(error || 'error to create an account');
		if (isSuccess && user) {
			toast.success('account created ');
			navigate('/');
		}
	}, [isError, isSuccess]);
	return (
		<div className='min-h-screen h-max sm:h-screen'>
			<div className='container mx-auto h-full min-h-full  flex items-center md:px-5'>
				<div className='hidden md:block w-1/2 sm:pr-20'>
					<span>🥰 Welcome to </span>
					<h1 className='text-7xl font-extrabold  mb-2 text-blue-400'>
						Crypt🤓-chat
					</h1>
					<p className='text-lg font-medium'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
						similique sequi eligendi corporis in tempora ducimus obcaecati
						animi.ui eligendi corporis in te
					</p>
					<NavLink to={'/login'}>
						<button className='border-red-400 border-2 font-bold text-red-400  p-4 rounded-sm mt-4 hover:bg-red-400 hover:text-slate-900 w-52 duration-700'>
							login
						</button>
					</NavLink>
				</div>
				<div className='w-full md:w-1/2 p-2  sm:p-0'>
					<form
						className='flex flex-col max-w-xl w-full px-4 sm:px-0 mx-auto pb-14 sm:pb-0'
						onSubmit={handleSubmit}
					>
						<div className='text-center my-4 sm:hidden'>
							<span>Welcome to </span>
							<h1 className='text-4xl font-extrabold  mb-4 text-blue-400'>
								Crypt🤓-chat
							</h1>
						</div>
						<h3 className='text-2xl sm:text-4xl text-center sm:text-start font-bold my-4 text-red-400'>
							Create an account
						</h3>
						<div className='flex w-full gap-2 flex-col sm:flex-row'>
							<div className='w-full sm:w-1/2'>
								<label htmlFor='firstname'>Firstname</label>
								<input
									type='text'
									name='name'
									placeholder='cedric vb'
									onChange={handleChage}
									className='p-2 sm:p-4
                      outline-none rounded-md  sm:rounded-lg mb-2 sm:mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
							<div className='w-full sm:w-1/2'>
								<label htmlFor='lastname'>lastname</label>
								<input
									type='text'
									name='lastname'
									placeholder='cedric vb'
									onChange={handleChage}
									className='p-2 sm:p-4
                      outline-none rounded-md sm:rounded-lg mb-2 sm:mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
						</div>
						<div className='flex w-full flex-col sm:flex-row gap-2'>
							<div className='w-full sm:w-1/2'>
								<label htmlFor='Email'>Email</label>
								<input
									type='email'
									name='email'
									placeholder='cedric vb'
									onChange={handleChage}
									className='p-2 sm:p-4
                      outline-none rounded-md sm:rounded-lg mb-2 sm:mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
							<div className='w-full sm:w-1/2'>
								<label htmlFor='username'>username</label>
								<input
									type='text'
									name='username'
									placeholder='cedric vb'
									onChange={handleChage}
									className='p-2 sm:p-4
                      outline-none rounded-md sm:rounded-lg mb-2 sm:mb-4 text-lg bg-gray-400 text-gray-800 font-semibold w-full'
								/>
							</div>
						</div>

						<label htmlFor='password'>password</label>
						<input
							type='password'
							name='password'
							placeholder='password'
							onChange={handleChage}
							className='p-2 sm:p-4
                      outline-none rounded-md sm:rounded-lg mb-2 sm:mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<label htmlFor='password2'>confirm password</label>
						<input
							type='password'
							name='password2'
							placeholder='password2'
							onChange={handleChage}
							className='p-2 sm:p-4
                      outline-none rounded-md sm:rounded-lg mb-2 sm:mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<button className='bg-blue-400 hover:bg-blue-600 duration-1000 hover:shadow-xl p-2 sm:p-4 rounded-sm mt-8 text-gray-100 text-base sm:text-xl font-semibold'>
							{isLoading ? (
								<span className='w-full flex justify-center'>
									<BiLoaderCircle className='animate-spin text-2xl' />
								</span>
							) : (
								<span className='w-full flex justify-center'>register</span>
							)}
						</button>
						<p className='text-center my-4 sm:hidden'>OR</p>
						<NavLink to={'/login'} className='sm:hidden'>
							<button
								className='border-red-400 border-2 font-bold text-red-400 p-2 sm:p-4 rounded-sm  hover:bg-red-400 hover:text-slate-900 w-full duration-700 '
								type='reset'
							>
								login
							</button>
						</NavLink>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
