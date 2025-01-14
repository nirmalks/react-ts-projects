import { IoBagCheckOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { useAppSelector } from '../hooks';

export default function Navbar() {
  const { quantity } = useAppSelector((state) => state.cart);

  useEffect(() => {});
  return (
    <div className="bg-slate-200 shadow">
      <nav className=" container mx-auto h-20 flex justify-between items-center px-6">
        <div className="flex items-center text-gray-700 text-lg font-semibold">
          <Link
            to="/"
            className="relative flex items-center text-gray-700 hover:text-gray-900"
          >
            Shopping Cart
          </Link>
        </div>
        <div className="flex items-center gap-2 relative">
          <IoBagCheckOutline size={50} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {quantity}
          </span>
        </div>
      </nav>
    </div>
  );
}
