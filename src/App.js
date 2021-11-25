import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Add from './Pages/Add';
import Calendar from './Pages/Calendar';
import List from './Pages/List';
import Search from './Pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={['/', '/list']} component={List} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/search" component={Search} />
          <Route />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
