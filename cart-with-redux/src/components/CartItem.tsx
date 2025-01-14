import { FaPlus, FaMinus } from 'react-icons/fa';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../features/cart/cartSlice';
import { useAppDispatch } from '../hooks';

export type CartItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  specs: {
    screenSize: string;
    processor: string;
    ram: string;
    storage: string;
    battery: string;
  };
  imageUrl: string;
  quantity: number;
  key?: string;
};
export default function CartItem({
  id,
  imageUrl,
  name,
  price,
  quantity,
}: CartItem) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-row gap-10 mb-6  pb-4 r">
      <img src={imageUrl} alt={name} className="h-16 w-16 rounded-md" />

      <div className="flex flex-col flex-1 text-left">
        <p className=" text-lg">{name}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        <div className="flex gap-3 mt-2">
          <button
            className="hover:text-green-700"
            onClick={() => dispatch(increaseQuantity({ id }))}
          >
            <FaPlus size={20} />
          </button>
          <button
            className="hover:text-red-700"
            onClick={() => dispatch(decreaseQuantity({ id }))}
          >
            <FaMinus size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-red-700"
            onClick={() => dispatch(deleteItem({ id }))}
          >
            Remove
          </button>
        </div>
      </div>
      <div className=" text-right text-lg font-semibold ">
        ${price.toFixed(2)}
      </div>
    </div>
  );
}
