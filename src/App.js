import {
  BrowserRouter, Route, Switch, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './views/Home';
import Navigation from './components/Navgation';
import Activities from './views/Activities';
import Schedules from './views/Schedules';
import './assets/App.css';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <main>
            <div>
              Welcome!
              {' '}
              <Link to="/auth">Login / Sign Up</Link>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/schedules" component={Schedules} />
              <Route exact path="/auth" component={AuthForm} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
