// Get the button and the <html> element
const button = document.getElementById("theme-toggle");
const root = document.documentElement;

// If the user picked a theme before, use it
const saved = localStorage.getItem("theme");
if (saved) {
    root.setAttribute("data-theme", saved);
}

// When the button is clicked, switch between light and dark
button.addEventListener("click", function () {
    const newTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // remember the choice
});
