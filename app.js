let currentValue = 0;
const title = document.querySelector("#title");

const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment");

btnDecrement.addEventListener("click", () => {
  currentValue--;
  title.textContent = currentValue;
});
btnReset.addEventListener("click", () => {
  currentValue=0;
  title.textContent = currentValue;
});
btnIncrement.addEventListener("click", () => {
  currentValue++;
  title.textContent = currentValue;
});
