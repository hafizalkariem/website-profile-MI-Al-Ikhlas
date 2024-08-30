// Select dropdown elements
const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownIcon = document.querySelector(".dropdown i");

// Toggle dropdown content and icon rotation on click (only for the dropdown button)
dropdown.addEventListener("mouseover", function (event) {
  // Prevent toggling if an internal link is clicked
  if (
    event.target.tagName === "A" &&
    event.target.getAttribute("href").startsWith("#")
  ) {
    return;
  }

  event.preventDefault();
  dropdown.classList.toggle("open");
  dropdownContent.style.display = dropdown.classList.contains("open")
    ? "block"
    : "none";
});

// Close dropdown when clicking outside
document.addEventListener("mouseover", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
    dropdownContent.style.display = "none";
  }
});
