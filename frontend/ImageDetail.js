import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetail = ({ imageData }) => {
  const { id } = useParams();

  // Find the image object with the matching 'id'
  const image = imageData.find((img) => img.id.toString() === id);

  if (!image) {
    return <div>Image not found.</div>;
  }

  return (
    <div>
      <h2>Image Detail</h2>
      <div>
        <img src={image.url} alt={image.name} style={{ width: '300px', height: 'auto' }} />
      </div>
      <div>
        <h3>{image.name}</h3>
        {/* Add more details if needed */}
      </div>
    </div>
  );
};

export default ImageDetail;
