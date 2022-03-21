import React from "react";
import { Button } from "reactstrap";
import "./RandomPhoto.scss";
const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/1080/1080`;
};
const RandomPhoto = (props) => {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  const handleRandomPhotoClick = () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a Photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops ... not found. Please click random again!"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
};

export default RandomPhoto;
