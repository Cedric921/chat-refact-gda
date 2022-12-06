import axios from 'axios';
import { iLoginInput } from '../../types/globalState';

// api
const API_URL = import.meta.env.VITE_API_URI;

const registerUser = async (userData: any) => {
	const res = await axios.post(`${API_URL}/api/v1/users/signup`, userData);
	localStorage.setItem('chat-gda-user', JSON.stringify(res.data));
	return res.data;
};

//  login func
const loginUser = async (user: iLoginInput) => {
	const res = await axios.post(`${API_URL}/api/v1/users/login`, user);
	localStorage.setItem('chat-gda-user', JSON.stringify(res.data));
	return res.data;
};

// logout func
const logout = async () => {
	localStorage.removeItem('chat-gda-user');
};

const updateImage = async (file: FormData, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const res = await axios.post(`${API_URL}/api/v1/users/image`, file, config);
	return res.data;
};

const updateUser = async (user: any, token: string) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const res = await axios.post(`${API_URL}/api/v1/users/image`, user, config);
	return res.data;
};

export default { loginUser, registerUser, logout, updateImage, updateUser };
