import React from "react";
import UrlShortener from "./components/url_form";

const App = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md flex justify-center items-center min-h-screen">
      <UrlShortener />
    </div>
  );
};

export default App;
