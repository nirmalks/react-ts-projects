import { useEffect, useState } from 'react';
import './App.css';
import ToursList from './ToursList';
import { tours as ToursData } from './ToursData';
import TourType from './TourType';
function App() {
  const [tours, setTours] = useState<TourType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setTours(ToursData);
      setIsLoading(false);
    }, 3000);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
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
      </div>
    </>
  );
}

export default App;
