import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import './styles.css';
import React from 'react';

// import { Container } from './styles';

const QuemSomos: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <main className="flex-fill">
          <div className="container">
            <h1>Quem Somos</h1>
            <hr />
            <p>
              Quitanda Online é uma loja virtual (e-commerce) fictícia criada como estudo de caso para o curso "Desenvolvimento de uma loja Virtual com Bootstrap 5 e ReactJS" disponibilizado gratuitamente pelo Prof. Ricardo Maroquio em seu canal no YouTube
            </p>
            <p>
              O código-fonte pode ser obtido via GitHub, conforme orientações apresentadas ao logo dos videos do curso no YouTube. Este estudo de caso poe ser utilizado livremente como base para outras lojas virtuais, sem ônus para o usuario.
            </p>
            <p>
              Bons estudos e boa programação!
            </p>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default QuemSomos;