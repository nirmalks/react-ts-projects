import { IoBagCheckOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { useAppContext } from './AppContext';

export default function Navbar() {
  const { quantity } = useAppContext();
  return (
    <div className="bg-slate-200 shadow">
      <nav className=" container mx-auto h-20 flex justify-between items-center px-6">
        <h1 className="text-xl font-bold ">Form Related Examples</h1>
        <div className="flex items-center gap-6 relative">
          <Link
            to="/"
            className="relative flex items-center text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center text-gray-700 hover:text-gray-900"
          >
            Cart
          </Link>
          <IoBagCheckOutline size={50} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {quantity}
          </span>
        </div>
      </nav>
    </div>
  );
}
