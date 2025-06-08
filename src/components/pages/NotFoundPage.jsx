import React from "react";

const NotFoundPage = ({ navigate }) => {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("home")}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFoundPage;
