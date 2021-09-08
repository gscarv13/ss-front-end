import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './General/Navigation';
import Home from './Home/Home';
import Activities from './Activities/Activities';
import Schedules from './Schedules/Schedules';
import Authentication from './Authentication/Authentication';
import SignUpForm from './Authentication/SignUpForm';

const Routes = () => {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/schedules/:id" component={Schedules} />
            <Route exact path="/signin" render={() => <Authentication />} />
            <Route exact path="/signup" component={SignUpForm} />
          </Switch>
        </AnimatePresence>
      </main>
    </>
  );
};

export default Routes;
