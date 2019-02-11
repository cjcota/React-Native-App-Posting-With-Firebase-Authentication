import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
//import Example from './Example';
import NavigatorPage from './src/screens/NavigatorPage';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorPage />
      </Provider>
    );
  }
}
