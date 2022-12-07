export interface iContact {
	_id: string;
	name: string;
	lastname: string;
	username: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	imageUrl: string;
	cloudinary_id: string;
}

export interface iContacts {
	contacts: iContact[] | null;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error: string;
}

export interface iOneContact {
	contact: iContact | null;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error: string;
}
