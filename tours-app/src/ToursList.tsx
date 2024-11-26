import Tour from './Tour';
import TourType from './TourType';

export default function ToursList({
  tours,
  removeTour,
}: {
  tours: TourType[];
  removeTour: (id: number) => void;
}) {
  return (
    <>
      <h2 className="bg-pink-400">Tours</h2>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
        ))}
      </div>
    </>
  );
}
