import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import authed from './services/auth';

// componentes:
import Header from './components/layout/Header';

// páginas:
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes() {

  return (
    <BrowserRouter>
      {authed && <><Header></Header></>}
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}