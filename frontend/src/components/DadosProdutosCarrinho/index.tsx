import React from 'react';
import Produto01 from 'img/produtos/000001.jpg';
import './styles.css';

// import { Container } from './styles';

const DadosProdutosCarrinho: React.FC = () => {
  return (
    <>
      <ul className="list-group mb-3">
        <li className="list-group-item py-3">
          <div className="row g-3">
            <div className="col-4 col-md-3 col-lg-2">
              <img src={Produto01} alt="" className="img-thumbnail" />
            </div>
            <div className="col-8 col-md-9 col-lg-7 col-xl-8 text-left align-self-center">

            </div>
          </div>
        </li>

      </ul>
    </>
  );
}

export default DadosProdutosCarrinho;