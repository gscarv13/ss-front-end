import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import UserDashboard from './UserDashboard';
import '../../assets/stylesheets/Home.css';
import { containerVariants, buttonVariants } from '../../constants/animationVariants';

const Home = () => {
  const userObject = useSelector((state) => state.userObject);
  const { user, loggedIn } = userObject;
  return (
    <motion.div
      className="Home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {
        loggedIn
          ? (
            <>
              <h1>
                Welcome!
                { user && ` ${user.first_name}` }
              </h1>
              <UserDashboard />
            </>
          )
          : (
            <>
              <h1>Welcome!</h1>
              <p>
                Storm Mountain is a winter sports resort.
                To book a lesson please sign up and sign up
                and visit the activities page.
              </p>
              <Link to="/signin">
                <motion.p
                  className="Button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Sign In
                </motion.p>
              </Link>
            </>
          )
      }
    </motion.div>
  );
};

export default Home;
