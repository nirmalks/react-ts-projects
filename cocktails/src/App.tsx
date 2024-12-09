import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </>
  );
};

export default App;
