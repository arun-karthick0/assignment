//selecting random
function randomNumbers(num) {
  console.log(Math.floor(Math.random() * num));
  return Math.floor(Math.random() * num);
}

let simpleColor = ["red", "orange", "yellow", "green", "blue", "grey"];

let btn = document.querySelector(".btn-hero");
let color = document.querySelector(".colors");
let main = document.querySelector(".parent");
btn.addEventListener("click", () => {
  let random = randomNumbers(simpleColor.length);
  console.log(random);
  main.style.backgroundColor = simpleColor[random];
  color.textContent = simpleColor[random];
});
