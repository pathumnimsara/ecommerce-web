
function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 79.99,
      quantity: 2,
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <main className="py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Shopping Cart
          </h1>

          <p className="text-gray-600 mt-2">
            Review your items before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              >

                {/* Product Info */}
                <div className="flex items-center gap-4">

                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      Image
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-gray-600 mt-1">
                      ${item.price}
                    </p>
                  </div>

                </div>

                {/* Quantity */}
                <div>
                  <p className="text-sm text-gray-500">
                    Quantity
                  </p>

                  <p className="font-semibold">
                    {item.quantity}
                  </p>
                </div>

                {/* Item Total */}
                <div>
                  <p className="text-sm text-gray-500">
                    Total
                  </p>

                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="border rounded-xl p-6 h-fit">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6">
              <span className="text-gray-600">
                Subtotal
              </span>

              <span className="font-semibold">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between mt-3">
              <span className="text-gray-600">
                Shipping
              </span>

              <span className="font-semibold">
                ${shipping.toFixed(2)}
              </span>
            </div>

            <div className="border-t mt-5 pt-5 flex justify-between">
              <span className="font-bold">
                Total
              </span>

              <span className="text-xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-700">
              Proceed to Checkout
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}

export default Cart;
