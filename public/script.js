var clickCount = 0;
function updateClickCount() {
    var clickCountElement = document.getElementById("clickCount");
    if (clickCountElement) {
        clickCountElement.innerText = clickCount.toString();
    }
}
function incrementCounter() {
    clickCount++;
    updateClickCount();
}
document.addEventListener("DOMContentLoaded", function () {
    var counterBtn = document.getElementById("counterBtn");
    if (counterBtn) {
        counterBtn.addEventListener("click", incrementCounter);
    }
});
