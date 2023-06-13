import React from 'react';
import { Link } from 'react-router-dom';
/*
import "./css/animate.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/magnific-popup.css";
import "./css/flaticon.css";
import "./css/style.css";
*/
const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right ml-auto">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
{/*================================================================ */}
        <li class="nav-item">
          <Link to="/about" className="nav-link">
            About
            </Link>
          </li>

          <li class="nav-item">
          <Link to="/services" className="nav-link">
            Services
            </Link>
          </li>

          <li class="nav-item">
          <Link to="/portfolio" className="nav-link">
            Our works
            </Link>
          </li>

          <li class="nav-item">
          <Link to="/prices" className="nav-link">
            Prices
            </Link>
          </li>
	         
          <li class="nav-item">
          <Link to="/contacts" className="nav-link">
            Contacts
            </Link>
          </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li class="nav-item">
          <Link to="/about" className="nav-link">
            About
            </Link>
          </li>

          <li class="nav-item">
          <Link to="/services" className="nav-link">
            Services
            </Link>
          </li>

          <li class="nav-item">
          <Link to="/portfolio" className="nav-link">
            Our works
            </Link>
          </li>

          <li class="nav-item">
          <Link to="/prices" className="nav-link">
            Prices
            </Link>
          </li>
	         
          <li class="nav-item">
          <Link to="/contacts" className="nav-link">
            Contacts
            </Link>
          </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Order
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }
  console.log(props);
  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
