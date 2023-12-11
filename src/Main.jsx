import * as ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/locations' element={<Locations />} />
          <Route exact path='/menu' element={<Menu />} />
          <Route path='/order' element={<Order />} />
          <Route exact path='/order/:id' element={<AddIngredients />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='*' element={<NotFound />} />
        </Routes>
      </HashRouter>
    </PersistGate>
  </Provider>
);
