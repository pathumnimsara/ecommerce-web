import { useEffect, useState } from "react";
import api from "../../services/api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: "",
  });

  // Load products
  const fetchProducts = async () => {
    try {
      const response = await api.get(
  "/products",
  authConfig()
);
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to load products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Open add form
  const handleAdd = () => {
    setEditingProduct(null);

    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
      stock: "",
    });

    setShowForm(true);
  };

  // Open edit form
  const handleEdit = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description || "",
      image: product.image || "",
      stock: product.stock,
    });

    setShowForm(true);
  };

  // Save product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const productData = {
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
        description: formData.description,
        image: formData.image,
        stock: Number(formData.stock),
      };

      if (editingProduct) {
        await api.put(
  `/products/${editingProduct._id}`,
  productData,
  authConfig()
);
      } else {
        await api.post(
  "/products",
  productData,
  authConfig()
);
      }

      setShowForm(false);
      setEditingProduct(null);

      await fetchProducts();
    } catch (error) {
      console.error("Failed to save product:", error);
      alert("Failed to save product");
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await api.delete(
  `/products/${id}`,
  authConfig()
);

      await fetchProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Product Management
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your store products
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800"
          >
            + Add Product
          </button>

        </div>

        {/* Add/Edit Form */}
        {showForm && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">

            <h2 className="text-xl font-semibold mb-5">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

              <input
                type="text"
                name="name"
                placeholder="Product name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
                className="border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 md:col-span-2"
              />

              <textarea
                name="description"
                placeholder="Product description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="border rounded-lg px-4 py-3 md:col-span-2"
              />

              <div className="flex gap-3 md:col-span-2">

                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                >
                  {editingProduct ? "Update Product" : "Add Product"}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border px-6 py-3 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>

              </div>

            </form>
          </div>
        )}

        {/* Products */}
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Loading products...
            </p>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No products found.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4">
                      Product
                    </th>

                    <th className="text-left px-6 py-4">
                      Category
                    </th>

                    <th className="text-left px-6 py-4">
                      Price
                    </th>

                    <th className="text-left px-6 py-4">
                      Stock
                    </th>

                    <th className="text-left px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="border-t"
                    >

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">

                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-lg"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
                              No image
                            </div>
                          )}

                          <span className="font-medium">
                            {product.name}
                          </span>

                        </div>
                      </td>

                      <td className="px-6 py-4">
                        {product.category}
                      </td>

                      <td className="px-6 py-4">
                        ${Number(product.price).toFixed(2)}
                      </td>

                      <td className="px-6 py-4">
                        {product.stock}
                      </td>

                      <td className="px-6 py-4">

                        <div className="flex gap-2">

                          <button
                            onClick={() => handleEdit(product)}
                            className="px-3 py-2 border rounded-lg hover:bg-gray-100"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              handleDelete(product._id)
                            }
                            className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                          >
                            Delete
                          </button>

                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default AdminProducts;