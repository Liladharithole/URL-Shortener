import React from "react";
import UrlFrom from "../components/UrlForm";

const Homepage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <UrlFrom />
      </div>
    </div>
  );
};

export default Homepage;
