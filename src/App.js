import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Home from './views/Home';
import Navigation from './components/Navgation';
import Activities from './views/Activities';
import Schedules from './views/Schedules';
import './assets/App.css';
import LoginForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import SessionButton from './components/SessionButton';
import { isLoggedIn } from './redux/actions/userActions';

function App({ isLoggedIn }) {
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <SessionButton />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/schedules" component={Schedules} />
            <Route exact path="/signin" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.func.isRequired,
};

export default connect(null, { isLoggedIn })(App);
