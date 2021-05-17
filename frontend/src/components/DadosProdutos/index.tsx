import Paginacao from 'components/Paginacao';
import Produto01 from 'img/produtos/000001.jpg';
import Produto02 from 'img/produtos/000002.jpg';
import Produto03 from 'img/produtos/000003.jpg';
import Produto04 from 'img/produtos/000004.jpg';
import Produto05 from 'img/produtos/000005.jpg';
import Produto06 from 'img/produtos/000006.jpg';
import Produto07 from 'img/produtos/000007.jpg';
import Produto08 from 'img/produtos/000008.jpg';
import Produto09 from 'img/produtos/000009.jpg';
import Produto10 from 'img/produtos/000010.jpg';
import Produto11 from 'img/produtos/000011.jpg';
import Produto12 from 'img/produtos/000012.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
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
        {/* 
        1 - por padrão a div ocupa toda a tela (12 posições)
        2 - quando a resolução for sm ou superior ocupa 6 posições da tela (2 por linha)
        3 - quanto a resolução for md ou superior ocupa 4 posições na tela (3 por linha)
        4 - quanto a resolução for lg ou superior ocupa 3 posições na tela (4 por linha)
        5 - quanto a resolução for xl ou superior ocupa 2 posições na tela (6 por linha)

        */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto01} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text truncar-3l">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        {/* divisoria de itens . apagar daqui pra baixo quando for implementar a api */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto02} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto03} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="#" className="btn btn-light disabled mt-2 d-block">
                <small> Reabastecendo estoque </small>
              </Link>
              <small className="text-danger">Produto Esgotado</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart-fill">

              </i>
            </a>
            <img src={Produto04} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto05} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto06} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto07} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto08} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto09} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto10} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto11} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <div className="card text-center bg-light">
            <a href="#" className="position-absolute end-0 p-2 text-danger">
              <i className="bi-suit-heart">

              </i>
            </a>
            <img src={Produto12} className="card-img-top" />
            <div className="card-reader">
              R$ 4,59
            </div>
            <div className="card-body">
              <h5 className="card-title">Banana Prata</h5>
              <p className="card-text">Banana prata de alta qualidade, direto do produtor para rural para a sua mesa!</p>

            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-danger mt-2">
                Adicionar ao Carrinho
              </Link>
              <small className="text-success"> 320,5kg em estoque</small>
            </div>
          </div>
        </div>


      </div>
      <hr className="mt-3" />



    </>);
}

export default DadosProdutos;