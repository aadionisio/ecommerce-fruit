import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

// import { Container } from './styles';

const Contato: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <div className="row justify-content-center">


              <form className="col-sm-10 col-md-8 col-lg-6">
                <h1>Entre em contato</h1>
                <div className="form-floating mb-3">
                  <input type="text" id="txtNomeCompleto" className="form-control" placeholder=" " autoFocus />
                  <label htmlFor="txtNomeCompleto">Nome Completo</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" id="txtEmail" className="form-control" placeholder=" " />
                  <label htmlFor="txtEmail">E-Mail</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea id="txtMensagem" className="form-control" placeholder=" "></textarea>
                  <label htmlFor="txtMensagem">Mensagem</label>
                </div>


                <Link to="/">
                  <button type="button" className="btn btn-lg btn-danger" >
                    Enviar Mensagem
                  </button>
                </Link><br />
                <p className="mt-3">
                  Faremos nosso melhor para responder sua mensagem em até 2 dias úteis.
                        </p>

                <p className="mt-3">
                  Atenciosamente,<br />
                    Central de Relacionamento Quitanda Online
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

export default Contato;