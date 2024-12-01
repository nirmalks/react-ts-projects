import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { createBrowserRouter, RouterProvider } from 'react-router';
import CartContainer from './CartContainer';
import HomePage from './HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
  {
    path: '/cart',
    element: <CartContainer></CartContainer>,
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
