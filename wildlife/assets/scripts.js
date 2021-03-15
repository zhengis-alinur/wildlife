leftButton = document.getElementById("left");
rightButton = document.getElementById("right");

deer = document.getElementById("first");
squirrel = document.getElementById("second");
bird = document.getElementById("third");
item4 = document.getElementById("fourth");

articlesArr = [deer, squirrel, bird, item4]; 
itemCount = articlesArr.length;
function slideRight() {
  let temp = articlesArr[0];
  console.log(articlesArr);
  articlesArr.splice(0, 1);
  articlesArr.push(temp);
  for(i = 0; i < itemCount; i++) {
    articlesArr[i].style.order = i;
    articlesArr[i].style.display = "flex";
  }
  articlesArr[itemCount-1].style.display = "none";
}

function slideLeft() {
  let temp = articlesArr[itemCount - 1];
  articlesArr.splice(itemCount - 1, 1);
  articlesArr.unshift(temp);
  for(i = 0; i < itemCount; i++) {
    articlesArr[i].style.order = i;
    articlesArr[i].style.display = "flex";
  }
  articlesArr[itemCount-1].style.display = "none";
}