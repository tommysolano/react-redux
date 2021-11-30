import React from 'react';
import ReactDOM from 'react-dom';
import App, { reducer } from './App';
import { Provider } from "react-redux"
import { createStore } from "redux"


const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

