import { Link } from 'react-router';

export const Cocktail = ({ drink }: any) => {
  return (
    <div className="flex flex-col p-4 gap-8" key={drink.idDrink}>
      <div className="bg-slate-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform">
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          className="rounded-lg"
        />
        <div className="p-4">
          <h4 className="text-2xl font-bold mt-2 uppercase">
            {drink.strDrink}
          </h4>
          <h5 className="font-bold mt-2">{drink.strGlass}</h5>
          <p className="text-gray-500 mt-2">{drink.strAlcoholic}</p>
          <Link
            to={`/cocktails/${drink.idDrink}`}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition mt-2 inline-block"
          >
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};
