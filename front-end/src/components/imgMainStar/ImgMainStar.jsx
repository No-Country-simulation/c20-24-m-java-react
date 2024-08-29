import React from 'react';

const ImgMainStar = ({ imageSrc, altText, className}) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={altText || 'image'} className={className} />
    </div>
  );
};


export default ImgMainStar;
