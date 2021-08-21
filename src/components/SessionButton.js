import { connect } from 'react-redux';
import PropType from 'prop-types';
import WelcomeUser from './WelcomeUser';
import AuthenticateButton from './AuthenticateButton';

const SessionButton = ({ user, loggedIn }) => {
  if (loggedIn) {
    return <WelcomeUser user={user} />;
  }
  return <AuthenticateButton />;
};

SessionButton.propTypes = {
  user: PropType.oneOfType([
    PropType.object.isRequired,
    PropType.oneOf([null]),
  ]).isRequired,
  loggedIn: PropType.bool.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.userObject.user,
  loggedIn: state.userObject.logged_in,
});

export default connect(mapStateToProps)(SessionButton);
