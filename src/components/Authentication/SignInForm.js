import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { userSignIn } from '../../redux/actions/userActions';
import Loading from '../General/Loading';
import ErrorToast from '../General/ErrorToast';
import '../../assets/stylesheets/SignInSignUp.css';
import { containerVariants } from '../../constants/animationVariants';

const SignInForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userObject);

  const { signInError, loading, success } = userState;

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
            <motion.div
              className="Form-Container"
              data-testid="sign-in-form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1>Entrar</h1>
              <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="email" name="email" placeholder="Email" value={credentials.email} />
                <input onChange={handleChange} type="password" name="password" placeholder="Senha" value={credentials.password} />
                <button type="submit" className="Button">Entrar</button>
              </form>
              <footer>
                Ainda não tem uma conta?
                <Link to="/signup">Crie uma aqui</Link>
              </footer>
              {success && <Redirect to="/home" />}
            </motion.div>
          )
      }
      { signInError && <ErrorToast error={signInError} /> }
    </>
  );
};

export default SignInForm;
