import { useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Silva",
      email: "john@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Fernando",
      email: "sarah@example.com",
      role: "Customer",
      status: "Active",
    },
    {
      id: 3,
      name: "Kamal Perera",
      email: "kamal@example.com",
      role: "Customer",
      status: "Blocked",
    },
    {
      id: 4,
      name: "Admin User",
      email: "admin@shopease.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const toggleStatus = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

  return (
    <main className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            User Management
          </h1>

          <p className="text-gray-600 mt-2">
            View and manage registered users
          </p>
        </div>

        <div className="bg-white border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="text-left px-6 py-4">
                    ID
                  </th>

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
                    key={user.id}
                    className="border-b last:border-b-0"
                  >
                    <td className="px-6 py-4">
                      {user.id}
                    </td>

                    <td className="px-6 py-4 font-medium">
                      {user.name}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      {user.role}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                        {user.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {user.role !== "Admin" && (
                        <button
                          onClick={() =>
                            toggleStatus(user.id)
                          }
                          className="text-blue-600 hover:underline"
                        >
                          {user.status === "Active"
                            ? "Block"
                            : "Unblock"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminUsers;