import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"


const store = createStore((state = 0, action) => { // es un reducer, un reducer siempre tiene que retornar un estado
  switch (action.type) {
    case "incrementar": {
      return state + 1
    }
    case "decrementar": {
      return state - 1
    }
    case "set": {
      return action.payload
    }
    default: 
      return state
  }
})


console.log(store.getState())
store.dispatch({type: "lala"})
console.log(store.getState())
store.dispatch({type: "incrementar"})
console.log(store.getState())
store.dispatch({type: "decrementar"})
console.log(store.getState())
store.dispatch({type: "set", payload: 15})
console.log(store.getState())



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// cada vez que se llame al metodo de dispatch de la funcion store se ejecutara toda la funcion 
// para pasar datos al reducer lo hacemos por medio del payload
// con el dispatch actualizamos el estado y el nuevo valor sera lo uqe pasemos por action.payload
