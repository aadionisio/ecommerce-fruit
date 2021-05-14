import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

// import { Container } from './styles';

const CadastrarNovaSenha: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <div className="row justify-content-center">


              <form className="col-sm-10 col-md-8 col-lg-6">
                <h1>Digite Nova Senha</h1>

                <div className="form-floating mb-3">
                  <input type="password" id="txtSenha" className="form-control" placeholder=" " autoFocus />
                  <label htmlFor="txtSenha">Nova Senha</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" id="txtSenha" className="form-control" placeholder=" " />
                  <label htmlFor="txtSenha">Confirme a Senha</label>
                </div>



                <Link to="/confirmcadastrosenha">
                  <button type="button" className="btn btn-lg btn-danger" >
                    Cadastrar Nova Senha
                  </button>
                </Link><br />

              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>






  );
}

export default CadastrarNovaSenha;