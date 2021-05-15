import React from 'react';
import ImgCarrousel01 from 'img/slides/slide01.jpg';
import ImgCarrousel01Small from 'img/slides/slide01small.jpg';
import './styles.css';
// import { Container } from './styles';

const Carrousel: React.FC = () => {
  return (
    <>
      <div className="container">


        <div id="carouselMain" className="carousel slide carousel-dark" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" className="active" ></button>
            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="1" ></button>
            <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="2" ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000" >
              <img src={ImgCarrousel01} className="d-none d-md-block w-100" alt="" />
              <img src={ImgCarrousel01Small} className="d-block  d-md-none w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000" >
              <img src={ImgCarrousel01} className="d-none d-md-block w-100" alt="" />
              <img src={ImgCarrousel01Small} className="d-block  d-md-none w-100" alt="" />
            </div>
            <div className="carousel-item" data-bs-interval="3000" >
              <img src={ImgCarrousel01} className="d-none d-md-block w-100" alt="" />
              <img src={ImgCarrousel01Small} className="d-block  d-md-none w-100" alt="" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselMain" data-bs-slide="next">
            <span className="carousel-control-next-icon" ></span>
            <span className="visually-hidden">Proximo</span>
          </button>
        </div>
      </div>
      <hr className="mt-3" />
    </>
  );
}

export default Carrousel;