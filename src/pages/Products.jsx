import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = ({ addToCart }) => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  let filteredProducts = products;

  // Category filter
  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Search filter
  if (search) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            {search
              ? `Search Results for "${search}"`
              : category
              ? `${category} Products`
              : "All Products"}
          </h1>

          <p className="text-gray-500 mt-2">
            {filteredProducts.length} product(s) found
          </p>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (

          <div className="text-center py-20">

            <h2 className="text-2xl font-semibold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try another search.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Products;