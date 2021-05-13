import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="border-top text-muted bg-light">
        <div className="container">
          <div className="row py-3">
            <div className="col-12 col-md-4 text-center">
              &copy; 2020 - Quitanda Online Ltda ME <br />
              Rua Virtual Inexistente, 171, Compulândia/PC <br />
              CNPJ 99.999.999/0001-99
            </div>
            <div className="col-12 col-md-4 text-center">
              <Link to="#" className="text-decoration-none text-dark">
                Política de Privacidade
              </Link><br />
              <Link to="#" className="text-decoration-none text-dark">
                Termos de uso
              </Link><br />
              <Link to="#" className="text-decoration-none text-dark">
                Quem Somos
              </Link><br />
              <Link to="#" className="text-decoration-none text-dark">
                Trocas e Devoluções
              </Link><br />
            </div>
            <div className="col-12 col-md-4 text-center">
              <Link to="#" className="text-decoration-none text-dark">
                Contato pelo Site
              </Link><br />
              E-Mail <a href="mailto:email@dominio.com" className="text-decoration-none text-dark">
                email@dominio.com
              </a><br />
              Telefone: <a href="phone:28999990000" className="text-decoration-none text-dark">
                (28) 99999-0000
              </a>

            </div>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;