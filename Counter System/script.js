document.addEventListener("DOMContentLoaded", () => {
  const i = document.getElementById("increase");
  const d = document.getElementById("decrease");
  const r = document.getElementById("reset");
  const countdisplay = document.getElementById("count");

  let count = 0;

  i.addEventListener("click", () => {
    count++;
    countdisplay.textContent = count;
  });

  d.addEventListener("click", () => {
    count--;
    countdisplay.textContent = count;
  });

  r.addEventListener("click", () => {
    count = 0;
    countdisplay.textContent = count;
  });
});
