import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Karuna
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <a
            href="/login"
            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5"
          >
            Sign Up
          </a>
        </div>

        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 text-sm font-medium">
          <li>
            <a
              href="/"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              All Blogs
            </a>
          </li>
          <li>
            <a
              href="/single-blog"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Single Blog
            </a>
          </li>
          <li>
            <a
              href="/create-blog"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Create Blog
            </a>
          </li>
          <li>
            <a
              href="/edit-blog"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700"
            >
              Edit Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
