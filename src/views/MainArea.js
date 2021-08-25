import { Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navgation';
import SessionButton from '../components/SessionButton';
import Home from './Home';
import Activities from './Activities';
import Schedules from './Schedules';
import Authentication from './Authentication';
import SignUpForm from '../components/SignUpForm';

const MainArea = () => (
  <>
    <Navigation />
    <main>
      <SessionButton />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/activities" component={Activities} />
        <Route exact path="/schedules/:id" component={Schedules} />
        <Route exact path="/signin" render={() => <Authentication />} />
        <Route exact path="/signup" component={SignUpForm} />
      </Switch>
    </main>
  </>
);

export default MainArea;
