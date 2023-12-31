import agent from '../agent';
import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
// import Article from '../components/Article';
// import Editor from '../components/Editor';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Prices from '../components/Prices';
import Contacts from '../components/Contacts';

import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
// import ProfileFavorites from '../components/ProfileFavorites';
import Register from '../components/Register';
import Comments from '../components/Comments';
import Settings from '../components/Settings';
import { store } from '../store';
import { push } from 'react-router-redux';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(token ? agent.Auth.current(token) : null, token);
    
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component = {About}/>
            <Route path="/services" component = {Services}/>
            <Route path="/portfolio" component = {Portfolio}/>
            <Route path="/prices" component = {Prices}/>
            <Route path="/contacts" component = {Contacts}/>
            <Route path="/comments/:id" render={({ match }) => <Comments serviceId={match.params.id} />} />
            <Route path="/Profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            {/* <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
             */}
            
            </Switch>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

 /*App.contextTypes = {
   router: PropTypes.object.isRequired
 };*/

export default connect(mapStateToProps, mapDispatchToProps)(App);
