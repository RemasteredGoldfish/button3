const colors = ["green", "red", "purple", "blue", "black"];

function changeColor(button) {
  let currentColor = button.dataset.color || 0;
  currentColor = parseInt(currentColor);

  if (currentColor < colors.length - 1) {
    currentColor++;
    button.dataset.color = currentColor;
    button.style.backgroundColor = colors[currentColor];
  } else {
    button.style.display = "none";
  }
}
