import * as ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Order from './pages/Order';
import Locations from './pages/Locations';
import Menu from './pages/Menu';
import AddIngredients from './pages/AddIngredients';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound'; // Import the NotFound component
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
    path: '/four-guys',
    element: <Home />,
  },
  {
    path: '/four-guys/locations',
    element: <Locations />,
  },
  {
    path: '/four-guys/menu',
    element: <Menu />,
  },
  {
    path: '/four-guys/orders',
    element: <Order />,
  },
  {
    path: '/four-guys/orders/:id',
    element: <AddIngredients />,
  },
  {
    path: '/four-guys/checkout',
    element: <Checkout />,
  },
  {
    path: '*',
    element: <NotFound />,
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
