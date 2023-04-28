import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  let { state } = useLocation();
  // console.log(state);
  return <h1>Detail</h1>;
}

export default Detail;
