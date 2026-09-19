import { Link } from "react-router-dom";

function Home() {
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
    </main>
  );
}

export default Home;