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
    </main>
  );
}

export default Home;