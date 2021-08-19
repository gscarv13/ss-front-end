import { useState } from 'react';
import axios from 'axios';
import { BASE_URL, SESSIONS_PATH } from '../helpers/enpoints';

const AuthForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = credentials;
    const loginDetails = {
      user: { email, password },
    };

    const url = BASE_URL + SESSIONS_PATH;
    const config = {
      auth: { ...loginDetails },
      withCredentials: true,
    };
    try {
      const data = await axios.post(url, loginDetails, config);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Please sign in</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="email" name="email" placeholder="email" value={credentials.email} />
        <input onChange={handleChange} type="password" name="password" placeholder="Password" value={credentials.password} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default AuthForm;
