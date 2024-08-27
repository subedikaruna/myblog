import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState();
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
  const deleteBlog = async () => {
    const response = await axios.delete(
      `https://66cd57fa8ca9aa6c8cca0c21.mockapi.io/blogs/${id}`
    );
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-10 px-5 md:px-20">
        <img
          className="w-full h-80 object-cover"
          src={blog?.avatar}
          alt={blog?.title}
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {blog?.title}
          </h2>

          <p className="text-gray-700 mb-4">{blog?.description}</p>
          <p className="text-gray-700 mb-4">{blog?.createdAt}</p>
        </div>
        <button
          onClick={() => navigate("/edit-blog/"+id)}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:shadow-lg hover:scale-105 focus:outline-none"
        >
          Edit
        </button>
        <button
          onClick={deleteBlog}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:shadow-lg hover:scale-105 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleBlog;
