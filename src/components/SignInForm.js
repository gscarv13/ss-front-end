import { connect } from 'react-redux';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userSignIn } from '../redux/actions/userActions';

const SignInForm = ({ userSignIn }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginDetails = {
      user: { ...credentials },
    };
    userSignIn(loginDetails);
  };

  return (
    <>
      <h1>Please sign in</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="email" name="email" placeholder="email" value={credentials.email} />
        <input onChange={handleChange} type="password" name="password" placeholder="Password" value={credentials.password} />
        <button type="submit">Sign In</button>
      </form>
      <footer>
        Not a member yet?
        <Link to="/signup">Sign Up Here</Link>
      </footer>
    </>
  );
};

SignInForm.propTypes = {
  userSignIn: PropTypes.func.isRequired,
};

export default connect(null, { userSignIn })(SignInForm);
