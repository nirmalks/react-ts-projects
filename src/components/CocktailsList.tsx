import { useState, useEffect } from 'react';
import { useAppContext } from '../UseAppContext';
import { Cocktail } from './Cocktail';
import Loading from './Loading';

export const CocktailsList = () => {
  const { cocktails, loading, isSearched } = useAppContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1 || !Array.isArray(cocktails)) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">
          {isSearched
            ? 'No cocktails were found. Please re-enter a valid search term.'
            : 'Enter a cocktail to fetch its varieties'}
        </h2>
      </div>
    );
  }
  return (
    <div className="container grid  grid-cols-3">
      {cocktails.map((drink) => (
        <Cocktail key={drink.idDrink} drink={drink}></Cocktail>
      ))}
    </div>
  );
};
