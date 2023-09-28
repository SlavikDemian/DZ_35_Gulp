"use strict";

var x = {
  name: "tom",
  age: 10
};
console.log(x.name);
var parentID = document.getElementById("parent"),
  smileID1 = document.getElementById("smile_1"),
  smileID2 = document.getElementById("smile_2"),
  smileID3 = document.getElementById("smile_3"),
  smileID4 = document.getElementById("smile_4"),
  smileID5 = document.getElementById("smile_5");
var number = 1;
smileID1.innerHTML = number, smileID2.innerHTML = number, smileID3.innerHTML = number, smileID4.innerHTML = number, smileID5.innerHTML = number, parentID.addEventListener("click", function (e) {
  e.target && "LI" === e.target.nodeName && (e.target === smileID1 ? smileID1.innerHTML++ : e.target === smileID2 ? smileID2.innerHTML++ : e.target === smileID3 ? smileID3.innerHTML++ : e.target === smileID4 ? smileID4.innerHTML++ : e.target === smileID5 && smileID5.innerHTML++);
});