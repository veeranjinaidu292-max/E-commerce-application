import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  // If product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>

        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // Add product to cart
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity,
    });

    navigate("/cart");
  };

  // Buy Now
  const handleBuyNow = () => {
    addToCart({
      ...product,
      quantity: quantity,
    });

    navigate("/cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Products
        </Link>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">

            {/* Product Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-xl p-5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-lg h-80 sm:h-96 object-contain rounded-xl"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <p className="text-blue-600 font-medium mb-2">
                {product.category}
              </p>

              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-yellow-500 text-xl">
                  ★
                </span>

                <span className="text-gray-600">
                  {product.rating} / 5
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-blue-600 mb-5">
                ₹{product.price}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Quantity */}
              <div className="mb-6">

                <h3 className="font-semibold text-gray-800 mb-3">
                  Quantity
                </h3>

                <div className="flex items-center border border-gray-300 rounded-lg w-fit">

                  <button
                    onClick={() =>
                      setQuantity((prev) =>
                        Math.max(1, prev - 1)
                      )
                    }
                    className="px-4 py-2 text-xl hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="px-5 py-2 font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((prev) => prev + 1)
                    }
                    className="px-4 py-2 text-xl hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  🛒 Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Buy Now
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;