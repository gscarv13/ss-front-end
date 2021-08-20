import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userSignUp, isLoggedIn } from '../redux/actions/userActions';

const SignUpForm = ({ userSignUp, isLoggedIn }) => {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const [credentials, setCredentials] = useState(initialState);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signUpDetails = {
      user: { ...credentials },
    };
    userSignUp(signUpDetails).then(() => isLoggedIn());
  };

  return (
    <>
      <h1>Please fill you information bellow</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="email" name="email" placeholder="Email" value={credentials.email} />
        <input onChange={handleChange} type="text" name="first_name" placeholder="First Name" value={credentials.first_name} />
        <input onChange={handleChange} type="text" name="last_name" placeholder="Last Name" value={credentials.last_name} />
        <input onChange={handleChange} type="password" name="password" placeholder="Password" value={credentials.password} />
        <input onChange={handleChange} type="password" name="password_confirmation" placeholder="Confirm Your password" value={credentials.password_confirmation} />
        <button type="submit">Sign In</button>
      </form>
      <footer>
        Already a member?
        <Link to="/signin">Sign In</Link>
      </footer>
    </>
  );
};

SignUpForm.propTypes = {
  userSignUp: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(null, { userSignUp, isLoggedIn })(SignUpForm);
