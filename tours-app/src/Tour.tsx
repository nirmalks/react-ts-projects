import { useState } from 'react';

interface TourProps {
  tour: {
    id: number;
    title: string;
    description: string;
    price: number;
  };
  removeTour: (id: number) => void;
}

export default function Tour({ tour, removeTour }: TourProps) {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <section>
        <h3 className="text-xl font-bold text-gray-800">{tour.title}</h3>
        <h4 className="text-xl font-bold text-gray-500 ">${tour.price}</h4>
        <p>
          {readMore
            ? tour.description
            : `${tour.description.substring(0, 200)}...`}
          <button
            className="text-blue-500 hover:underline ml-2"
            onClick={handleReadMore}
          >
            {readMore ? 'Show Less' : '  Read More'}
          </button>
        </p>
        <button
          className="mt-4 bg-slate-600 text-white hover:bg-slate-700 p-3 rounded-md transition"
          onClick={() => removeTour(tour.id)}
        >
          Not Interested
        </button>
      </section>
    </div>
  );
}
