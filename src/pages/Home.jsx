import React, { useState } from 'react';
import { convertToRedirectUrl } from '../utils/urlUtils';

function Home() {
  const [schemeUrl, setSchemeUrl] = useState('');
  const [redirectUrl, setRedirectUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleConvert = (e) => {
    e.preventDefault();
    const converted = convertToRedirectUrl(schemeUrl);
    setRedirectUrl(converted);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(redirectUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">URL Scheme Redirector</h1>
          <p className="mt-2 text-sm text-gray-600">
            Convert scheme URLs to HTTP redirect URLs
          </p>
        </div>

        <div className="mt-8">
          <form onSubmit={handleConvert} className="space-y-6">
            <div>
              <label htmlFor="scheme" className="block text-sm font-medium text-gray-700">
                Scheme URL
              </label>
              <input
                type="text"
                id="scheme"
                value={schemeUrl}
                onChange={(e) => setSchemeUrl(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Convert URL
            </button>
          </form>

          {redirectUrl && (
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-700">Redirect URL:</h2>
              <div className="mt-1 relative">
                <input
                  type="text"
                  readOnly
                  value={redirectUrl}
                  className="block w-full pr-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    {copySuccess ? 'Copied!' : 'Copy URL'}
                  </button>
                  <a
                    href={redirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    Try it out
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;