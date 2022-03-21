import { Formik, Form, FastField } from "formik";
import { FormGroup, Button, Spinner } from "reactstrap";
import React from "react";
import { PHOTO_CATEGORY } from "../../constants/global";
import InputField from "../../custom-fields/InputField";
import SelectField from "../../custom-fields/SelectField";
import RandomPhotoField from "../../components/RandomPhotoField";
import * as Yup from "yup";
const PhotoForm = (props) => {
  const { initialValues, isAddMode } = props;
  const validationSchemes = Yup.object({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.number().required("This field is required").nullable(),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemes}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        // do Some Thing
        const { values, errors, touched, isSubmitting } = formikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="photo"
            />
            <FormGroup>
              {/* {isSubmitting ? (
                <Spinner animation="border" variant="primary" />
              ) : (
                "ADD TO ALBUM"
              )} */}
              {isSubmitting ? (
                <Button
                  disabled
                  type="submit"
                  color={isAddMode ? "primary" : "success"}
                  style={{ display: "block", width: "100%", height: "3rem" }}
                >
                  <Spinner animation="border" variant="primary" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  color={isAddMode ? "primary" : "success"}
                  style={{ display: "block", width: "100%", height: "3rem" }}
                >
                  {isAddMode ? "ADD TO ALBUM" : "UPDATE"}
                </Button>
              )}
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};
export default PhotoForm;
