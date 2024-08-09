function updateButton({ buttonEl: t, isDark: e }) {
  (t.classList = e ? "theme" : "theme theme--light"),
    t.setAttribute(
      "aria-label",
      e ? "Change to light theme" : "Change to dark theme"
    );
}
function calculateSettingAsThemeString({
  localStorageTheme: t,
  systemSettingDark: e,
}) {
  return null !== t ? t : e.matches ? "dark" : "light";
}
function updateThemeOnHtmlEl({ theme: t }) {
  document.querySelector("html").setAttribute("data-theme", t);
}
const button = document.querySelector("[data-theme-toggle]"),
  localStorageTheme = localStorage.getItem("theme"),
  systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});
updateButton({ buttonEl: button, isDark: "dark" === currentThemeSetting }),
  updateThemeOnHtmlEl({ theme: currentThemeSetting }),
  button.addEventListener("click", () => {
    let t = "dark" === currentThemeSetting ? "light" : "dark";
    localStorage.setItem("theme", t),
      updateButton({ buttonEl: button, isDark: "dark" === t }),
      updateThemeOnHtmlEl({ theme: t }),
      (currentThemeSetting = t);
  });

for (let i = 0; i < 5; i++) {
  document
    .querySelectorAll(".nav-link")
    [i].addEventListener("click", function () {
      document.querySelector(".navbar-collapse").classList.remove("show");
    });
}
