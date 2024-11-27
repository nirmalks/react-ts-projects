import { useEffect, useState } from 'react';
import './App.css';
import ToursList from './ToursList';
import { tours as ToursData } from './ToursData';
import { reviews as ReviewsData } from './ReviewsData';
import TourType from './TourType';
import ReviewsList from './ReviewsList';
import ReviewType from './ReviewType';
import { questions as QuestionsData } from './QuestionsData';
import { QuestionsType } from './QuestionsType';
import Question from './Question';
function App() {
  const [tours, setTours] = useState<TourType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [questions, setQuestions] = useState<QuestionsType[]>([]);

  const fetchTours = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setTours(ToursData);
      setIsLoading(false);
    }, 3000);
  };

  const fetchReviews = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setReviews(ReviewsData);
      setIsLoading(false);
    }, 3000);
  };

  const fetchQuestions = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setQuestions(QuestionsData);
      setIsLoading(false);
    }, 3000);
  };

  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
    fetchReviews();
    fetchQuestions();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  if (tours.length === 0) {
    console.log(tours);
    return (
      <main>
        <div>
          <h2>No tours left</h2>
          <button onClick={() => fetchTours()}>Refresh</button>
        </div>
      </main>
    );
  }
  console.log(tours);
  return (
    <>
      <div>
        <ToursList tours={tours} removeTour={removeTour}></ToursList>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <ReviewsList reviews={reviews}></ReviewsList>
            <section className="info">
              {questions.map((question) => {
                return <Question key={question.id} {...question}></Question>;
              })}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
