import { useContext } from 'react';
import { Categories } from './Categories';
import Tour from './Tour';
import TourType from './TourType';
import { AppContext } from './App';

export default function ToursList({
  tours,
  removeTour,
}: {
  tours: TourType[];
  removeTour: (id: number) => void;
}) {
  const { categories, filterTours } = useContext(AppContext);
  return (
    <>
      <h2 className="bg-pink-400 text-3xl font-semibold text-center text-gray-800 p-4 rounded-lg shadow-md">
        Tours
      </h2>
      <Categories
        categories={categories}
        filterTours={filterTours}
      ></Categories>
      <div className="grid  grid-cols-3 gap-8 p-4">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
        ))}
      </div>
    </>
  );
}
