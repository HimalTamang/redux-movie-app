import React from "react";
import "./index.css";
import App from "./App";

import store from "./ReducerFeatute/Store/Store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux/es/exports";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
