import MainContainer from "./navigation/MainContainer";
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
