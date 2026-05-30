import React from 'react';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading,
  decoding = 'async',
  fetchPriority,
  onError,
}) => {
  const resolvedLoading = loading || (priority ? 'eager' : 'lazy');
  const resolvedFetchPriority = fetchPriority || (priority ? 'high' : 'auto');

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={resolvedLoading}
      decoding={decoding}
      fetchPriority={resolvedFetchPriority}
      onError={onError}
      className={className}
    />
  );
};

export default OptimizedImage;
