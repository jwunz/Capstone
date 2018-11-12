import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import SearchWidget from './SearchWidget.jsx';
import SignInWidget from './SignInWidget.jsx';
import HomePage from './HomePage.jsx';
import SearchPage from './SearchPage.jsx';
import UserPage from './UserPage.jsx';
import ChatPage from './ChatPage.jsx';
import SignUpPage from './SignUpPage.jsx';
import ClubPage from './ClubPage.jsx';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="appContainer">
            <header>
              <div className="appHeader">
                <div className="leftHeaderContainer">
                  <Link to='/'><img className="logo" src="/logo.png" alt=""></img></Link>
                  <SearchWidget />
                </div>
                <SignInWidget />
              </div>
            </header>
            <div className="bodyContent">
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/search' component={SearchPage} />
                <Route path='/user' component={UserPage} />
                <Route path='/chat' component={ChatPage} />
                <Route path='/club' component={ClubPage} />
                <Route path='/new-user' component={SignUpPage} />
              </Switch>
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}


export default App;
