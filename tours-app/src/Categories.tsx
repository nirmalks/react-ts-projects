export const Categories = ({
  categories,
  filterTours,
}: {
  categories: string[];
  filterTours: (category: string) => void;
}): JSX.Element => {
  return (
    <div className="container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="mt-4 text-white bg-pink-700 p-2 ml-4 rounded hover:bg-pink-800 "
            key={index}
            onClick={() => filterTours(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
