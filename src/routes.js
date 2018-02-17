import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Detail from './components/detail';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resto/:id" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
