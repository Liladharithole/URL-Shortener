import { useState } from "react";
import axios from "axios";
import { createShortUrl } from "../api/shortUrl.api";
export default function UrlShortener() {
  const [url, setUrl] = useState("https://");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    const shortUrl = await createShortUrl(url);
    setShortUrl(shortUrl.short_url);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000); // Reset after 2 seconds
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        URL Shortener
      </h1>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            placeholder="Enter your long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Shorten URL
          </button>
        </div>
      </div>

      {shortUrl && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Your shortened URL:
          </h2>
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
              onClick={handleCopy}
              className={`px-3 py-1 rounded-md focus:outline-none focus:ring-2 transition-colors duration-200 ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
