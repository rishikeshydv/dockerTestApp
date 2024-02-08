let clickCount: number = 0;

function updateClickCount() {
  const clickCountElement = document.getElementById("clickCount");
  if (clickCountElement) {
    clickCountElement.innerText = clickCount.toString();
  }
}

function incrementCounter() {
  clickCount++;
  updateClickCount();
}

document.addEventListener("DOMContentLoaded", () => {
  const counterBtn = document.getElementById("counterBtn");
  if (counterBtn) {
    counterBtn.addEventListener("click", incrementCounter);
  }
});
