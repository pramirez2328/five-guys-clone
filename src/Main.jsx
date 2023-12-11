import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import './common.css';

import Home from './pages/Home';
import Order from './pages/Order';
import Locations from './pages/Locations';
import Menu from './pages/Menu';
import AddIngredients from './pages/AddIngredients';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

let persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Routes>
          {/* Define your routes here using the Route component */}
          <Route path='/four-guys' element={<Home />} />
          <Route path='/four-guys/locations' element={<Locations />} />
          <Route path='/four-guys/menu' element={<Menu />} />
          <Route path='/four-guys/order' element={<Order />} />
          <Route path='/four-guys/order/:id' element={<AddIngredients />} />
          <Route path='/four-guys/checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);
