import Paginacao from 'components/Paginacao';
import React from 'react';
import './styles.css';

// import { Container } from './styles';

const DadosProdutos: React.FC = () => {
  return (
    <>
      <Paginacao />
      <hr className="mt-3" />
      {/* indica que sera usada a estrutura de separacao em 12 colunas
          indica que o espaço entre cada coluna é de 3.  */}
      <div className="row g-3">


      </div>

    </>);
}

export default DadosProdutos;