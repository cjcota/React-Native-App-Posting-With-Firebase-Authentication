import { AppRegistry } from "react-native";
import App from "./src/app";
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/exampleReducer';

const store = createStore(reducer);

const AppContainer = () =>
  <Provider store={store}>
    <App/>
  </Provider>

AppRegistry.registerComponent("Applause", () => AppContainer);
