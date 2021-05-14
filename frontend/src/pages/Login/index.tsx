import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <div className="row justify-content-center">


              <form className="col-sm-10 col-md-8 col-lg-6">
                <h1>Identifique-se, por favor</h1>
                <div className="form-floating mb-3">
                  <input type="email" id="txtEmail" className="form-control" placeholder=" " autoFocus />
                  <label htmlFor="txtEmail">E-Mail</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" id="txtSenha" className="form-control" placeholder=" " />
                  <label htmlFor="txtSenha">Senha</label>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" className="form-check-input" value="" id="chkLembrar" />
                  <label htmlFor="chkLembrar" className="form-check-label">Lembrar de mim</label>
                </div>

                <Link to="#">
                  <button type="button" className="btn btn-lg btn-danger" >
                    Entrar
                  </button>
                </Link><br />

                <p className="mt-3">
                  Ainda não é cadastrado? <a href="#">Clique Aqui</a> para se cadastrar.
                </p>
                <p className="mt-3">
                  Esqueceu sua senha? <Link to="/recuperarsenha">Clique Aqui</Link> para recuperá-la.
                </p>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default Login;