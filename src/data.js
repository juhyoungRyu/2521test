// 유형 사진
import ytPic from "./pic/yellotulip.jpg";
import brokenTruck from "./pic/broken8tTruck.jpg";
import redSporty from "./pic/redSportCar.png";
// 질문 사진
import qu1 from "./pic/qu1.png";
import qu2 from "./pic/qu2.jpg";
import qu3 from "./pic/qu3.jpg";
import qu4 from "./pic/qu4.jpg";
import qu5 from "./pic/qu5.jpg";
import qu6 from "./pic/qu6.jpg";
import qu7 from "./pic/qu7.jpg";
import qu8 from "./pic/qu8.jpg";
import qu9 from "./pic/qu9.jpg";
import qu10 from "./pic/qu10.jpg";
import qu11 from "./pic/qu11.jpg";
import qu12 from "./pic/qu12.jpg";

function TypeMake(name, img, explain) {
  this.name = name;
  this.img = <img className="typeImg" src={img.img} alt={img.imgEx} />;
  this.explain = [...explain];
}

export const yelloTulip = new TypeMake(
  "외유내강 노랑튤립",
  { img: ytPic, imgEx: "고유림" },
  [
    "마음이 순하고 따스합니다",
    "타인의 감정에 지나치게 민감한 경향이 있습니다",
    "대충 이런 설명3",
    "대충 이런 설명4",
  ]
);

export const broken8tTruck = new TypeMake(
  "핸들이 고장난 8t 트럭",
  { img: brokenTruck, imgEx: "나희도" },
  ["대충 이런 설명1", "대충 이런 설명2", "대충 이런 설명3", "대충 이런 설명4"]
);

export const redSportsCar = new TypeMake(
  "꼰대기질 빨간 스포츠카",
  { img: redSporty, imgEx: "백이진" },
  ["대충 이런 설명1", "대충 이런 설명2", "대충 이런 설명3", "대충 이런 설명4"]
);

// TypeMake 생성자 함수 결과물
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
  "친해지고 싶은 사람이 있을 때, 나는?",
  "친구와 단둘이 있을 때, 나는?",
  "같은 반에 전학을 온 친구가 있다, 나는?",
  "누군가 나를 싫어하는 걸 알았을 때, 나는?",
  "?? : 그 친구가 잘못했다고 한마디만 해줘...",
  "다음 장면을 보고 나는",
  "처음으로 펜싱 칼을 들어보았다",
  "비가 오면 난 하늘을 보면서",
  "음악에서 가사와 멜로디 중 더 중요한 것은?",
  "갑자기 해야 할 일이 생겼을 때, 나는?",
  "?? : 우리 바다보러 갈까?",
  "다음 주부터 시험인 것을 오늘 안 나",
];

export const answer = [
  {},
  {
    a1: "일단 인사부터 건넨다!E",
    a2: "말을 걸까 고민하다가 고민만 한다...I",
  },
  {
    a1: "질문이나 주제를 꺼내며 대화를 시작한다.E",
    a2: "친구가 하는 말에 귀를 기울인다.I",
  },
  {
    a1: "우리 학교 소개해줄까? 말을 건다.E",
    a2: "어떤 친구인지 멀리서 관찰한다.I",
  },
  {
    a1: "왜? 이유가 뭐야? (진짜 궁금함)T",
    a2: "나를 왜 싫어하지..? ㅠㅠ (상처)F",
  },
  {
    a1: "상황을 알려줘야 판단하지..T",
    a2: "무조건 그 친구가 잘못했네!!F",
  },
  {
    a1: "'기분이 좋아지는구나' 라고 생각했다.T",
    a2: "같이 기분이 좋아졌다!F",
  },
  {
    a1: "안무겁나? 찔리면 얼마나 아플까? 🤔🤔N",
    a2: "무겁네S",
  },
  {
    a1: "(잠시 나만의 세계에 빠진다)N",
    a2: "우산 없는데 어쩌지...S",
  },
  {
    a1: `나는 ㄱㅏ끔,, ㄱrㅅㅏ를 보며,,😭N`,
    a2: "멜로디가 좋아야 가사에도 관심이 생기지!S",
  },
  {
    a1: "좋아! 일단 해보자고! 가보자고!P",
    a2: "후.. 계획부터 세워보자...J",
  },
  {
    a1: "바다 좋지! 신난다!P",
    a2: "속초? 부산? 언제 갈건데? 🤨J",
  },
  {
    a1: "음.. 내일부터 시작하면 되겠지 ㅎP",
    a2: "아직 7일 남았으니까 하루에 한 과목씩...J",
  },
];

export const imgList = [
  "",
  qu1,
  qu2,
  qu3,
  qu4,
  qu5,
  qu6,
  qu7,
  qu8,
  qu9,
  qu10,
  qu11,
  qu12,
];
