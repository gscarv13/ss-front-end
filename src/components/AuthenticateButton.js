// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const AuthenticateButton = () => (
  <div>
    Welcome!
    {' '}
    <Link to="/signin">Login / Sign Up</Link>
  </div>
);

// AuthenticateButton.propTypes = {};

export default AuthenticateButton;
