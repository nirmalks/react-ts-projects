import { useState } from 'react';
import ReviewType from './ReviewType';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
interface ReviewsProps {
  reviews: ReviewType[];
}

export default function ReviewsList({ reviews }: ReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }
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
    <section className="text-center max-w-xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h3>
      <img src={image} className="w-24 h-24 rounded-full mx-auto  mb-4" />
      <div className="text-center mb-4">
        <span className="text-yellow-600 text-lg">{rating} stars</span>
      </div>
      <p className="text-gray-700 mb-6">{comment}</p>
      <div className="flex justify-center items-center mb-4">
        <button
          className="prev-btn bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
          onClick={prevReview}
        >
          <FaChevronLeft />
        </button>
        <button
          className="ml-2 bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"
          onClick={nextReview}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="bg-pink-500 p-3 rounded-lg text-white hover:bg-pink-600"
        onClick={randomReview}
      >
        Random Review!
      </button>
    </section>
  );
}
