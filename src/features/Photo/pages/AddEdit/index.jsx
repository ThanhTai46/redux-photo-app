import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Banner from "../../../../components/Banner";
import PhotoForm from "../../../components";
import { addPhoto, editPhoto } from "../../photoSlice";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { randomNumber } from "../../../../utils/randomNumber";
AddEditPage.propTypes = {};

function AddEditPage(props) {
  const { photoId } = useParams();
  const isAddMode = !photoId;

  // const newPhotoId = parseInt(photoId);

  const editedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    return foundPhoto;
  });
  console.log({ editedPhoto });
  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;
  const dispatch = useDispatch();
  let history = useHistory();
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = editPhoto(values);
          dispatch(action);
        }
        history.push("/");
        resolve(true);
      }, 2000);
    });
  };
  return (
    <div>
      <Banner title="Pick Your Amazing Photos 😎😎😎 " />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
          initialValues={initialValues}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
