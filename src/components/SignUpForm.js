import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { userSignUp } from '../redux/actions/userActions';
import Loading from './Loading';
import ErrorToast from './ErrorToast';

const SignUpForm = () => {
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const [credentials, setCredentials] = useState(initialState);
  const dispatch = useDispatch();
  const userDispatchResults = useSelector((state) => state.userObject);
  const { loading, error, success } = userDispatchResults;

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
    dispatch(userSignUp(signUpDetails));
  };

  return (
    <div>
      {
        loading
          ? <Loading />
          : (
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
              {error && <ErrorToast error={error} />}
              {success && <Redirect to="/" />}
            </>
          )

      }

    </div>
  );
};

export default SignUpForm;