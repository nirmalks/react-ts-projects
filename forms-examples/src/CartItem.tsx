import { FaPlus, FaMinus } from 'react-icons/fa';
import { useAppContext } from './AppContext';

export type CartItem = {
  id: number;
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
  key?: number;
};

export default function CartItem({
  id,
  imageUrl,
  name,
  price,
  quantity,
}: CartItem) {
  const { increaseQuantity, decreaseQuantity, deleteItem } = useAppContext();
  const parsedId = Number(id);
  return (
    <div className="flex flex-row gap-10 mb-6  pb-4 r">
      <img src={imageUrl} alt={name} className="h-16 w-16 rounded-md" />

      <div className="flex flex-col flex-1 text-left">
        <p className=" text-lg">{name}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        <div className="flex gap-3 mt-2">
          <button
            className="hover:text-green-700"
            onClick={() => increaseQuantity(parsedId)}
          >
            <FaPlus size={20} />
          </button>
          <button
            className="hover:text-red-700"
            onClick={() => decreaseQuantity(parsedId)}
          >
            <FaMinus size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-red-700"
            onClick={() => deleteItem(parsedId)}
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
