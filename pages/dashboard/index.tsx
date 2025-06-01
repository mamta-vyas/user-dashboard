import React, { useEffect, useState } from "react";
import { useFormContext } from "@/context/FormContext"; // import your context

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: formUserData } = useFormContext();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        // Map formUserData from context to User type if formUserData.name is non-empty
        const mappedLocalUser =
          formUserData.name.trim() !== ""
            ? {
                id: 9999,
                name: formUserData.name,
                email: formUserData.email,
                  phone: formUserData.phone || "N/A",
                address: {
                  city: formUserData.city,
                },
              }
            : null;

        const combined = mappedLocalUser ? [mappedLocalUser, ...data] : data;

        setUsers(combined);
        setFilteredUsers(combined);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [formUserData]); // **re-run fetch & update whenever formUserData changes**

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.address.city.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <input
        type="text"
        placeholder="Search by name or city"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full mb-6 rounded"
      />

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="border p-4 rounded shadow hover:shadow-md transition"
            >
              <h2 className="font-semibold text-lg">{user.name}</h2>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </div>
          ))}
          {filteredUsers.length === 0 && (
            <p>No users found matching &quot;{searchTerm}&quot;</p>
          )}
        </div>
      )}

      <div className="mt-6">
        <button
          onClick={() => (window.location.href = "/dashboard/AddUserPage")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
