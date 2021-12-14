import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { asyncMiddleware } from './middlewares/async';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { reducer } from "./features/todos"


const store = createStore(reducer, applyMiddleware(asyncMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

