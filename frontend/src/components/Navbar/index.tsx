import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger border-botton shadow-sm mb-3">
        <div className="container">
          <a className="navbar-brand" href="/"><b>Quitanda Online</b> </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contato">
                  Contato
                </Link>
              </li>
            </ul>
            <div className="align-self-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contato">
                    Quero me Cadastrar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contato">
                    Entrar
                  </Link>
                </li>
                <li className="nav-item">
                  <span className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0" title="5 produtos(s) no carrinho"><small>5</small></span>
                  <Link className="nav-link text-white" to="/contato">
                    <i className="bi-cart" ></i>
                  </Link>
                </li>
              </ul>
            </div>



          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;