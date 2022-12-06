export interface iUser {
	username: string;
	password: string;
	email: string;
	token: string;
	name: string;
	lastname: string;
	imageUrl: string;
}

export interface iAuth {
	user: iUser | null;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error: string;
}

export interface iLoginInput {
	username: string;
	password: string;
}
