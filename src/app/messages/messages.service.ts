import axios from 'axios';

// api
const API_URL = import.meta.env.VITE_API_URI;

const getMessages = async (receiverId: string, token: string) => {
	token = token || JSON.parse(localStorage.getItem('chat-gda-user')!).token;
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const res = await axios.get(
		`${API_URL}/api/v1/messages/${receiverId}`,
		config
	);
	return res.data;
};

const getUserMessages = async (token: string) => {
	token = token || JSON.parse(localStorage.getItem('chat-gda-user')!).token;
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const res = await axios.get(`${API_URL}/api/v1/messages/users`, config);
	return res.data;
};

const addMessage = async (
	content: string,
	receiverId: string,
	token: string
) => {
	token = token || JSON.parse(localStorage.getItem('chat-gda-user')!).token;

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const res = await axios.post(
		`${API_URL}/api/v1/messages/${receiverId}`,
		{ content },
		config
	);
	return res.data;
};

const messagesSerives = { getMessages, addMessage, getUserMessages };
export default messagesSerives;
