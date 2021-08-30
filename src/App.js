import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import './assets/stylesheets/App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MainArea from './components/Home/MainArea';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={MainArea} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
