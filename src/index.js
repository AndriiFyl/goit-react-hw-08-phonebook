import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import './index.css';
import 'normalize.css'; 
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* PersistGate - кожного разу перевіряє localStorage та заповнює цими даними наш state  - і тільки після цього пендериться наш App*/}
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook/" >
          {/* під час рендеру (рефрешу) App буде відбуватися запит на користувача */}
        <App />
    </BrowserRouter>
      </PersistGate>
       </Provider>
   </React.StrictMode>
);


   
      
      
       