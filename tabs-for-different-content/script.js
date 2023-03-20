let btn = document.querySelectorAll(".btn");
let about = document.querySelector(".btn-section");
let articles = document.querySelectorAll(".content");
about.addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  if (id) {
    btn.forEach((b) => {
      b.classList.remove("active");
      e.target.classList.add("active");
    });
    Array.from(articles).forEach(function (art) {
      art.classList.remove("active");
    });
    let element = document.getElementById(id);
    element.classList.add("active");
    console.log(element);
  }
});
