import { iContacts } from './../../types/contact';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import contactService from './contacts.service';
const initialState: iContacts = {
	contacts: null,
	isLoading: false,
	isSuccess: false,
	isError: false,
	error: '',
};

//  get all users
export const getContacts = createAsyncThunk(
	'contacts/getContacts',
	async (_, thunkAPI) => {
		try {
			return await contactService.getAllContacts();
		} catch (error: any) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// get messages from user connecte

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getContacts.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.isError = false;
				state.error = '';
			})
			.addCase(getContacts.fulfilled, (state, action) => {
				state.contacts = action.payload.users;
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.error = '';
			})
			.addCase(getContacts.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.error = action.payload as string;
			});
	},
});

export default contactsSlice.reducer;
