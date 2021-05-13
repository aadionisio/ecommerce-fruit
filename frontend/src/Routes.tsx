import Contato from 'pages/Contato';
import Home from 'pages/Home';
import Privacidade from 'pages/Privacidade';
import QuemSomos from 'pages/QuemSomos';
import Termos from 'pages/Termos';
import Trocas from 'pages/Trocas';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Container } from './styles';

const route: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contato" >
          <Contato />
        </Route>
        <Route path="/quemsomos" >
          <QuemSomos />
        </Route>
        <Route path="/termos" >
          <Termos />
        </Route>
        <Route path="/trocas" >
          <Trocas />
        </Route>
        <Route path="/privacidade" >
          <Privacidade />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default route;