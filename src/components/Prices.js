/*import React from 'react';

const Prices = props => {

return(		
	
	<section class="ftco-section bg-light">
    	<div class="container">
    		<div class="row justify-content-center pb-5 mb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
          	<span class="subheading mb-3">Цена &amp; Плата</span>
            <h2>ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТАРИФ</h2>
          </div>
        </div>
    		<div class="row">
    			<div class="col-md-6 col-lg-3 ftco-animate">
	          <div class="block-7">
	            <div class="text-center">
	            	<div class="icon d-flex align-items-center justify-content-center"><span class="fa flaticon-sprayer"></span></div>
	            	<h4 class="heading-2">Стартовый</h4>
		            <span class="price"><sup>$</sup> <span class="number">49</span></span>
		            
		            <ul class="pricing-text mb-5">
		              <li><span class="fa fa-check mr-2"></span>Протираем все доступные поверхности</li>
		              <li><span class="fa fa-check mr-2"></span>Пылесосим</li>
		              <li><span class="fa fa-check mr-2"></span>Моем пол специальными средствами</li>
		             
		            </ul>

		            <a href="#" class="btn btn-primary px-4 py-3">Выбрать</a>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-6 col-lg-3 ftco-animate">
	          <div class="block-7 active">
	            <div class="text-center">
	            <div class="icon d-flex align-items-center justify-content-center"><span class="fa flaticon-vacuum-cleaner"></span></div>
            	<h4 class="heading-2">Стандарт</h4>
	            <span class="price"><sup>$</sup> <span class="number">79</span></span>
	            
	            <ul class="pricing-text mb-5">
		              <li><span class="fa fa-check mr-2"></span>Вывозим мусор</li>
		              <li><span class="fa fa-check mr-2"></span>Моем окна и витражи</li>
		              <li><span class="fa fa-check mr-2"></span>Протираем все доступные поверхности</li>
		              <li><span class="fa fa-check mr-2"></span>Убираем строительным пылесосом</li>
		              <li><span class="fa fa-check mr-2"></span>Моем пол специальными средствами</li>
		            </ul>

	            <a href="#" class="btn btn-primary px-4 py-3">Выбрать</a>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-6 col-lg-3 ftco-animate">
	          <div class="block-7">
	            <div class="text-center">
	            	<div class="icon d-flex align-items-center justify-content-center"><span class="fa flaticon-tap"></span></div>
            	<h4 class="heading-2">Премиум</h4>
	            <span class="price"><sup>$</sup> <span class="number">109</span></span>
	            
	            <ul class="pricing-text mb-5">
		              <li><span class="fa fa-check mr-2"></span>Вывозим мусор</li>
		              <li><span class="fa fa-check mr-2"></span>Моем окна и витражи</li>
		              <li><span class="fa fa-check mr-2"></span>Убираем строительным пылесосом</li>
		              <li><span class="fa fa-check mr-2"></span>Удаляем наклейки с окон и дверей</li>
		              <li><span class="fa fa-check mr-2"></span>Моем пол специальными средствами</li>
					  <li><span class="fa fa-check mr-2"></span>Протираем все доступные поверхности</li>
		            </ul>

	            <a href="#" class="btn btn-primary px-4 py-3">Выбрать</a>
	            </div>
	          </div>
	        </div>
	        <div class="col-md-6 col-lg-3 ftco-animate">
	          <div class="block-7">
	            <div class="text-center">
	            	<div class="icon d-flex align-items-center justify-content-center"><span class="fa flaticon-cleaning"></span></div>
            	<h4 class="heading-2">Платинум</h4>
	            <span class="price"><sup>$</sup> <span class="number">159</span></span>
	            
	            <ul class="pricing-text mb-5">
		              <li><span class="fa fa-check mr-2"></span>Вывозим мусор</li>
		              <li><span class="fa fa-check mr-2"></span>Моем окна и витражи</li>
		              <li><span class="fa fa-check mr-2"></span>Убираем строительным пылесосом</li>
		              <li><span class="fa fa-check mr-2"></span>Удаляем наклейки с окон и дверей</li>
		              <li><span class="fa fa-check mr-2"></span>Моем пол специальными средствами</li>
					  <li><span class="fa fa-check mr-2"></span>Протираем все доступные поверхности</li>
					  <li><span class="fa fa-check mr-2"></span>Мойка изделия с использованием специализированных моющих средств</li>
		            </ul>

	            <a href="#" class="btn btn-primary px-4 py-3">Выборать</a>
	            </div>
	          </div>
	        </div>
	      </div>
    	</div>
    </section>

)
}

export default Prices;*/
import React, { useState, useEffect } from 'react';
import agent from '../agent';

const ServiceTable = () => {
  const [services, setServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedServices, setSelectedServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await agent.Services.all();
      const servicesWithQuantity = response.map((service) => ({
        ...service,
        quantity: 0
      }));
      setServices(servicesWithQuantity);
    } catch (error) {
      console.error(error);
    }
  };

  const handleServiceSelect = (service) => {
    if (selectedServices.some((selectedService) => selectedService.id === service.id)) {
      // Если услуга уже выбрана, изменяем только количество
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.map((selectedService) =>
          selectedService.id === service.id ? { ...selectedService, quantity: selectedService.quantity + service.quantity } : selectedService
        )
      );
    } else {
      // Если услуга еще не выбрана, добавляем ее в список выбранных услуг
      if(service.quantity!==0){
      setSelectedServices((prevSelectedServices) => [...prevSelectedServices, { ...service }]);
      }
    };

    setServices((prevSelectedServices) =>
      prevSelectedServices.map((selectedService) =>
        selectedService.id === service.id ? { ...selectedService, quantity:0 } : selectedService
      )
    );
  };

  const handleServiceDeselect = (service) => {
    setSelectedServices((prevSelectedServices) =>
      prevSelectedServices.filter((selectedService) => selectedService.id !== service.id)
    );
  };

  const handleQuantityChange = (serviceId, quantity) => {
    setServices((prevSelectedServices) =>
      prevSelectedServices.map((selectedService) =>
        selectedService.id === serviceId ? { ...selectedService, quantity } : selectedService
      )
    );
  };

  useEffect(() => {
    calculateTotalPrice(selectedServices);
  }, [selectedServices]);

  const calculateTotalPrice = (selectedServices) => {
    let total = 0;
    selectedServices.forEach((service) => {
      total += service.price * service.quantity;
    });
    setTotalPrice(total);
  };

  const handleSubmitOrder = async () => {
    try {
      if (window.localStorage.getItem('jwt')) {
        const services = selectedServices;
        if(services.length>0){
        const response = await agent.Services.add(window.localStorage.getItem('jwt'), services); // Замените на ваш эндпоинт для добавления заказа
        setSelectedServices([]);
        }
        // Дополнительные действия после успешной отправки заказа
      } else {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Услуга</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Выбрать</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>
                <input
                  type="number"
                  min = "0"
                  value={service.quantity || 0}
                  onChange={(e) => handleQuantityChange(service.id, parseInt(e.target.value))}
                />
              </td>
              <td>
                <button onClick={() => handleServiceSelect(service)}>Добавить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h4>Выбранные услуги:</h4>
        <ul>
          {selectedServices.map((service) => (
            <li key={service.id}>
              {service.name} (Цена: {service.price}, Количество: {service.quantity})
              {/* Здесь можно отображать комментарии для каждой услуги */}
              <button onClick={() => handleServiceDeselect(service)}>Убрать</button>
            </li>
          ))}
        </ul>
        <p>Итоговая цена: {totalPrice}</p>
        <button onClick={handleSubmitOrder}>Оплатить</button>
      </div>
    </div>
  );
};

export default ServiceTable;
