onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const mainContent = document.getElementById("main-content");
  const popupButton = document.getElementById("popup-button");

  popupButton.addEventListener("click", () => {
    // Hide the popup
    popup.style.display = "none";
    // Show the main content
    mainContent.classList.remove("hidden");
  });
});