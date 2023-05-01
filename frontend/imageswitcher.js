import React, { useState } from 'react';

const imageStyle = {
  margin: '10px',
  display: 'inline-block',
};

function ImageBox({ images, imageStart }) {
  const [currentImage, setCurrentImage] = useState(imageStart);

  function handleClick(image) {
    setCurrentImage(image);
  }

  return (
    <div className="gallery">
      <div className="current-image">
        <img src={currentImage.image} />
      </div>
      {images.map((image) => (
        <div style={imageStyle} className="image" key={image.image}>
          <img
            onClick={() => handleClick(image)}
            width="100"
            src={image.thumbnail}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageBox;
