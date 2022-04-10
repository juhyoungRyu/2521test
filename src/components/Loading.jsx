import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Result from "./Result";
import "./Loading.css";

const Loading = (props) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 2000);
  }, [load]);
  return (
    <div className="Loading">
      {load ? (
        <Result mbti={props.mbti} />
      ) : (
        <ReactLoading type="bubbles" color="white" />
      )}
    </div>
  );
};

export default Loading;
