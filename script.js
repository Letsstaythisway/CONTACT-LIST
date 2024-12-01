/// Slide to go to another AppScreen

const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");

  if (value > 70) {
    label.textContent = "";
    disAppScreen();
  } else {
    label.textContent = "Slide to Unlock";
  }
});

const disAppScreen = () => {
  //Hide Home Screen
  document.querySelector(".homeScreen").remove();
  // Show App Screen
  document.querySelector(".appScreen").style.display = "block";
};
