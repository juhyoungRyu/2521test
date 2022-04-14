import ytPic from "./pic/yellotulip.jpg";

function TypeMake(name, img, explain) {
  this.name = name;
  this.img = <img className="typeImg" src={img.img} alt={img.imgEx} />;
  this.explain = [...explain];
}

export const yelloTulip = new TypeMake(
  "외유내강 노랑튤립",
  { img: ytPic, imgEx: "고유림" },
  ["대충 이런 설명1", "대충 이런 설명2", "대충 이런 설명3", "대충 이런 설명4"]
);

// yelloTulip = {
//   name: "외유내강 노랑튤립",
//   img: "",
//   explain: [
//     "대충 이런 설명1",
//     "대충 이런 설명2",
//     "대충 이런 설명3",
//     "대충 이런 설명4",
//   ],
// };

export const question = [
  "",
  "첫 번째 질문입니다",
  "두 번째 질문입니다",
  "세 번째 질문입니다",
  "네 번째 질문입니다",
  "다섯 번째 질문입니다",
  "여섯 번째 질문입니다",
  "일곱 번째 질문입니다",
  "여덜 번째 질문입니다",
  "아홉 번째 질문입니다",
  "열 번째 질문입니다",
  "열 한 번째 질문입니다",
  "열 두 번째 질문입니다",
];

export const answer = [
  {},
  { a1: "1-1 답변E", a2: "1-2 답변I" },
  { a1: "2-1 답변E", a2: "2-2 답변I" },
  { a1: "3-1 답변E", a2: "3-2 답변I" },
  { a1: "4-1 답변T", a2: "4-2 답변F" },
  { a1: "5-1 답변T", a2: "5-2 답변F" },
  { a1: "6-1 답변T", a2: "6-2 답변F" },
  { a1: "7-1 답변N", a2: "7-2 답변S" },
  { a1: "8-1 답변N", a2: "8-2 답변S" },
  { a1: "9-1 답변N", a2: "9-2 답변S" },
  { a1: "10-1 답변P", a2: "10-2 답변J" },
  { a1: "11-1 답변P", a2: "11-2 답변J" },
  { a1: "12-1 답변P", a2: "12-2 답변J" },
];
