import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Customer from '../pages/Customer';
import Medical from '../pages/Medical';
import Admin from '../pages/Admin';
import Register from '../pages/Register';
import RegisterPersonal from '../pages/RegisterPersonal';
import RegisterHealth from '../pages/RegisterHealth';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/admin" component={ Admin } />
      <Route exact path="/customer" component={ Customer } />
      <Route exact path="/medcloud" component={ Medical } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/register/personal" component={ RegisterPersonal } />
      <Route exact path="/register/health" component={ RegisterHealth } />
    </Switch>
  )
}