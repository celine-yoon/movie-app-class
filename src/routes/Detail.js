import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  let { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state === null) {
      navigate("/");
    }
  }, [state, navigate]);

  return <div>{state ? <h1>{state.title}</h1> : null}</div>;
}

export default Detail;
