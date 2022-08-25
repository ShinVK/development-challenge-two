import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path="/login" component={ Login } />
    </Switch>
  )
}