import { FormEvent, useState } from 'react';
import './App.css';
import data from './data';
import Values from 'values.js';
import Color from './Color';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar';

function HomePage() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string[]>([]);
  const [color, setColor] = useState<string>('#e91e63');
  const [colorList, setColorList] = useState(new Values('#e91e63').all(10));
  const [error, setError] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleParaSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    let amount = count;
    if (count <= 0) {
      amount = 1;
    }
    if (count > 5) {
      amount = 5;
    }
    setText(data.slice(0, amount));
  };

  const handleColorSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <main className="container mx-auto p-4">
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl p-4 text-pink-500 uppercase font-bold">
          Para generator
        </h2>
        <form onSubmit={handleParaSubmit}>
          <label htmlFor="amount" className="mr-4 text-gray-700">
            Paragraphs
          </label>
          <input
            type="number"
            value={count}
            max={5}
            className="max-w-12 border border-gray-300 rounded-md focus:border-pink-400 focus:ring-pink-500 focus:outline-none focus:ring-2"
            onChange={(e) =>
              setCount(e.target.value === '' ? 0 : Number(e.target.value))
            }
          />
          <button className="rounded-lg bg-pink-400 ml-4 p-2 shadow-lg hover:bg-pink-500 transition-all duration-300">
            Submit
          </button>
        </form>
        {isSubmitted ? (
          <article className="rounded-lg bg-slate-50 mt-4 p-8 shadow-xl hover:shadow-2xl hover:bg-slate-100  text-gray-700">
            {text.map((item, index) => {
              return (
                <p className="p-2" key={index}>
                  {item}
                </p>
              );
            })}
          </article>
        ) : (
          ''
        )}
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl p-4 text-pink-500 mb-4 uppercase font-bold">
          Color generator
        </h2>
        <form onSubmit={handleColorSubmit}>
          <input
            type="color"
            className="mr-2"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color}
            className="p-2 border border-gray-300 rounded-md focus:border-pink-400 focus:ring-pink-500 focus:outline-none focus:ring-2"
            onChange={(e) => setColor(e.target.value)}
            placeholder="#e91e63"
          />
          <button className="rounded-lg bg-pink-400 ml-4 p-2 shadow-lg hover:bg-pink-500 transition-all duration-300">
            Submit
          </button>
        </form>
        <section className="grid grid-cols-4 gap-4 mt-4">
          {colorList.map((color, index) => {
            return (
              <Color
                key={index}
                index={index}
                hexString={color.hex}
                {...color}
              />
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default HomePage;
