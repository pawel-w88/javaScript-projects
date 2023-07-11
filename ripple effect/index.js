const buttons = document.querySelectorAll(".piBtn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let ripples = document.createElement("span");
    ripples.className = "piBtnSpan";
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    btn.appendChild(ripples);
    setTimeout(() => {
        ripples.remove();
    },400)
  });
});
