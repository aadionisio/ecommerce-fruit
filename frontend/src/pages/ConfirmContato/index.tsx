import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import './styles.css';

// import { Container } from './styles';

const ConfirmContato: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <h1>Mensagem Recebida!</h1>
            <hr />
            <p>
              Caro cliente,
                </p>
            <p>
              Informamos que sua mensagem foi recebida com sucesso por nossa central de relacionamento com clientes e que em até <b>2 dias úteis</b> ela será respondida. Para evitarmos problemas de comunicação, evite reenviar esta mesma mensagem dentro do prazo de resposta.
                </p>
            <p>
              Agradecemos pela confiança em nossos serviços.
                </p>
            <p>
              Cordialmente,<br />
                    Central de Relacionamento Quitanda Online
                </p>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default ConfirmContato;