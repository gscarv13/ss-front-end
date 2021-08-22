import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from './views/Home';
import Navigation from './components/Navgation';
import Activities from './views/Activities';
import Schedules from './views/Schedules';
import './assets/App.css';
import SignUpForm from './components/SignUpForm';
import SessionButton from './components/SessionButton';
import Authentication from './views/Authentication';

function App() {
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
            <Route exact path="/signin" render={() => <Authentication />} />
            <Route exact path="/signup" component={SignUpForm} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
