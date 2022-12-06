import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
	return (
		<div
			className='bg-gradient-to-br
     from-slate-900 via-slate-900 to-red-600  text-gray-400'
		>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Signup />} />
				<Route path='/contact' element={<Contacts />} />
				<Route path='/chat' element={<Chat />} />
				<Route path='/' element={<Contacts />} />
			</Routes>
		</div>
	);
}

export default App;
