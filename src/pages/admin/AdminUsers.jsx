import { useEffect, useState } from "react";
import api from "../../services/api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await api.get(
        "/users",
        authConfig()
      );

      setUsers(response.data);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleBlockToggle = async (id) => {
    try {
      await api.put(
        `/users/${id}/block`,
        {},
        authConfig()
      );

      await fetchUsers();
    } catch (error) {
      console.error("Failed to update user:", error);

      alert(
        error.response?.data?.message ||
          "Failed to update user"
      );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            User Management
          </h1>

          <p className="text-gray-500 mt-1">
            Manage registered users
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Loading users...
            </p>
          </div>
        ) : users.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No users found.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4">
                      Name
                    </th>

                    <th className="text-left px-6 py-4">
                      Email
                    </th>

                    <th className="text-left px-6 py-4">
                      Role
                    </th>

                    <th className="text-left px-6 py-4">
                      Status
                    </th>

                    <th className="text-left px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user) => (
                    <tr
                      key={user._id}
                      className="border-t"
                    >
                      <td className="px-6 py-4">
                        <span className="font-medium">
                          {user.firstName} {user.lastName}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        {user.email}
                      </td>

                      <td className="px-6 py-4">
                        {user.role}
                      </td>

                      <td className="px-6 py-4">
                        {user.isBlocked ? (
                          <span className="text-red-600 font-medium">
                            Blocked
                          </span>
                        ) : (
                          <span className="text-green-600 font-medium">
                            Active
                          </span>
                        )}
                      </td>

                      <td className="px-6 py-4">
                        <button
                          onClick={() =>
                            handleBlockToggle(user._id)
                          }
                          className={`px-4 py-2 rounded-lg text-white ${
                            user.isBlocked
                              ? "bg-green-600 hover:bg-green-700"
                              : "bg-red-600 hover:bg-red-700"
                          }`}
                        >
                          {user.isBlocked
                            ? "Unblock"
                            : "Block"}
                        </button>
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

export default AdminUsers;