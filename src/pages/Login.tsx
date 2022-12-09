import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../app/auth/auth-slice';
import { AppDispatch, RootState } from '../app/store';
import { toast } from 'react-toastify';
import { AiOutlineLoading } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const { user, isLoading, isError, error, isSuccess } = useSelector(
		(state: RootState) => state.auth
	);
	const [userInput, setUserInput] = useState({
		username: '',
		password: '',
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (user) navigate('/');
	}, []);

	useEffect(() => {
		if (isError) toast.error(error || 'error to login');
		if (isSuccess && user) {
			toast.success('login succesfulliy');
			navigate('/');
		}
	}, [isError, isSuccess]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (userInput.password.trim() == '' || userInput.username.trim() == '') {
			toast.warning('all fields required');
		} else {
			dispatch(login(userInput));
			setUserInput({ ...userInput, username: '', password: '' });
		}
	};
	return (
		<div className='min-h-screen h-screen'>
			<div className='container mx-auto h-full flex items-center md:px-5'>
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
					<NavLink to={'/register'}>
						<button className='border-red-400 border-2 font-bold text-red-400 p-3 rounded-sm mt-4 hover:bg-red-400 hover:text-slate-900 w-52 duration-700'>
							register
						</button>
					</NavLink>
				</div>
				<div className='w-full mx-auto md:w-1/2 p-8 sm:p-0'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col max-w-sm mx-auto'
					>
						<div className='text-center mb-8 sm:hidden'>
							<span>🥰 Welcome to </span>
							<h1 className='text-4xl font-extrabold  mb-4 text-blue-400'>
								Crypt🤓-chat
							</h1>
							<p className='text-xs font-medium'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Eveniet tempora ducimus obcaecati animi.
							</p>
						</div>
						<h3 className='text-2xl sm:text-4xl text-center sm:text-start font-bold my-4 text-red-400'>
							Welcome again
						</h3>
						<label htmlFor='username'>username</label>
						<input
							type='text'
							name='username'
							placeholder='cedric vb'
							onChange={handleChange}
							value={userInput.username}
							className='p-2 sm:p-3
                      outline-none rounded-md mb-4 text-xl bg-gray-400 text-gray-800 font-semibold'
						/>
						<label htmlFor='password'>password</label>
						<input
							type='password'
							name='password'
							placeholder='password'
							onChange={handleChange}
							value={userInput.password}
							className='p-2 sm:p-3
                      outline-none rounded-md mb-4 text-xl bg-gray-400 text-gray-800 font-semibold'
						/>
						<button
							className='bg-blue-400 hover:bg-blue-600 duration-1000 hover:shadow-xl p-2 sm:p-3 rounded-sm mt-4 text-gray-100 text-md font-semibold'
							type='submit'
						>
							{isLoading ? (
								<span className='w-full flex justify-center'>
									<BiLoaderCircle className='animate-spin text-2xl' />
								</span>
							) : (
								<span className='w-full flex justify-center'>login</span>
							)}
						</button>

						<p className='text-center my-4 sm:hidden'>or</p>
						<NavLink to={'/register'} className='sm:hidden'>
							<button
								className='border-red-400 border-2 font-bold text-red-400 p-2 sm:p-3 rounded-sm hover:bg-red-400 hover:text-slate-900 text-base w-full duration-700'
								type='reset'
							>
								register
							</button>
						</NavLink>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
