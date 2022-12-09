import { iContacts, iOneContact } from '../../types/contact';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import contactService from './contact.service';
const initialState: iOneContact = {
	contact: null,
	isLoading: false,
	isSuccess: false,
	isError: false,
	error: '',
};

//  get all users
export const getContact = createAsyncThunk(
	'contact/getContact',
	async (id: string, thunkAPI) => {
		try {
			return await contactService.getContact(id);
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
	name: 'contact',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getContact.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.isError = false;
				state.error = '';
			})
			.addCase(getContact.fulfilled, (state, action) => {
				state.contact = action.payload.user;
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.error = '';
			})
			.addCase(getContact.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.isError = true;
				state.error = action.payload as string;
			});
	},
});

export default contactsSlice.reducer;
export const { reset } = contactsSlice.actions;
