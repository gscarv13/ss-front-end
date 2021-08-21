import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignIn } from '../redux/actions/userActions';
import Loading from './Loading';
import ErrorToast from './ErrorToast';

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
    <div>
      {
        loading
          ? <Loading />
          : (
            <div>
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
              {error && <ErrorToast error={error} />}
              {success && <Redirect to="/" />}
            </div>
          )
      }
    </div>
  );
};

export default SignInForm;
