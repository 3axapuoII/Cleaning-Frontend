import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      setSelectedServices((prevSelectedServices) =>
        prevSelectedServices.map((selectedService) =>
          selectedService.id === service.id ? { ...selectedService, quantity: selectedService.quantity + service.quantity } : selectedService
        )
      );
    } else {
      if (service.quantity !== 0) {
        setSelectedServices((prevSelectedServices) => [...prevSelectedServices, { ...service }]);
      }
    }

    setServices((prevSelectedServices) =>
      prevSelectedServices.map((selectedService) =>
        selectedService.id === service.id ? { ...selectedService, quantity: 0 } : selectedService
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
        if (services.length > 0) {
          const response = await agent.Services.add(window.localStorage.getItem('jwt'), services);
          setSelectedServices([]);
        }
      } else {
        window.location.href = '/login';
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewComments = (serviceId) => {
    // Здесь добавьте логику для обработки нажатия кнопки "Посмотреть комментарии"
    window.location.href = `/comments/${serviceId}`;
  };

  return (
    <BrowserRouter>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Услуга</th>
              <th>Цена</th>
              <th>Количество</th>
              <th>Комментарии</th>
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
                    min="0"
                    value={service.quantity}
                    onChange={(e) => handleQuantityChange(service.id, Number(e.target.value))}
                  />
                </td>
                <td>
                  <button onClick={() => handleViewComments(service.id)}>Посмотреть комментарии</button>
                </td>
                <td>
                  <button onClick={() => handleServiceSelect(service)}>Добавить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <h3>Выбранные услуги</h3>
          <ul>
            {selectedServices.map((service) => (
              <li key={service.id}>
                {service.name} - {service.quantity}
                <button onClick={() => handleServiceDeselect(service)}>Удалить</button>
              </li>
            ))}
          </ul>
          <p>Общая стоимость: {totalPrice}</p>
          <button onClick={handleSubmitOrder}>Оформить заказ</button>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default ServiceTable;
