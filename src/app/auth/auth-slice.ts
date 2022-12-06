import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { iUser, iAuth, iLoginInput } from './../../types/globalState';
import authService from './auth-service';

const initialState: iAuth = {
	user: null,
	isLoading: false,
	isSuccess: false,
	isError: false,
	error: '',
};

export const login = createAsyncThunk(
	'auth/login',
	async (userData: iLoginInput, thunkAPI) => {
		try {
			return await authService.loginUser(userData);
		} catch (error: any) {
			const message =
				(error &&
					error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message.toString() ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.user = null;
				state.isLoading = true;
				state.isSuccess = false;
				state.isError = false;
				state.error = '';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload as any;
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.error = '';
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = true;
				state.error = action.payload as string;
			});
	},
});

export default authSlice.reducer;
