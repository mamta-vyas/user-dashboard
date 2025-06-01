// src/components/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-xl font-bold">User Dashboard</h1>
      <nav className="space-x-4">
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link href="/dashboard/AddUserPage" className="hover:underline">
          Add User
        </Link>
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          Toggle Theme
        </button>
      </nav>
    </header>
  );
};

export default Header;
