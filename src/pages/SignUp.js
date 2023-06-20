import React, { useState } from 'react';
import { signupApi } from '../utils/api/userApi';
import { TextField, Button, Container, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../utils/authContext';
import Auth from '../utils/auth'

const SignupForm = () => {
  const { currentUser, setCurrentUser} = useAuthContext()
  const navigate = useNavigate()
  const [userFormData, setUserFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const [userSignupError, setUserSignupError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    try {
      const response = await signupApi(userFormData);
      console.log(response)
      if (response.error) {
        throw new Error(response.error);
      }
      // Handle successful signup, e.g., redirect to login page
      Auth.login(response.token)
      setCurrentUser(userFormData.username)
      navigate('/')
    } catch (err) {
      console.error(err);
      setUserSignupError(true);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          value={userFormData.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          name="username"
        />
        <TextField
          label="Email"
          value={userFormData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          name="email"
        />
        <TextField
          label="Password"
          type="password"
          value={userFormData.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          name="password"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
