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
import { Categories } from './Categories';

const allCategories = [
  'all',
  ...new Set(ToursData.map((tour) => tour.category)),
];
function App() {
  const [allTours, setAllTours] = useState<TourType[]>([]);
  const [tours, setTours] = useState<TourType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
  const [categories, setCategories] = useState<string[]>(allCategories);
  const fetchTours = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setTours(ToursData);
        setAllTours(ToursData);
        resolve(); // Resolve the promise after data is set
      }, 2000);
    });
  };

  const fetchReviews = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setReviews(ReviewsData);
        resolve();
      }, 3000);
    });
  };

  const fetchQuestions = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setQuestions(QuestionsData);
        resolve();
      }, 3000);
    });
  };
  const removeTour = (id: number) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await Promise.all([fetchTours(), fetchReviews(), fetchQuestions()]);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  const filterTours = (category: string) => {
    if (category === 'all') {
      setTours(allTours);
      return;
    }
    const filteredTours = allTours.filter(
      (filter) => filter.category === category
    );
    setTours(filteredTours);
  };
  return (
    <>
      <div>
        <Categories
          categories={categories}
          filterTours={filterTours}
        ></Categories>
        {tours.length === 0 ? (
          <main>
            <div>
              <h2>No tours left</h2>
              <button onClick={() => fetchTours()}>Refresh</button>
            </div>
          </main>
        ) : (
          <ToursList tours={tours} removeTour={removeTour}></ToursList>
        )}
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
