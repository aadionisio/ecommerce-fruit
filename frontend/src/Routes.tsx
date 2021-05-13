import Contato from 'pages/Contato';
import Home from 'pages/Home';
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
      </Switch>
    </BrowserRouter>
  );
}

export default route;