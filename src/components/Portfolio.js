import React from 'react';

const Portfolio = props => {

    const imageStyle = {
        backgroundImage: "url(http://localhost:5555/avatars/work-1.jpg)"
      };
      const imageStyle2 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-2.jpg)"
      };
      const imageStyle3 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-3.jpg)"
      };
      const imageStyle4 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-4.jpg)"
      };
      const imageStyle5 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-5.jpg)"
      };
      const imageStyle6 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-6.jpg)"
      };
      const imageStyle7 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-7.jpg)"
      };
      const imageStyle8 = {
        backgroundImage: "url(http://localhost:5555/avatars/work-8.jpg)"
      };

return(		
		<section class="ftco-section">
			<div class="container">
				<div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-12 heading-section  text-center ftco-animate">
          	<span class="subheading">Наши Проекты</span>
            <h2>Мы сделали много последних проектов по уборке</h2>
          </div>
        </div>
				<div class="row">
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle2}>
            	<a href="images/work-1.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-2.jpg">Уборка домов</a></h2>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle}>
            	<a href="images/work-2.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-1.jpg">Мытье окон</a></h2>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle3}>
            	<a href="images/work-3.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-3.jpg">Уборка бассейнов</a></h2>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle4}>
            	<a href="images/work-4.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-4.jpg">Уборка офисов</a></h2>
	              </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle5}>
            	<a href="images/work-5.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-5.jpg">Мытье Ковров</a></h2>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle6}>
            	<a href="images/work-6.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-6.jpg">Уборка сада</a></h2>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle7}>
            	<a href="images/work-7.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-7.jpg">Уборка сада</a></h2>
	              </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 ftco-animate">
            <div class="work img d-flex align-items-center" style={imageStyle8}>
            	<a href="http://localhost:5555/avatars/work-8.jpg" class="icon image-popup d-flex justify-content-center align-items-center">
	    					<span class="fa fa-expand"></span>
	    				</a>
            	<div class="desc w-100 px-4 text-center pt-5 mt-5">
	              <div class="text w-100 mb-3 mt-4">
	              	<h2><a href="http://localhost:5555/avatars/work-8.jpg">Уборка бассейна</a></h2>
	              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col text-center">
            <div class="block-27">
              <ul>
                <li class="active"><span>1</span></li>
              </ul>
            </div>
          </div>
        </div>
			</div>
		</section>
)
}

export default Portfolio;