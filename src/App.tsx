import * as React from "react";
import { Provider } from "react-redux";

import Header from './layouts/Header';
import store from "./store";
import Home from "./pages/Home";
export default class App extends React.Component {
  handleSelect() {

  }
  render() {
    return (
    <Provider store={store}>
      <Header></Header>
    </Provider>)
  }
}