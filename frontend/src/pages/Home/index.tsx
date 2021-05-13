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
        <main className="flex-fill">
          <div className="container">

          </div>
        </main>
        <Footer />
      </div>

    </>
  );
}

export default Home;