import React from "react";
import { Spinner } from "reactstrap";
import "./loading.scss";
const Loadding = () => {
  return (
    <div id="overlay">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loadding;
