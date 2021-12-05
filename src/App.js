import React from 'react';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Add from './Pages/Add';
import Calendar from './Pages/Calendar';
import List from './Pages/List';
import Search from './Pages/Search';
import Home from './Pages/Home';

const App = () => {
  const history = useHistory();
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} props={history} />
          <Route exact path="/list" component={List} props={history} />
          <Route exact path="/calendar" component={Calendar} props={history} />
          <Route exact path="/add" component={Add} props={history} />
          <Route exact path="/search" component={Search} props={history} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
