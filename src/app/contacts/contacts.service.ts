import axios from 'axios';

// api
const API_URL = import.meta.env.VITE_API_URI;

const getAllContacts = async () => {
	const token = JSON.parse(localStorage.getItem('chat-gda-user')!).token;
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const res = await axios.get(`${API_URL}/api/v1/users`, config);
	return res.data;
};

const contactService = { getAllContacts };
export default contactService;
