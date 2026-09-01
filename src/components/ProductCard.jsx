import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Add the clicked product to cart
    addToCart(product);

    // Open cart page
    navigate("/cart");
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </Link>

      {/* Product Information */}
      <div className="p-5">

        {/* Category */}
        <p className="text-sm text-gray-500 mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <Link to={`/products/${product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">
            {product.name}
          </h2>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="mt-3">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>
        </div>

        {/* Add to Cart */}
        <Button
          className="mt-4"
          onClick={handleAddToCart}
        >
          🛒 Add to Cart
        </Button>
       

      </div>
    </div>
  );
};

export default ProductCard;