import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers';
const initialState = {
  user: {
    name: "Facundo Leonel Gimenez",
    userName: "FacundoLG",
    userID: "FLG_25_45ñ"
  },
  toDos:[
    {
      Name:"Controlar Tablero",
      Ubicacion: "Av. SantoManto 123",
      Tipo:"Verificacion",
      status: "ToDo",
      id:"2342sdf"
    },
    {
      Name:"Reparar Poste",
      Ubicacion: "Lomas del Poroto 451",
      Tipo:"Reparacion",
      status: "ToDo",
      id:"2134562sdf"

    },
    {
      Name:"Cambiar Sensor",
      Ubicacion: "Av. pilin 123",
      Tipo:"Mantenimiento",
      status: "ToDo",
      id:"2fd42sdf"

    },
    {
      Name:"Cambiar Sensor",
      Ubicacion: "Av. pololon 123",
      Tipo:"Mantenimiento",
      status: "ToDo",
      id:"2fd12342sdf"

    }
  ],
  inProgres: [],
  isCompleted: []
}

const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

