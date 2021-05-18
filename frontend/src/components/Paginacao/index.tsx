import React from 'react';
import './styles.css';

// import { Container } from './styles';

const Paginacao: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-5">
          {/* classe abaixo:
            1- justifica o conteudo ao centro por padrao
            2 -justifica o conteudo a esquerda quando o tamanho da tela estiver na resolucao md ou superior 
            3 - margem inferior de 3 unidades
            4 - se resolução for md ou superior ele zera a margem inferior*/}
          <form className="justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="input-group input-group-sm">
              <input type="text" className="form-control" placeholder="Digite o produto aqui" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-danger" type="button" id="button-addon2">Buscar</button>
            </div>
          </form>

        </div>
        <div className="col-12 col-md-7">
          {/* 
            1 - indica que essa div ira usar o padrao flexbox 
            2 - indica que o preenchimento da div sera de forma reversa (direita pra esquerda)
            3 - coloca o conteudo alinhado ao centro por padrao flex
            4 - quando a resolução for do tamanho md ou superior ele vai alinhar o conteudo a direita
                já que o componente esta em modo reverso conforme item 2
            */}
          <div className="d-flex flex-row-reverse justify-content-center justify-content-md-start">
            {/* 
              classe d-block o conteudo ocupa todo o espaço horizontal e aceita alteracao na margem e no padding 
              classe d-inline-block o conteudo ocupa apenas o espaço que for necessario na horizontal permitindo que sejam colocados mais
              componentes e estes ficarão um ao lado do outro. tambem permite margem e padding */}
            <form className="d-inline-block">
              <select className="form-select form-select-sm">
                <option>Ordenar pelo nome</option>
                <option>Ordenar pelo menor preço</option>
                <option>Ordenar pelo maior preço</option>
              </select>
            </form>
            <nav className="d-inline-block me-3">
              <ul className="pagination pagination-sm my-0">
                {/* colocando uma condição. para desabilitar o campo qdo tiver na primeira pagina */}
                <li className={`page-item`}>
                  <button className="page-link" >Anterior</button>
                </li>
                <li className="page-item ">
                  <a href="/" className="page-link">1</a>
                </li>
                <li className="page-item disabled">
                  <a href="/" className="page-link">2</a>
                </li>
                <li className="page-item ">
                  <a href="/" className="page-link">3</a>
                </li>
                <li className="page-item ">
                  <a href="/" className="page-link">4</a>
                </li>
                <li className={`page-item `}>
                  <button className="page-link" > Próxima</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paginacao;