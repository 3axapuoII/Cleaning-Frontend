import React from 'react';
import "./css/animate.css";
//import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/magnific-popup.css";
import "./css/flaticon.css";
import "./css/style.css";
/*
<link rel="stylesheet" href="css/animate.css">
    
<link rel="stylesheet" href="css/owl.carousel.min.css">
<link rel="stylesheet" href="css/owl.theme.default.min.css">
<link rel="stylesheet" href="css/magnific-popup.css">

<link rel="stylesheet" href="css/flaticon.css">
<link rel="stylesheet" href="css/style.css">
*/
const Services = props => {

return(
<section class="ftco-section">
    	<div class="container">
    		<div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
          	<span class="subheading">СЕРВИС</span>
            <h2>Как Мы Работаем</h2>
          </div>
        </div>
    		<div class="row">
          <div class="col-md-6 col-lg-4 services ftco-animate">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-workplace"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Уборка офиса</h3>
                <p>   Влажная уборка пола и стен; мойка окон, дверей, осветительных приборов; мойка зеркал и перегородок; обеспыливание и полировка поверхностей; сухая чистка ковров....</p>
                
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 services ftco-animate">
          	<div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-pool"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Чистка бассейна</h3>
                <p>   Очистка и дезинфекция воды; удаление ржавчины и минеральных отложений; мытье и дезинфекция полов, стен и потолков, шезлонгов, резиновых ковриков...</p> 
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 services ftco-animate">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-rug"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Чистка изделий
				</h3>
                <p>   Удаление пыли и иной грязи с поверхностиМойка изделия с использованием специализированных моющих средствУдаление невыводимых пя</p>
               
              </div>
            </div> 
          </div>

          <div class="col-md-6 col-lg-4 services ftco-animate">
          	<div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-kitchen"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Уборка кухни</h3>
                <p>Протираем все доступные поверхности. Моем внутри и снаружи холодильники микроволновки ,  духовки, вытяжки..</p>
              
              </div>
            </div> 
          </div>

          <div class="col-md-6 col-lg-4 services ftco-animate">
            <div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-garden"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Уборка сада</h3>
                <p>   Покос травы любой сложности триммером и газонокосилкой. Вырубка кустарников и других насаждений. Спиливание деревьев и веток любой сложности.. </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 services ftco-animate">
          	<div class="d-block d-flex">
              <div class="icon d-flex justify-content-center align-items-center">
            		<span class="flaticon-balcony"></span>
              </div>
              <div class="media-body pl-3">
                <h3 class="heading">Мытье окон</h3>
                <p>   Мойка любой сложности</p>
              
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>




 /*   
    <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <h2>Как Мы Работаем</h2>
          </div>
        </div>
    		<div className="row">
          <div className="col-md-6 col-lg-4 services ftco-animate">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-workplace">
                    <img src="http://localhost:5555/avatars/office.PNG" alt=""></img>
                    </span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Уборка офиса</h3>
                <p>   Влажная уборка пола и стен; мойка окон, дверей, осветительных приборов; мойка зеркал и перегородок; обеспыливание и полировка поверхностей; сухая чистка ковров....</p>
                
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 services ftco-animate">
          	<div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-pool">
                    <img src="http://localhost:5555/avatars/basseign.PNG" alt=""></img>
                    </span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Чистка бассейна</h3>
                <p>   Очистка и дезинфекция воды; удаление ржавчины и минеральных отложений; мытье и дезинфекция полов, стен и потолков, шезлонгов, резиновых ковриков...</p> 
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 services ftco-animate">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-rug">
                    <img src="http://localhost:5555/avatars/carpet.PNG" alt=""></img>
                    </span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Чистка изделий
				</h3>
                <p>   Удаление пыли и иной грязи с поверхности; Мойка изделия с использованием специализированных моющих средств; Удаление невыводимых пятен</p>
               
              </div>
            </div> 
          </div>

          <div className="col-md-6 col-lg-4 services ftco-animate">
          	<div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-kitchen">
                    <img src="http://localhost:5555/avatars/kitchen.PNG" alt=""></img>
                    </span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Уборка кухни</h3>
                <p>Протираем все доступные поверхности. Моем внутри и снаружи холодильники микроволновки,  духовки, вытяжки</p>
              
              </div>
            </div> 
          </div>

          <div className="col-md-6 col-lg-4 services ftco-animate">
            <div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-garden">
                    <img src="http://localhost:5555/avatars/garden.PNG" alt=""></img>
                    </span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Уборка сада</h3>
                <p>   Покос травы любой сложности триммером и газонокосилкой. Вырубка кустарников и других насаждений. Спиливание деревьев и веток любой сложности </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 services ftco-animate">
          	<div className="d-block d-flex">
              <div className="icon d-flex justify-content-center align-items-center">
            		<span className="flaticon-balcony">
                    <img src="http://localhost:5555/avatars/windows.PNG" alt=""></img>
                    </span>
              </div>
              <div className="media-body pl-3">
                <h3 className="heading">Мытье окон</h3>
                <p>   Мойка любой сложности</p>
              
              </div>
            </div>
          </div>
        </div>
    	</div>
    </section>*/
)
}

export default Services;