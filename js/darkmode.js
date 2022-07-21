function updateUI() {
  if (localStorage.darkMode === "true") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

if (
  window.matchMedia("(prefers-color-scheme: dark)").matches &&
  localStorage.darkMode === undefined
) {
  localStorage.darkMode = "true";
  updateUI();
} else if (localStorage.darkMode === undefined) {
  localStorage.darkMode = "false";
  updateUI();
} else {
  updateUI();
}

// eslint-disable-next-line no-unused-vars
function switchMode() {
  if (localStorage.darkMode === "true") {
    localStorage.darkMode = "false";
  } else {
    localStorage.darkMode = "true";
  }
  updateUI();
}
