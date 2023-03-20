// selecting
let value = document.querySelector("#value");
let btn = document.querySelectorAll(".btn");

console.log(btn);
// initial value
let count = 0;
//accessing each and every button
btn.forEach(function (ele) {
  console.log(ele);
//   adding different value to the button
  ele.addEventListener("click", (e) => {
    let list = e.currentTarget.classList;
    console.log(list);
    // check operation in the classlist
    if (list.contains("increase")) {
      count++;
    } else if (list.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    // applying color 
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
