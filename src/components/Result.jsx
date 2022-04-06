import React from "react";
import "./Result.css";
import { yelloTulip } from "../data.js";

const Result = (props) => {
  const mbti = () => {
    console.log(props.mbti);
  };

  mbti();

  let type = [];
  if (props.mbti) {
    type = yelloTulip;
  }

  console.log(type);

  return (
    <div className="Result">
      <section className="rsTop">
        {/* 로고 넣을 위치 */}
        <p className="title">스물다섯 스물하나</p>
        <p className="sub">인물 유형 테스트</p>
      </section>
      <section className="rsMid">
        {/* 유형 이름 */}
        <p>{type.name}</p>
        {/* 일러스트 */}
        <div className="imgCon" />
        {/* 유형 특징 */}
        <div className="explainCon">
          {type.explain.map((ex) => (
            <p>{ex}</p>
          ))}
        </div>
      </section>
      <section className="rsBot">
        {/* 잘 맞는 유형 / 안 맞는 유형 */}
        <div className="goodAndBad">
          <div className="good">
            <div>{/* 이미지 */}</div>
            <p>{type.good.name}</p>
          </div>
          <div className="bad">
            <div>{/* 이미지 */}</div>
            <p>{type.bad.name}</p>
          </div>
        </div>
        <div className="rsBtnCon">
          {/* 재검사 버튼 */}
          <div className="reBtn" onClick={() => window.location.reload()}>
            재검사
          </div>
          {/* sns btn */}
          <div className="snsBtn">
            <button>Github</button>
            <button>Instagram</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;

// 일러스트 ( 극중 역할 사진 )
// 유형 이름 - 극중 역할 이름
// 특징 나열
// 잘 맞는 유형 / 안 맞는 유형
// 재검사 버튼
// 개발자 인스타 & 깃허브
