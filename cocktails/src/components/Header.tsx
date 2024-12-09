import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <>
      <header className="bg-indigo-600 text-white shadow-lg rounded-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Cocktail Den
          </a>

          <nav className="flex space-x-6">
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
      </header>
      <div className="bg-red-500 text-white text-center py-2 shadow-lg rounded-md">
        <p>⚠️ Drinking is injurious to health. Please drink responsibly!</p>
      </div>
    </>
  );
};
