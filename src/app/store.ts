import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import contactReducer from './contact/contact-slice';
import contactsReducer from './contacts/contacts-slice';
import messagesReducer from './messages/messages.slice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		contacts: contactsReducer,
		contact: contactReducer,
		messages: messagesReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
