import {
  HashRouter, Route, Switch,
} from 'react-router-dom';
import './assets/stylesheets/App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Routes} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
