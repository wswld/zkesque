import React from 'react';
import './Luhmann.css'; // Import the CSS file for styles

const Luhmann = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="loading-image" />
    </div>
  );
};

export default Luhmann;