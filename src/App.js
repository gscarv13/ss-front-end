import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './views/Home';
import Navigation from './components/Navgation';
import Activities from './views/Activities';
import Schedules from './views/Schedules';
import './assets/App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/activities" component={Activities} />
              <Route exact path="/schedules" component={Schedules} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
