import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED
} from '../constants/actionTypes';

// Модель данных для таблицы Orders
class Order {
  constructor(id, userId, price, rating) {
    this.id = id;
    this.userId = userId;
    this.price = price;
    this.rating = rating;
    this.services = [];
  }
}

// Модель данных для таблицы OrdersServ
class OrderService {
  constructor(orderId, serviceId) {
    this.orderId = orderId;
    this.serviceId = serviceId;
    this.comment = ''; // Добавлено поле comment
  }
}

// Модель данных для таблицы Services
class Service {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const EditProfileSettings = () => {
  return (
    <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
      <i className="ion-gear-a"></i> Edit Profile Settings
    </Link>
  );
};

const Profile = (props) => {
  const [orders, setOrders] = useState([]);
  const [orderCounter, setOrderCounter] = useState(1);
  const [showCommentInput, setShowCommentInput] = useState({});

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const [ordersData, orderServicesData, servicesData] = await Promise.all([
          getOrders(),
          getOrderServices(),
          getServices()
        ]);

        const orderMap = new Map();

        ordersData.forEach((order) => {
          const { id, userId, price, review } = order;
          const newOrder = new Order(id, userId, price, review);
          orderMap.set(id, newOrder);
        });

        orderServicesData.forEach((orderService) => {
          const { OrderId, ServiceId } = orderService;
          const order = orderMap.get(OrderId);
          if (order) {
            order.services.push(new OrderService(OrderId, ServiceId));
          }
        });

        servicesData.forEach((service) => {
          const { id, name } = service;
          orderMap.forEach((order) => {
            order.services.forEach((orderService) => {
              if (orderService.serviceId === id) {
                orderService.name = name;
                orderService.rating = order.rating;
              }
            });
          });
        });

        const ordersArray = Array.from(orderMap.values());
        setOrders(ordersArray);
        setOrderCounter(1);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();

    return () => {
      props.onUnload();
    };
  }, []);

  const getOrders = async () => {
    const orders = await agent.Services.getOrders(window.localStorage.getItem('jwt'));
    return orders;
  };

  const getOrderServices = async () => {
    const orderServices = await agent.Services.byAuthor();
    return orderServices;
  };

  const getServices = async () => {
    const services = await agent.Services.allServices();
    return services;
  };

  const { currentUser } = props;

  const handleRatingChange = (order, rating) => {
    order.rating = rating;
    agent.Services.changeRating(order.id, order);
    setOrders([...orders]);
  };

  const handleCommentChange = (orderService, comment) => {
    // orderService.comment = comment;
    // setShowCommentInput({ ...showCommentInput, [orderService.serviceId]: false });
    // setOrders([...orders]);
    /*console.log(window.localStorage.getItem('jwt'));
    console.log(orderService.serviceId);
    console.log(comment);*/
    agent.Comments.create(window.localStorage.getItem('jwt'), orderService.serviceId, comment);
  };

  const CommentInput = ({ orderService }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
      handleCommentChange(orderService, comment);
      setShowCommentInput({ ...showCommentInput, [orderService.serviceId]: false });
    };

    return (
      <div>
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Отправить</button>
      </div>
    );
  };

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img src={currentUser.image} className="user-img" alt={currentUser.username} />
              <h4>{currentUser.username}</h4>
              <EditProfileSettings />
            </div>
          </div>
        </div>
      </div>
      <div className="user-info">
        <h4>Ваши заказы:</h4>
        <ul>
          {orders.map((order, index) => {
            return (
              <li key={order.id}>
                Номер заказа: {index + 1}<br />
                Список услуг: <br />
                {order.services.map((orderService) => (
                  <div key={orderService.serviceId}>
                    - {orderService.name}
                    <br />
                    {(
                      <div>
                        {!showCommentInput[orderService.serviceId] && (
                          <button
                            onClick={() =>
                              setShowCommentInput({
                                ...showCommentInput,
                                [orderService.serviceId]: true
                              })
                            }
                          >
                            Добавить комментарий
                          </button>
                        )}
                        {showCommentInput[orderService.serviceId] && (
                          <CommentInput orderService={orderService} />
                        )}
                      </div>
                    )}
                    <br />
                  </div>
                ))}
                Цена: {order.price}<br />
                <span>Оценка: </span>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <span
                    key={rating}
                    onClick={() => handleRatingChange(order, rating)}
                    style={{ color: rating <= order.rating ? 'yellow' : 'gray', cursor: 'pointer' }}
                  >
                    <h1>★</h1>
                  </span>
                ))}
                <br /><br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.common.currentUser,
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: PROFILE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: PROFILE_PAGE_UNLOADED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export { Profile, mapStateToProps };
