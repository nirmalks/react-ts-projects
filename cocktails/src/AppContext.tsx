import axios from 'axios';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string | null;
  strIBA: string | null;
  strAlcoholic: string | null;
  strGlass: string | null;
  strInstructions: string | null;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string | null;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strDrinkThumb: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  [key: `strIngredient${number}`]: string | null;
}

export interface CocktailSingleResponse extends Cocktail {
  strIngredients: string[];
}
export type AppState = {
  loading: boolean;
  cocktails: Cocktail[];
  searchTerm: string;
  error: boolean;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  isSearched: boolean;
};
export type AppContextProps = {
  children: ReactNode;
};
const AppContext = createContext<AppState | undefined>(undefined);
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }: AppContextProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('M');
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setIsError] = useState<boolean>(false);
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const fetchCocktails = async () => {
    try {
      if (searchTerm === '') {
        return [];
      }
      setIsLoading(true);
      setIsSearched(true);
      const response = await axios.get<{ drinks: Cocktail[] | null }>(
        `${url}${searchTerm}`
      );
      const { drinks } = response.data;
      console.log(drinks);
      setCocktails(drinks || []);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        searchTerm,
        error,
        setSearchTerm,
        isSearched,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
