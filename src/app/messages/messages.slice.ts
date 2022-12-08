import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import messagesSerives from './messages.service';
import {
	iThunkAPIUser,
	iMessageState,
	iAddMessage,
} from '../../types/messages';

const initialState: iMessageState = {
	messages: [],
	isError: false,
	isLoading: false,
	isSuccess: false,
	errorMessage: '',
};

//  get all users

// get messages from user connected
export const getMessages = createAsyncThunk(
	'message/getMessages',
	async (receiverId: string, thunkAPI) => {
		const { auth } = thunkAPI.getState() as iThunkAPIUser;
		const { token } = auth.user;
		try {
			return await messagesSerives.getMessages(receiverId, token);
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

// create new message
export const addMessage = createAsyncThunk(
	'message/addMessage',
	async (messageData: iAddMessage, thunkAPI) => {
		const { auth } = thunkAPI.getState() as iThunkAPIUser;
		const { token } = auth.user;
		const { content, receiverId } = messageData;
		console.log(messageData);
		try {
			return await messagesSerives.addMessage(content, receiverId, token);
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

const messageSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {
		init: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder

			.addCase(getMessages.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.messages = [];
				state.isError = false;
			})
			.addCase(getMessages.fulfilled, (state, action) => {
				state.isLoading = false;
				state.messages = action.payload;
				state.isSuccess = true;
			})
			.addCase(getMessages.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.errorMessage = action.payload as string;
			})
			.addCase(addMessage.pending, (state) => {
				state.isLoading = true;
				state.isSuccess = false;
				state.isError = false;
			})
			.addCase(addMessage.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.messages.push(action.payload);
			})
			.addCase(addMessage.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.errorMessage = action.payload as string;
			});
	},
});

export const { init } = messageSlice.actions;
export default messageSlice.reducer;
