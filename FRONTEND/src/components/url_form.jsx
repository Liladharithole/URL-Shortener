import { useState } from "react";

export default function UrlShortener() {
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    // try {
    //   // Simulating API response
    //   await new Promise(resolve => setTimeout(resolve, 500));
    //   const shortId = Math.random().toString(36).substring(2, 8);
    //   setShortUrl(`https://short.url/${shortId}`);
    // } catch (error) {
    //   alert('Error shortening URL');
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        URL Shortener
      </h1>

      <form className="mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            placeholder="Enter your long URL"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Shorten URL
          </button>
        </div>
      </form>

      {/* {shortUrl && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Your shortened URL:</h2>
          <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-200">
            <a 
              href={shortUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 truncate mr-2"
            >
              {shortUrl}
            </a>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                alert('Copied to clipboard!');
              }}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Copy
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
}
