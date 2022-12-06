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
	const handleChange = (e: any) => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (isError) toast.error(error || 'error to login');
		if (isSuccess && user) {
			toast.success('login succesfulliy');
			navigate('/');
		}
	}, [isError, isSuccess]);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (userInput.password.trim() == '' || userInput.username.trim() == '') {
			toast.warning('all fields required', {
				// theme: 'dark',
			});
		} else {
			dispatch(login(userInput));
			setUserInput({ ...userInput, username: '', password: '' });
		}
	};
	return (
		<div className='min-h-screen h-screen'>
			<div className='container mx-auto h-full flex items-center md:px-5'>
				<div className='hidden sm:block w-1/2 sm:pr-20'>
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
						<button className='border-red-400 border-2 font-bold text-red-400 p-4 rounded-sm mt-4 hover:bg-red-400 hover:text-slate-900 w-52 duration-700'>
							register
						</button>
					</NavLink>
				</div>
				<div className='w-full mx-auto sm:w-1/2 p-4 sm:p-0'>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col max-w-sm mx-auto'
					>
						<h3 className='text-4xl font-bold my-4 text-red-400'>
							Welcome again
						</h3>
						<label htmlFor='username'>username</label>
						<input
							type='text'
							name='username'
							placeholder='cedric vb'
							onChange={handleChange}
							value={userInput.username}
							className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<label htmlFor='password'>password</label>
						<input
							type='text'
							name='password'
							placeholder='password'
							onChange={handleChange}
							value={userInput.password}
							className='p-4
                      outline-none rounded-lg mb-4 text-lg bg-gray-400 text-gray-800 font-semibold'
						/>
						<button
							className='bg-blue-400 hover:shadow-xl p-4 rounded-sm mt-4 text-gray-100 text-xl font-semibold'
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
								className='border-red-400 border-2 font-bold text-red-400 p-4 rounded-sm mt-4 hover:bg-red-400 hover:text-slate-900 w-full duration-700'
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
