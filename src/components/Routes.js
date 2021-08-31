import { Route, Switch } from 'react-router-dom';
import Navigation from './General/Navigation';
import Home from './Home/Home';
import Activities from './Activities/Activities';
import Schedules from './Schedules/Schedules';
import Authentication from './Authentication/Authentication';
import SignUpForm from './Authentication/SignUpForm';

const Routes = () => (
  <>
    <Navigation />
    <main>
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

export default Routes;
