function TypeMake(name, img, explain) {
  this.name = name;
  this.img = img;
  this.explain = [...explain];
}

export const yelloTulip = new TypeMake("외유내강 노랑튤립", "", [
  "대충 이런 설명1",
  "대충 이런 설명2",
  "대충 이런 설명3",
  "대충 이런 설명4",
]);

// export const yelloTulip = {
//   name: "외유내강 노랑튤립",
//   img: "",
//   explain: [
//     "대충 이런 설명1",
//     "대충 이런 설명2",
//     "대충 이런 설명3",
//     "대충 이런 설명4",
//   ],
// };
