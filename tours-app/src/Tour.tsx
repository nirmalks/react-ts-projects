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
    <div>
      <section>
        <h3>{tour.title}</h3>
        <h4>{tour.price}</h4>
        <p>
          {readMore
            ? tour.description
            : `${tour.description.substring(0, 200)}...`}
          <button onClick={handleReadMore}>
            {readMore ? 'Show Less' : '  Read More'}
          </button>
        </p>
        <button onClick={() => removeTour(tour.id)}>Not Interested</button>
      </section>
    </div>
  );
}
