import React, { useState } from 'react';
import { loginApi } from '../utils/api/userApi';
import Auth from '../utils/auth';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../utils/authContext';


const LoginForm = () => {
  const {currentUser, setCurrentUser} = useAuthContext()
  const navigate = useNavigate()

  const [userFormData, setUserFormData] = useState({
		username: '',
		password: '',
	});

	const [userLoginError, setUserLoginError] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userFormData)
    // Handle login logic here
    try {
			const response = await loginApi(userFormData);
			if (!response.token) {
				throw new Error('something went wrong!');
			}
			Auth.login(response.token);
      setCurrentUser(userFormData.username)
      navigate('/')
		} catch (err) {
			console.error(err);
			setUserLoginError(true);
		}
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={userFormData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          name='username'
        />
        <TextField
          label="Password"
          type="password"
          value={userFormData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          name='password'
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;