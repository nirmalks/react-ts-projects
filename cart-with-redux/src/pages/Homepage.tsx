import '../App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import CartContainer from '../components/CartContainer';
import Modal from '../components/Modal';
import CartModal from '../components/CartModal';
import { closeModal } from '../features/modal/modalSlice';
import { useAppSelector } from '../hooks';

function HomePage() {
  const { isOpen } = useAppSelector((state) => state.modal);

  return (
    <main className="container mx-auto p-4">
      <Modal isOpen={isOpen} onClose={closeModal}>
        <CartModal></CartModal>
      </Modal>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <CartContainer></CartContainer>
    </main>
  );
}

export default HomePage;
