import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

export default function CartModal() {
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Are you sure you want to remove all items?
      </p>
      <div className="flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Yes
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
