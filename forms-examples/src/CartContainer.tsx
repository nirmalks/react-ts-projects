import { useAppContext } from './AppContext';
import Cart from './CartItem';
import Navbar from './Navbar';

export default function CartContainer() {
  const { cart, total, clearCart } = useAppContext();
  return (
    <main className="container mx-auto p-4">
      <Navbar></Navbar>
      <section className="container">
        <header>
          <h2 className="text-2xl p-4 text-pink-500 mb-4 uppercase font-bold">
            Shopping Cart
          </h2>
        </header>
        <div className="mt-12 flex flex-col container mx-auto max-w-4xl">
          {cart.map((item) => {
            return <Cart key={item.id} {...item} />;
          })}
        </div>
        <hr />
        <footer className=" p-4  flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center gap-2">
            <h4 className="text-xl font-semibold ">
              <span>Total:</span>
              <span className="text-2xl font-bold text-gray-800 text-right">
                ${total}
              </span>
            </h4>
          </div>
          <button
            className="rounded-lg bg-pink-400 ml-4 p-2 shadow-lg hover:bg-pink-500 transition-all duration-300"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </footer>
      </section>
    </main>
  );
}
