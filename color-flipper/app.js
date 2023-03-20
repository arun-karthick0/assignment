function randomNumbers(num) {
  console.log(Math.floor(Math.random() * num));
  return Math.floor(Math.random() * num);
}
let hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.querySelector(".btn-hex");
let color = document.querySelector(".colors");
let main=document.querySelector(".parent")
btn.addEventListener("click", () => {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    randomHex += hexColor[randomNumbers(hexColor.length)];
  }
  main.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});
