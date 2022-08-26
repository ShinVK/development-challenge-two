import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Customer from '../pages/Customer';
import Medical from '../pages/Medical';
import Admin from '../pages/Admin';
import RegisterPersonal from '../pages/RegisterPersonal';
import RegisterHealth from '../pages/RegisterHealth';
import AdminTableUser from '../pages/AdminTableUser';
import AdminUpdateUser from '../pages/AdminUpdateUser';
import AdminDeleteUser from '../pages/AdminDeleteUser';
import ProfileAdmin from '../pages/AdminProfile';
import AdminUpdateProfile from '../pages/AdminUpdateProfile';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/admin" component={ Admin } />
      <Route exact path="/admin/table/users" component={ AdminTableUser } />
      <Route exact path="/admin/update/user" component={ AdminUpdateUser } />
      <Route exact path="/admin/delete/user" component={ AdminDeleteUser } />
      <Route exact path="/admin/profile" component={ ProfileAdmin } />
      <Route exact path="/admin/update/profile" component={ AdminUpdateProfile} />

      <Route exact path="/customer" component={ Customer } />
      <Route exact path="/medcloud" component={ Medical } />
      <Route exact path="/register" component={ RegisterPersonal } />
      <Route exact path="/register/health" component={ RegisterHealth } />
    </Switch>
  )
}