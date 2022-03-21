import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoList from "../../../components/PhotoList";
import { IoIosAddCircle } from "react-icons/io";
import { removePhoto } from "../../photoSlice";
import { useHistory } from "react-router-dom";
MainPage.propTypes = {};

function MainPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector((state) => state.photos);
  const handlePhotoEditClick = (photo) => {
    const photoId = photo.id;
    history.push(`./photos/edit/${photoId}`);
  };
  const handlePhotoRemoveClick = (photo) => {
    const photoId = photo.id;
    const action = removePhoto(photoId);
    console.log(photo);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🥳 " backgroundUrl={Images.banner} />
      <Container className="button_addPhoto text-center">
        <div className="py-5">
          <Link to="photos/add" className="button__text">
            ADD NEW PHOTO
          </Link>
          <span className="photo-main__icon">
            <IoIosAddCircle></IoIosAddCircle>
          </span>
        </div>
      </Container>
      <div className="container-fluid">
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        ></PhotoList>
      </div>
    </div>
  );
}

export default MainPage;
