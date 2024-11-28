export const Categories = ({
  categories,
  filterTours,
}: {
  categories: string[];
  filterTours: (category: string) => void;
}) => {
  return (
    <div className="container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
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
