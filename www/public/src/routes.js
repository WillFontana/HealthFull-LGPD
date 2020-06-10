import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import authed from './services/auth';

// componentes:
import Header from './components/layout/Header';

// páginas:
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

// Perfis e acessos
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

// Informações
import About from './infos/AboutLgbd';
import Requisitos from './infos/Requisitos';
import DatasEventos from './infos/Datas';
import Hints from './infos/Dicas';
import LGPDnaSaude from './infos/LgpdSaude';
import AlemDaProgramacao from './infos/AlemProgramadores';
import MedicosEmFoco from './infos/MedicosFoco';
import MedicosEmPaciente from './infos/MedicosPacientes';
// Testes de desempenho


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

        <Route path="/about" component={About} />
        <Route path="/requisitos" component={Requisitos} />
        <Route path="/datas-e-eventos" component={DatasEventos} />
        <Route path="/dicas" component={Hints} />
        
        <Route path="/lgpd-na-saude" component={LGPDnaSaude} />
        <Route path="/alem-da-programacao" component={AlemDaProgramacao} />
        <Route path="/medicos-em-foco" component={MedicosEmFoco} />
        <Route path="/medicos-e-pacientes" component={MedicosEmPaciente} />
      </Switch>
    </BrowserRouter>
  );
}