import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
  const authed = useState(() => {
    const user = localStorage.getItem('@app:user');
    const token = localStorage.getItem('@app:token');
    if (user && token) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <BrowserRouter>
      {authed[0] && <><Header></Header></>}
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