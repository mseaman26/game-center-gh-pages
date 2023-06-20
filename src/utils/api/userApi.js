import Auth from '../auth';

/******************     Login 	*******************/
export const loginApi =  async (userData) => {
	try {
		const response = await fetch('/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
			body: JSON.stringify(userData),
		});
		console.log(response)
		if (!response.ok) {
			throw new Error('Failed to log in');
		}
		const data = await response.json();
		console.log(data, "response")
		return data;
	} catch (error) {
		console.error('Error logging in:', error);
		throw error;
	}
};


/********    Updates Current User Password 	***************/
export const updatePassword = async (userData) => {
	try {
		const response = await fetch('/api/users/me/password', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error('Failed to update password');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error updating password:', error);
		throw error;
	}
};


/********    Updates Current User Info 	***************/
export const updateUser = async (userData) => {
	try {
		const response = await fetch('/api/users/me', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
			body: JSON.stringify(userData),
		});
		if (!response.ok) {
			throw new Error('Failed to update user');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error updating user:', error);
		throw error;
	}
};

/***********     Display All Users 	***************/
export const showAllUsers = async () => {
	try {
		const response = await fetch('/api/users', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
		});

		if (!response.ok) {
			throw new Error('Failed to retrieve users');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error retrieving users:', error);
		throw error;
	}
};


/*************     Creates A New User  ***************/
export const signupApi = async (userData) => {
	try {
		const response = await fetch('/api/users/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error('Failed to create user');
		}

		const data = await response.json();
		console.log(data)
		return data;
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
};

/********     Updates A User	***************/
export const updateUserInfo = async (userData) => {
	try {
		const response = await fetch(`/api/users/`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error('Failed to update user');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error updating user:', error);
		throw error;
	}
};

/********    Updates A User Password 	***************/
export const updateUserPassword = async (userData) => {
	try {
		const response = await fetch(`/api/users/password`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error('Failed to update user password');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error updating user password:', error);
		throw error;
	}
};

/***********   Deletes A User Password 	***************/
export const deleteUser = async (id) => {
	try {
		const response = await fetch(`/api/users/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${Auth.getToken()}`
			},
		});

		if (!response.ok) {
			throw new Error('Failed to delete user');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error deleting user:', error);
		throw error;
	}
};
