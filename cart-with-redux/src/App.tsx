import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import HomePage from './pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
  },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
