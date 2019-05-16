import React from 'react';
import configureStore from './src/Store'
import { Provider } from 'react-redux'
// import store from './src/Store'
import AppContainer from './src/Components/PageManagement'
const { store } = configureStore();

// import AppContainer from 

export default class App extends React.Component {
  render() {
    return (
      <Provider store = { store}>
        <AppContainer />
      </Provider>
    );
  }
}

