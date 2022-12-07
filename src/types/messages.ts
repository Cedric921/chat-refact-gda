export interface iThunkAPIUser {
	auth: {
		user: {
			mail: string;
			lastname: string;
			name: string;
			token: string;
			username: string;
			_id: string;
		};
		errorMessage: string;
		isError: boolean;
		isLoading: boolean;
		isSuccess: boolean;
	};
	messages: {
		messages: [];
		errorMessage: string;
		isError: boolean;
		isLoading: boolean;
		isSuccess: boolean;
	};
}

export interface iMessage {
	_id: string;
	content: string | null;
	sender: string;
	users: string[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface iMessageState {
	messages: iMessage[];
	isError: boolean;
	isLoading: boolean;
	isSuccess: boolean;
	errorMessage: string;
}
