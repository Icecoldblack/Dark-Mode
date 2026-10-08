// Grab the toggle button and the <html> element (where data-theme lives)
const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

// Update the button label so it shows what clicking will switch to
function updateButton(theme) {
    toggleButton.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Apply a theme: set the attribute, remember it, and update the button
function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateButton(theme);
}

// Set the button label to match the theme chosen on page load
// (the inline script in index.html already applied the theme itself)
updateButton(root.getAttribute("data-theme"));

// Flip between light and dark whenever the button is clicked
toggleButton.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
});
