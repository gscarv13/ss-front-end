import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Redirect } from 'react-router-dom';
import { userSignUp } from '../../redux/actions/userActions';
import Loading from '../General/Loading';
import ErrorToast from '../General/ErrorToast';
import { containerVariants } from '../../constants/animationVariants';
import '../../assets/stylesheets/SignInSignUp.css';

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
  const { loading, signUpError, success } = userDispatchResults;

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
    <>
      {
        loading
          ? <Loading />
          : (
            <motion.div
              className="Form-Container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h1>Criar Conta</h1>
              <form onSubmit={handleSubmit} data-testid="sign-up-form">
                <input onChange={handleChange} type="email" name="email" placeholder="Email" value={credentials.email} />
                <input onChange={handleChange} type="text" name="first_name" placeholder="Primeiro Nome" value={credentials.first_name} />
                <input onChange={handleChange} type="text" name="last_name" placeholder="Ultimo Nome" value={credentials.last_name} />
                <input onChange={handleChange} type="password" name="password" placeholder="Senha" value={credentials.password} />
                <input onChange={handleChange} type="password" name="password_confirmation" placeholder="Confirme Sua Senha" value={credentials.password_confirmation} />
                <button type="submit" className="Button">Criar Conta</button>
              </form>
              <footer>
                Já é um membro?
                <Link to="/signin">Entrar</Link>
              </footer>
              {signUpError && <ErrorToast error={signUpError} />}
              {success && <Redirect to="/home" />}
            </motion.div>
          )

      }

    </>
  );
};

export default SignUpForm;
