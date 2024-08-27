import React, { useEffect, useState } from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://66cd57fa8ca9aa6c8cca0c21.mockapi.io/blogs"
      );
      if (response.status === 200) {
        setBlogs(response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-10 px-5 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                className="w-full h-56 object-cover"
                src={blog.avatar}
                alt={blog.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {blog.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="p-6 border-t">
                <button
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:shadow-lg hover:scale-105 focus:outline-none"
                  onClick={() => navigate("/single-blog/" + blog.id)}
                >
                  See More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
