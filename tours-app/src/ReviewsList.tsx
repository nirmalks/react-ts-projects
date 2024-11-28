import { useState } from 'react';
import ReviewType from './ReviewType';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
interface ReviewsProps {
  reviews: ReviewType[];
}

export default function ReviewsList({ reviews }: ReviewsProps) {
  console.log(reviews);

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, rating, comment, image } = reviews[currentIndex];
  const [size, setSize] = useState(reviews.length);

  const handleNumberChange = (number: number) => {
    if (number > size - 1) {
      return 0;
    }

    if (number < 0) {
      return size - 1;
    }
    return number;
  };

  const nextReview = () => {
    setCurrentIndex((index) => {
      return handleNumberChange(index + 1);
    });
  };

  const prevReview = () => {
    setCurrentIndex((index) => {
      return handleNumberChange(index - 1);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * size);
    if (randomNumber === currentIndex) {
      randomNumber = currentIndex + 1;
    }
    setCurrentIndex(handleNumberChange(randomNumber));
  };

  return (
    <section>
      <h3>{name}</h3>
      <img src={image} />
      <span>{rating}</span>
      <p>{comment}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </section>
  );
}
