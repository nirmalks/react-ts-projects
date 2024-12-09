import { NavLink } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-4 rounded-md p-4 mt-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p>&copy; 2024 Cocktail Den. All rights reserved.</p>
        <nav className="flex space-x-4">
          <NavLink className="hover:underline" to="/">
            Home
          </NavLink>
          <NavLink className="hover:underline" to="/about">
            About
          </NavLink>
          <NavLink className="hover:underline" to="/newsletter">
            Newsletter
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};
