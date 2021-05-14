import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

// import { Container } from './styles';

const ConfirmCadastroSenha: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <h1>Nova Senha Cadastrada!</h1>
            <hr />
            <p>
              Caro cliente,
                </p>
            <p>
              Sua nova senha foi cadastrada com sucesso. Para entrar em sua área restrita agora mesmo, <Link to="/login">clique aqui</Link>.
                </p>
            <p>
              Agradecemos pela confiança em nossos serviços.
                </p>
            <p>
              Cordialmente,<br />
                    Central de Relacionamento Quitanda Online
                </p>
            <p>
              <Link to="/" className="btn btn-lg btn-danger">Voltar à Página Principal</Link>
            </p>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default ConfirmCadastroSenha;