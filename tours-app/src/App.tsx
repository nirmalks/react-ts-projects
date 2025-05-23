import { createContext, useEffect, useState } from 'react';
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

const allCategories = [
  'all',
  ...new Set(ToursData.map((tour) => tour.category)),
];

interface AppContextType {
  categories: string[];
  filterTours: (category: string) => void;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);
function App() {
  const [allTours, setAllTours] = useState<TourType[]>([]);
  const [tours, setTours] = useState<TourType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [questions, setQuestions] = useState<QuestionsType[]>([]);
  const [categories] = useState<string[]>(allCategories);

  const fetchTours = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setTours(ToursData);
        setAllTours(ToursData);
        resolve(); // Resolve the promise after data is set
      }, 500);
    });
  };

  const fetchReviews = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setReviews(ReviewsData);
        resolve();
      }, 500);
    });
  };

  const fetchQuestions = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setQuestions(QuestionsData);
        resolve();
      }, 500);
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
    <AppContext.Provider value={{ categories, filterTours }}>
      <div className="container mx-auto p-4">
        {tours.length === 0 ? (
          <main className="text-center mt-4">
            <div>
              <h2 className="bg-pink-400 text-3xl font-semibold text-center text-gray-800 p-4 rounded-lg shadow-md">
                No tours left
              </h2>
              <button
                className="mt-4 bg-blue-500 text-white p-4 rounded hover:bg-blue-600 transition"
                onClick={() => fetchTours()}
              >
                Refresh
              </button>
            </div>
          </main>
        ) : (
          <ToursList tours={tours} removeTour={removeTour}></ToursList>
        )}
        <section className="mt-8 container">
          <h2 className="mb-4 bg-pink-400 text-3xl font-semibold text-center text-gray-800 p-4 rounded-lg shadow-md">
            Reviews
          </h2>
          <ReviewsList reviews={reviews}></ReviewsList>
        </section>
        <section className="mt-8 container">
          <h2 className="mb-4 bg-pink-400 text-3xl font-semibold text-center text-gray-800 p-4 rounded-lg shadow-md">
            Questions
          </h2>
          {questions.map((question) => {
            return <Question key={question.id} {...question}></Question>;
          })}
        </section>
      </div>
    </AppContext.Provider>
  );
}

export default App;
