import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { TodoApp } from "./TodoApp";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  rootElement
);
