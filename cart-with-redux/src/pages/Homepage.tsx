import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import CartContainer from '../components/CartContainer';

function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}

export default HomePage;
