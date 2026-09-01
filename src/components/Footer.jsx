import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Footer Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              ShopEasy
            </h2>

            <p className="text-gray-400 leading-relaxed">
              ShopEasy is your one-stop online shopping destination.
              Discover quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-white transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-gray-400 hover:text-white transition"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-white transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white cursor-pointer">
                Clothing
              </li>

              <li className="text-gray-400 hover:text-white cursor-pointer">
                Shoes
              </li>

              <li className="text-gray-400 hover:text-white cursor-pointer">
                Electronics
              </li>

              <li className="text-gray-400 hover:text-white cursor-pointer">
                Accessories
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📧 support@shopeasy.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Hyderabad, India</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-5">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition"
              >
                ◎
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition"
              >
                in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

            <p className="text-gray-500 text-sm text-center">
              © 2026 ShopEasy. All rights reserved.
            </p>

            <div className="flex gap-5 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-gray-500 hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;