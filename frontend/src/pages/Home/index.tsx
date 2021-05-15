import Carrousel from 'components/Carrousel';
import DadosProdutos from 'components/DadosProdutos';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';
import './styles.css';


// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-column wrapper">
        <Navbar />
        <Carrousel />
        <main className="flex-fill">
          <div className="container">
            <DadosProdutos />
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default Home;