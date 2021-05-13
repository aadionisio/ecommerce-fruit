import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import './styles.css';
// import { Container } from './styles';

const RecuperarSenha: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <div className="row justify-content-center">


              <form className="col-sm-10 col-md-8 col-lg-6">
                <h1>Recuperação de Senha</h1>
                <div className="form-floating mb-3">
                  <input type="email" id="txtEmail" className="form-control" placeholder=" " autoFocus />
                  <label htmlFor="txtEmail">E-Mail</label>
                </div>


                {/* <button type="button" onClick="window.location.href='confirmrecupsenha.html'"></button> */}
                <button type="button" className="btn btn-lg btn-danger" >
                  Recuperar Senha
                </button>
                <p className="mt-3">
                  Ainda não é cadastrado? <a href="#">Clique Aqui</a> para se cadastrar.
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

export default RecuperarSenha;