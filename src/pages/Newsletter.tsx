import { toast, ToastContainer } from 'react-toastify';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
export const Newsletter = () => {
  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value.trim();
    if (!email) {
      showErrorMessage('Email cannot be empty.');
      return;
    }
    if (!validateEmail(email)) {
      showErrorMessage('Please enter a valid email address.');
      return;
    }
    if (email) {
      showSuccessMessage();
    }
  };

  const showSuccessMessage = () =>
    toast.success('Subscription Successful!', {
      position: 'top-center',
    });
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    return emailRegex.test(email);
  };
  const showErrorMessage = (message: string) =>
    toast.error(message, {
      position: 'top-center',
    });

  return (
    <>
      <Header></Header>
      <ToastContainer />
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Stay updated with the latest cocktail recipes, tips, and stories. Sign
          up now and never miss a drop!
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};
