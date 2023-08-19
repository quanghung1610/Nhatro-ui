import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from "react-router-dom";
import reduxStore from './redux';


const { persistor } = reduxStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
              <App />
        </PersistGate>
    </BrowserRouter>
);

