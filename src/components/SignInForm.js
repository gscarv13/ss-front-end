import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignIn } from '../redux/actions/userActions';
import Loading from './general/Loading';
import ErrorToast from './general/ErrorToast';
import '../assets/stylesheets/SignInSignUp.css';

const SignInForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const userDispatchResults = useSelector((state) => state.userObject);

  const { error, loading, success } = userDispatchResults;

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

    dispatch(userSignIn(loginDetails));
  };

  return (
    <>
      {
        loading
          ? <Loading />
          : (
            <div className="Form-Container">
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="email" name="email" placeholder="email" value={credentials.email} />
                <input onChange={handleChange} type="password" name="password" placeholder="Password" value={credentials.password} />
                <button type="submit" className="Button">Sign In</button>
              </form>
              <footer>
                Not a member yet?
                <Link to="/signup">Sign Up Here</Link>
              </footer>
              {error && <ErrorToast error={error} />}
              {success && <Redirect to="/" />}
            </div>
          )
      }
    </>
  );
};

export default SignInForm;
