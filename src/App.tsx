import './App.css';
import BirthdayBuddy from './birthay-buddy/BirthdayBuddy';
import bdays from './birthay-buddy/bdays';

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <BirthdayBuddy birthdays={bdays}></BirthdayBuddy>
        </div>
      </div>
    </>
  );
}

export default App;
