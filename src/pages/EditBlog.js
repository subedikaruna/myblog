import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState({});
  const fetchBlog = async () => {
    const response = await axios.get(
      `https://66cd57fa8ca9aa6c8cca0c21.mockapi.io/blogs/${id}`
    );
    if (response.status === 200) {
      setBlog(response.data);
    } else {
      alert("Something went wrong");
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Edit Blog
          </h2>

          <form>
            <div className="mb-6">
              <label
                for="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={blog.title}
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter the title"
                required
              />
            </div>

            <div className="mb-6">
              <label
                for="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload Image
              </label>
              <input
                type="text"
                id="image"
                name="image"
                value={blog.avatar}
                className="w-full px-4 py-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                required
              />
            </div>

            <div className="mb-6">
              <label
                for="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={blog.description}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter the description"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
