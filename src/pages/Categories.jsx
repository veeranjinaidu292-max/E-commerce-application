import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Clothing",
    icon: "👕",
    description: "Trendy clothes for everyday style",
  },
  {
    id: 2,
    name: "Shoes",
    icon: "👟",
    description: "Comfortable and stylish footwear",
  },
  {
    id: 3,
    name: "Electronics",
    icon: "📱",
    description: "Latest gadgets and electronic products",
  },
  {
    id: 4,
    name: "Accessories",
    icon: "⌚",
    description: "Complete your look with accessories",
  },
  {
    id: 5,
    name: "Bags",
    icon: "🎒",
    description: "Stylish bags for travel and everyday use",
  },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-blue-600 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-4xl sm:text-5xl font-bold">
            Categories
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Explore products from your favorite categories
          </p>

        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* Icon */}
                <div className="text-6xl mb-5">
                  {category.icon}
                </div>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.name}
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-3 mb-6">
                  {category.description}
                </p>

                {/* View Products */}
                <Link
                  to={`/products?category=${category.name}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View Products
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="pb-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-12 text-center">

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Find Something You Love ❤️
            </h2>

            <p className="text-gray-400 mb-6">
              Browse our complete collection of products.
            </p>

            <Link
              to="/products"
              className="inline-block bg-blue-600 px-7 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Shop All Products
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Categories;