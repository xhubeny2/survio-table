import React from 'react';
import { Provider } from 'react-redux'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import store from './redux/store/store';

import TablePage from './Pages/TablePage';
import Home from './Pages/Home';

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
