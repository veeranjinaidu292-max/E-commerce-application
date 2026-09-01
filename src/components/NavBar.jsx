import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (value) {
      navigate(`/products?search=${encodeURIComponent(value)}`);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            ShopEasy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Products
            </Link>

            <Link
              to="/categories"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Categories
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex">

              <input
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-52 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700"
              >
                🔍
              </button>

            </form>

            {/* Cart */}
            <Link
              to="/cart"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              🛒 Cart
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
            >
              Login
            </Link>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">

            <div className="flex flex-col gap-4 pt-4">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
              >
                🏠 Home
              </Link>

              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
              >
                🛍️ Products
              </Link>

              <Link
                to="/categories"
                onClick={() => setIsOpen(false)}
              >
                📦 Categories
              </Link>

              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="flex">

                <input
                  type="search"
                  name="mobileSearch"
                  id="mobileSearch"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
                />

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 rounded-r-lg"
                >
                  🔍
                </button>

              </form>

              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
              >
                🛒 Cart
              </Link>

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white text-center px-5 py-2 rounded-lg"
              >
                Login
              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;