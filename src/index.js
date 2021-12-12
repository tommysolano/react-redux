import React from 'react';
import ReactDOM from 'react-dom';
import App, { reducer, asyncMiddleware } from './App';
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"


const store = createStore(reducer, applyMiddleware(asyncMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

