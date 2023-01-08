import React from "react";
import ReactDOM from "react-dom/client";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import { productsApiSlice } from "./app/slice/productsApiSlice";
import { PersistGate } from "redux-persist/integration/react";
import { reviewApiSlice } from "./app/slice/reviewApiSlice";
import { ordersApiSlice } from "./app/slice/ordersApiSlice";

store.dispatch(productsApiSlice.endpoints.getProducts.initiate());
store.dispatch(reviewApiSlice.endpoints.getReview.initiate());
store.dispatch(ordersApiSlice.endpoints.getOrders.initiate());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={"loading.."} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
