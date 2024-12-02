import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Redirect() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');

  useEffect(() => {
    if (location) {
      window.location.href = decodeURIComponent(location);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-gray-900">Redirecting...</h1>
        <p className="mt-2 text-sm text-gray-600">
          If you are not redirected automatically, click{' '}
          <a
            href={decodeURIComponent(location)}
            className="text-indigo-600 hover:text-indigo-500"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Redirect;