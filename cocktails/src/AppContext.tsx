import axios from 'axios';
import { createContext, useCallback, useEffect, useState } from 'react';

const AppContext = createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('M');
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const fetchCocktails = async () => {
    try {
      if (searchTerm === '') {
        return [];
      }
      setIsLoading(true);
      setIsSearched(true);
      const response = await axios.get(`${url}${searchTerm}`);
      const { drinks } = response.data;
      setCocktails(drinks);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);

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
