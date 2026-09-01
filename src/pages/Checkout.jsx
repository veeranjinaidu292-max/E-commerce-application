import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products";
import Button from "../components/Button";

const Checkout = () => {
  const navigate = useNavigate();

  // Sample order items
  const [orderItems] = useState([
    {
      ...products[0],
      quantity: 1,
    },
    {
      ...products[1],
      quantity: 2,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Calculate total
  const totalPrice = orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Place order
  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);
  };

  // Order success page
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

        <div className="bg-white rounded-2xl shadow-md p-8 sm:p-12 text-center max-w-lg w-full">

          <div className="text-6xl mb-5">
            ✅
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mb-7">
            Thank you for shopping with ShopEasy.
            Your order has been successfully placed.
          </p>

          <Link to="/products">
            <Button className="max-w-xs mx-auto">
              Continue Shopping
            </Button>
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">

          <Link
            to="/cart"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Cart
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-5">
            Checkout
          </h1>

          <p className="text-gray-500 mt-2">
            Complete your order details
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Customer Details */}
            <div className="lg:col-span-2">

              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Delivery Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Pincode */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter pincode"
                      required
                      className="w-full sm:w-1/2 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                </div>

                {/* Payment Method */}
                <div className="mt-8">

                  <h2 className="text-2xl font-bold text-gray-800 mb-5">
                    Payment Method
                  </h2>

                  <div className="space-y-3">

                    {/* Cash on Delivery */}
                    <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                      <input
                        type="radio"
                        name="payment"
                        value="Cash on Delivery"
                        checked={
                          formData.payment === "Cash on Delivery"
                        }
                        onChange={handleChange}
                      />

                      <span className="font-medium text-gray-700">
                        💵 Cash on Delivery
                      </span>

                    </label>

                    {/* UPI */}
                    <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                      <input
                        type="radio"
                        name="payment"
                        value="UPI"
                        checked={formData.payment === "UPI"}
                        onChange={handleChange}
                      />

                      <span className="font-medium text-gray-700">
                        📱 UPI
                      </span>

                    </label>

                    {/* Card */}
                    <label className="flex items-center gap-3 border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-gray-50">

                      <input
                        type="radio"
                        name="payment"
                        value="Card"
                        checked={formData.payment === "Card"}
                        onChange={handleChange}
                      />

                      <span className="font-medium text-gray-700">
                        💳 Credit / Debit Card
                      </span>

                    </label>

                  </div>

                </div>

              </div>

            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">

              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">

                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-4">

                  {orderItems.map((item) => (

                    <div
                      key={item.id}
                      className="flex items-center gap-3"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-800">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold text-gray-800">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                  ))}

                </div>

                {/* Price Details */}
                <div className="border-t mt-6 pt-5 space-y-3">

                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span className="text-green-600">
                      Free
                    </span>
                  </div>

                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-bold text-gray-800">
                      Total
                    </span>

                    <span className="text-xl font-bold text-blue-600">
                      ₹{totalPrice}
                    </span>
                  </div>

                </div>

                {/* Place Order */}
                <div className="mt-6">
                  <Button type="submit">
                    Place Order
                  </Button>
                </div>

              </div>

            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default Checkout;