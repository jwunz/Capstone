import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

import SearchWidget from './SearchWidget.jsx';
import SignInWidget from './SignInWidget.jsx';
import SearchPage from './SearchPage.jsx';
import ChatPage from './ChatPage.jsx';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="appContainer">
          <header>
            <div className="appHeader">
              <div className="leftHeaderContainer">
                <img className="logo" src="/logo.png" alt=""></img>
                <SearchWidget />
              </div>
              <SignInWidget />
            </div>
          </header>
          <div className="bodyContent">
            <SearchPage />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
