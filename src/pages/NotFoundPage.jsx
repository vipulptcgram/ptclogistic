import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-neutral-light">
    <div className="text-center px-4">
      <div className="font-heading text-[10rem] font-black text-primary/10 leading-none select-none">404</div>
      <div className="font-heading text-4xl font-bold uppercase text-primary -mt-10 mb-4">Page Not Found</div>
      <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <Link to="/" className="btn-primary inline-block">← Back to Home</Link>
    </div>
  </div>
);

export default NotFoundPage;
