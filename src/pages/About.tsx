import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export default function About() {
  return (
    <>
      <Header></Header>
      <div className="bg-white shadow-md rounded-lg p-6  mx-auto mt-8">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-4">
          Welcome to our platform, where we explore the finest cocktails from
          around the world. Our mission is to bring you curated recipes,
          histories, and insights into your favorite drinks. Whether you're a
          professional bartender or just love to mix at home, you'll find
          something here to spark your creativity.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto">
          From classic concoctions to modern mixes, we celebrate the artistry of
          mixology. Join us on this flavorful journey, and let's raise a toast
          to great drinks and even greater moments!
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}
