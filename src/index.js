/*
 * @Author: weiyayun
 * @Date: 2022-05-13 14:40:27
 * @Interface:
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function render(props) {
  const { container } = props;
  const root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  root.render(
    <React.StrictMode>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? "/slave" : "/"}>
        <App />
      </Router>
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  console.log(22222222);
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props) {
  console.log("[react16] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}
