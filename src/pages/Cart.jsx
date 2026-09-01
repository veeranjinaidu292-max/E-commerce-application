import { Link } from "react-router-dom";

const Cart = ({ cart = [], setCart }) => {

  // Remove product from cart
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    );
  };

  // Total price
  const total = cart.reduce(
    (sum, product) =>
      sum + Number(product.price) * Number(product.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">

      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Shopping Cart 🛒
        </h1>

        {/* Empty Cart */}
        {cart.length === 0 ? (

          <div className="bg-white rounded-xl shadow p-10 text-center">

            <p className="text-xl text-gray-500 mb-5">
              Your cart is empty
            </p>

            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <>
            {/* Cart Items */}
            <div className="space-y-4">

              {cart.map((product, index) => (

                <div
                  key={`${product.id}-${index}`}
                  className="bg-white rounded-xl shadow p-5 flex flex-col sm:flex-row items-center gap-5"
                >

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  {/* Product Details */}
                  <div className="flex-1">

                    <h2 className="text-xl font-bold text-gray-800">
                      {product.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {product.category}
                    </p>

                    <p className="text-blue-600 font-bold text-lg mt-2">
                      ₹{product.price}
                    </p>

                    {/* Quantity */}
                    <p className="text-gray-600 mt-1">
                      Quantity: {product.quantity || 1}
                    </p>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            {/* Total */}
            <div className="bg-white rounded-xl shadow p-6 mt-8">

              <div className="flex justify-between text-xl font-bold">

                <span>
                  Total
                </span>

                <span className="text-blue-600">
                  ₹{total}
                </span>

              </div>

              {/* Checkout */}
              <Link
                to="/checkout"
                className="block text-center w-full mt-5 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>

            </div>

          </>

        )}

      </div>

    </div>
  );
};

export default Cart;