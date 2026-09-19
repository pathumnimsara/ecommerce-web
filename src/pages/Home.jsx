import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      name: "Electronics",
      description: "Phones, laptops and gadgets",
    },
    {
      name: "Fashion",
      description: "Clothing, shoes and accessories",
    },
    {
      name: "Home & Living",
      description: "Products for your home",
    },
    {
      name: "Beauty",
      description: "Beauty and personal care",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 79.99,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      price: 24.99,
      category: "Fashion",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 49.99,
      category: "Fashion",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[80vh] bg-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <p className="text-gray-600 font-semibold mb-4">
              WELCOME TO SHOPEASE
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Shop Everything
              <br />
              You Love.
            </h1>

            <p className="text-gray-600 text-lg mt-6 max-w-xl">
              Discover quality products at great prices.
              Shop easily and enjoy a simple online shopping experience.
            </p>

            <Link
              to="/products"
              className="inline-block mt-8 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              Shop by Category
            </h2>

            <p className="text-gray-600 mt-2">
              Find what you need from our popular categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">
                  {category.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  {category.description}
                </p>

                <Link
                  to="/products"
                  className="inline-block mt-5 font-semibold hover:underline"
                >
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              Featured Products
            </h2>

            <p className="text-gray-600 mt-2">
              Check out some of our popular products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">
                    Product Image
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <h3 className="text-lg font-semibold mt-1">
                    {product.name}
                  </h3>

                  <p className="text-xl font-bold mt-3">
                    ${product.price}
                  </p>

                  <button className="w-full mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;