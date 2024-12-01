import { FaPlus, FaMinus } from 'react-icons/fa';
import { useAppContext } from './AppContext';

export default function CartItem({
  id,
  imageUrl,
  name,
  price,
  quantity,
}: {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
}) {
  const { increaseQuantity, decreaseQuantity, deleteItem } = useAppContext();
  return (
    <div className="flex flex-row gap-10 mb-6  pb-4 r">
      <img src={imageUrl} alt={name} className="h-16 w-16 rounded-md" />

      <div className="flex flex-col flex-1 text-left">
        <p className=" text-lg">{name}</p>
        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
        <div className="flex gap-3 mt-2">
          <button
            className="hover:text-green-700"
            onClick={() => increaseQuantity(id)}
          >
            <FaPlus size={20} />
          </button>
          <button
            className="hover:text-red-700"
            onClick={() => decreaseQuantity(id)}
          >
            <FaMinus size={20} />
          </button>
          <button
            className="text-gray-600 hover:text-red-700"
            onClick={() => deleteItem(id)}
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
