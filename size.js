let container = document.getElementById("mainpage"), screen = document.getElementById("screen");

const resize = () => {
  const isChecked = screen.checked;
  isChecked ? container.classList.remove("container") : container.classList.add("container");
};

addEventListener("change", resize, false);
