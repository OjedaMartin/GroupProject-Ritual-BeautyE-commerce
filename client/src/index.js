import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const domain="dev-8r0m7oi3.us.auth0.com"
const client="bPhN1fH05XewadH1kQWEM4bJmY8T0mv9"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
  <Auth0Provider
domain={domain} clientId={client} redirectUri= {window.location.origin}
>
        <App />
  </Auth0Provider>
  </React.StrictMode>
    </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
