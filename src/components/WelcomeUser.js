import PropType from 'prop-types';

const WelcomeUser = ({ user }) => (
  <p>
    Welcome
    {user.first_name}
  </p>
);

WelcomeUser.propTypes = {
  user: PropType.objectOf(PropType.string).isRequired,
};

export default WelcomeUser;
