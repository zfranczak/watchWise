import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import ApiCall from './components/ApiCall';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navigation />

        <Switch>
          <Route exact path='/'>
            <Landing />
            <ApiCall />
          </Route>

          <Route path='/watched'>
            <Watched />
          </Route>

          <Route path='/add'>
            <Add />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
