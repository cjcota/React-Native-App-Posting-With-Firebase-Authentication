import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
//import Example from './Example';
import NavigatorPage from './src/screens/NavigatorPage';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB22tERMvlr4XrpCW0yCmgYYgFVc44jBOE",
  authDomain: "applause-2314a.firebaseapp.com",
  databaseURL: "https://applause-2314a.firebaseio.com",
  storageBucket: "applause-2314a.appspot.com",
}
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigatorPage />
      </Provider>
    );
  }
}
