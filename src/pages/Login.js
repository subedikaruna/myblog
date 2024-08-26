import React from "react";

const Login = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label for="email" className="block text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label for="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-6">
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </div>
        </form>

        <p className="text-center text-gray-600">
          Don't have an account?
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
