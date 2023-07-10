let open = document.getElementById("open");
let modal_container = document.getElementById("modal_container");
let close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
