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
                Bem Vindo!
                { user && ` ${user.first_name}` }
              </h1>
              <UserDashboard />
            </>
          )
          : (
            <>
              <h1>Bem Vindo!</h1>
              <p>
                A Storm Mountain é um risort de esportes de inverno.
                Para agendar uma aula entre ou crie uma conta
                e visite a página de atividades.
              </p>
              <Link to="/signin">
                <motion.p
                  className="Button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Entrar
                </motion.p>
              </Link>
            </>
          )
      }
    </motion.div>
  );
};

export default Home;
