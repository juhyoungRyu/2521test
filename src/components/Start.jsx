import React from "react";
import "./Start.css";
import back from "../pic/back.png";

const Start = (props) => {
  return (
    <div className="Start">
      <section className="top">
        <p className="title">스물다섯 스물하나</p>
        <p className="sub">인물 유형 테스트</p>
      </section>
      <section className="middle">
        <img className="startBackground" src={back} alt="" />
        <div className="startBtn" onClick={props.func}>
          시작하기
        </div>
      </section>
      <section className="bottom">
        <p className="copy">&copy; 2022 2521 character test</p>
      </section>
    </div>
  );
};

export default Start;
