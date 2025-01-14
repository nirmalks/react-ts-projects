import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../components/Loading';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { CocktailSingleResponse } from '../AppContext';

export const CocktailPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setIsLoading] = useState(false);
  const [drink, setDrink] = useState<CocktailSingleResponse | null>(null);

  useEffect(() => {
    setIsLoading(true);
    async function getCocktail() {
      try {
        const response = await axios.get<{ drinks: CocktailSingleResponse[] }>(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = response.data;

        if (data.drinks) {
          const drink = data.drinks[0];
          const ingredients = [];
          for (let i = 1; i <= 15; i++) {
            const ingredient = drink[`strIngredient${i}`];
            if (ingredient) ingredients.push(ingredient);
          }
          drink.strIngredients = ingredients;
          setDrink(drink);
        } else {
          setDrink(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!drink) {
    return <h2 className="">Cocktail not found</h2>;
  } else {
    return (
      <>
        <Header></Header>
        <section className=" py-8 px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            {drink.strDrink}
          </h2>
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <img
              className="w-full max-w-md mx-auto rounded-md mb-6"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
            <div className="text-gray-700 space-y-4">
              <p>
                <span className="font-semibold">Name:</span> {drink.strDrink}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{' '}
                {drink.strCategory}
              </p>
              <p>
                <span className="font-semibold">Alcoholic/Non-Alcoholic:</span>{' '}
                {drink.strAlcoholic}
              </p>
              <p>
                <span className="font-semibold">Glass:</span> {drink.strGlass}
              </p>
              <p>
                <span className="font-semibold">Instructions:</span>{' '}
                {drink.strInstructions}
              </p>
              <p>
                <span className="font-semibold">Ingredients:</span>{' '}
                {drink.strIngredients
                  .filter((item) => item)
                  .map((item: string, index: number) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded px-2 py-1 mx-1"
                    >
                      {item}
                    </span>
                  ))}
              </p>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </>
    );
  }
  return <div>Single Cocktail</div>;
};
