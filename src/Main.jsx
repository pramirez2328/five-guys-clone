import * as ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Order from './pages/Order';
import Locations from './pages/Locations';
import Menu from './pages/Menu';
import AddIngredients from './pages/AddIngredients';
import Checkout from './pages/Checkout';
import { store } from './store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import './common.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/locations',
    element: <Locations />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/order/:id',
    element: <AddIngredients />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
