import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Customer from '../pages/Customer';
import Medical from '../pages/medcloud/Medical';
import Admin from '../pages/admin/Admin';
import RegisterPersonal from '../pages/RegisterPersonal';
import AdminTableUser from '../pages/admin/AdminTableUser';
import AdminUpdateUser from '../pages/admin/AdminUpdateUser';
import AdminDeleteUser from '../pages/admin/AdminDeleteUser';
import ProfileAdmin from '../pages/admin/AdminProfile';
import AdminUpdateProfile from '../pages/admin/AdminUpdateProfile';
import MedicalUpdateHealth from '../pages/medcloud/MedicalUpdateHealth';
import MedicalDeleteUser from '../pages/medcloud/MedicalDeleteUser';
import MedicalPostUser from '../pages/medcloud/MedicalPostUser';
import MedicalUpdateProfile from '../pages/medcloud/MedicalUpdateProfile';
import MedicalTableUsers from '../pages/medcloud/MedicalTableUsers';
import MedicalProfile from '../pages/medcloud/MedicalProfile';
import MedicalFormUpdate from '../pages/medcloud/MedicalFormUpdate';
import MedicalPostUserForm from '../pages/medcloud/MedicalCreateUserForm';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Homepage }/>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ RegisterPersonal } />

      {/* admin */}
      <Route exact path="/admin" component={ Admin } />
      <Route exact path="/admin/table/users" component={ AdminTableUser } />
      <Route exact path="/admin/update/user" component={ AdminUpdateUser } />
      <Route exact path="/admin/delete/user" component={ AdminDeleteUser } />
      <Route exact path="/admin/profile" component={ ProfileAdmin } />
      <Route exact path="/admin/update/profile" component={ AdminUpdateProfile} />

      <Route exact path="/customer" component={ Customer } />

      {/* medcloud */}
      <Route exact path="/medcloud" component={ Medical } />
      <Route exact path="/medcloud/table/users" component={ MedicalTableUsers } />

      <Route exact path="/medcloud/update/user" component={ MedicalUpdateHealth } />
      <Route exact path="/medcloud/delete/user" component={ MedicalDeleteUser } />
      <Route exact path="/medcloud/post/user" component={ MedicalPostUser } />
      <Route exact path="/medcloud/post/user/form" component={ MedicalPostUserForm } />
      <Route exact path="/medcloud/update/profile" component={ MedicalUpdateProfile } />
      <Route exact path="/medcloud/update/profile/form" component={ MedicalFormUpdate } />
      <Route exact path="/medcloud/profile" component={ MedicalProfile } />

      
      
   
    </Switch>
  )
}