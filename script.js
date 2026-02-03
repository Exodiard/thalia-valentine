function openLetter() {
  document.getElementById("envelope").style.display = "none";
  document.getElementById("letter").style.display = "block";
}

function yesClick() {
  document.getElementById("finalText").style.display = "block";
}

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});
