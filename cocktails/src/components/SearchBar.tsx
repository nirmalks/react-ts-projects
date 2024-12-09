import { useRef, useState } from 'react';
import { useAppContext } from '../UseAppContext';

export const SearchBar: React.FC = () => {
  const { setSearchTerm } = useAppContext();
  const searchValue = useRef<HTMLInputElement>('');
  const handleSearch = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <div className="max-w-md mx-auto mt-10 ">
      <div className="flex items-center border border-gray-300 rounded-lg shadow-sm bg-white p-6 mb-4">
        <input
          type="text"
          placeholder="Search..."
          ref={searchValue}
          className="flex-1 px-4 py-2 text-gray-700 bg-transparent focus:outline-none border border-gray-300 rounded-md"
        />
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-500 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
