import CadastrarNovaSenha from 'pages/CadastrarNovaSenha';
import Carrinho from 'pages/Carrinho';
import ConfirmCadastroSenha from 'pages/ConfirmCadastroSenha';
import ConfirmContato from 'pages/ConfirmContato';
import ConfirmRecupSenha from 'pages/ConfirmRecupSenha';
import Contato from 'pages/Contato';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Privacidade from 'pages/Privacidade';
import QuemSomos from 'pages/QuemSomos';
import RecuperarSenha from 'pages/RecuperarSenha';
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
        <Route path="/recuperarsenha" >
          <RecuperarSenha />
        </Route>
        <Route path="/confirmrecuperarsenha" >
          <ConfirmRecupSenha />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/cadastrarnovasenha" >
          <CadastrarNovaSenha />
        </Route>
        <Route path="/confirmcadastrosenha" >
          <ConfirmCadastroSenha />
        </Route>
        <Route path="/confirmacontato" >
          <ConfirmContato />
        </Route>
        <Route path="/carrinho" >
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default route;