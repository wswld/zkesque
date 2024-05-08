import React from 'react';
import './Luhmann.css';

const Luhmann = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="loading-image" />
    </div>
  );
};

export default Luhmann;
