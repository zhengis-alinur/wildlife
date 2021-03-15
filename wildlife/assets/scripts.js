let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");

let deer = document.getElementById("first");
let squirrel = document.getElementById("second");
let bird = document.getElementById("third");
let item4 = document.getElementById("fourth");

let articlesArr = [deer, squirrel, bird, item4];
console.log('dsfasd');

function slideRight() {
  console.log("right");
  for(i = 0; i < 3; i++) {
    articlesArr[i].style.order = i+1;
  }
  articlesArr[3].style.order = 1;
}

function slideLeft() {
  console.log("left");
  for(i = 0; i < 3; i++) {
    articlesArr[i].style.order = i+1;
  }
  articlesArr[3].style.order = 1;
}