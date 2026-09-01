import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = ({addToCart}) => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[500px] flex flex-col md:flex-row items-center justify-between gap-10 py-12">

            <div className="w-full md:w-1/2 text-center md:text-left">

              <p className="text-blue-200 font-semibold mb-3">
                Welcome to ShopEasy
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Shop Smart.
                <br />
                Shop Easy.
              </h1>

              <p className="text-lg text-blue-100 mb-8 max-w-lg mx-auto md:mx-0">
                Discover amazing products at the best prices.
                Everything you need, all in one place.
              </p>

              <Link
                to="/products"
                className="inline-block bg-white text-blue-600 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>

            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                alt="Online Shopping"
                className="w-full max-w-md h-72 sm:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Shop by Category
            </h2>

            <p className="text-gray-500 mt-2">
              Explore our popular categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">👕</div>
              <h3 className="text-lg font-semibold text-gray-800">
                Clothing
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">👟</div>
              <h3 className="text-lg font-semibold text-gray-800">
                Shoes
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-gray-800">
                Electronics
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">🎒</div>
              <h3 className="text-lg font-semibold text-gray-800">
                Bags
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Featured Products
              </h2>

              <p className="text-gray-500 mt-2">
                Check out our popular products
              </p>
            </div>

            <Link
              to="/products"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              View All →
            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}

          </div>

        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12 text-center">

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Special Offer 🎉
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              Get up to 50% off on selected products.
            </p>

            <Link
              to="/products"
              className="inline-block bg-blue-600 px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Explore Offers
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;