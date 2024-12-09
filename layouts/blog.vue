<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Night and day theme toggle functionality
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
});

useHead({
  title:
    "AI in Stock Trading: Revolutionizing Investment Strategies - Resilient Grow",
  meta: [
    {
      name: "description",
      content:
        "Discover the secrets of AI in stock trading with 'AI in Stock Trading: Revolutionizing Investment Strategies.' Exploring how your trading journey!",
    },
  ],
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity:
        "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
      crossorigin: "anonymous",
    },
    {
      rel: "stylesheet",
      href: "/styles/styles.css",
    },
  ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      defer: "defer",
      type: "text/javascript",
    },
    {
      src: "/js/pop-up.js",
      defer: "defer",
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <Header />
  <slot />
  <!-- <div class="position-relative"> -->
    <Footer />
  <!-- </div> -->
  <Socials />
</template>

<style scoped>
body > nav {
  padding: 0;
  z-index: 2;
  box-shadow: var(--box-shadow) !important;
}

.position-relative {
  top: -500px;
  height: calc(-500px);
}
@media (max-width: 992px) {
  .position-relative {
    top: -450px;
    height: calc(-450px);
  }
}

@media (max-width: 768px) {
  .position-relative {
    top: -370px;
    height: calc(-370px);
  }
}

@media (max-width: 600px) {
  .position-relative {
    top: -300px;
    height: calc(-300px);
  }
}
@media (max-width: 600px) {
  .position-relative {
    top: -195px;
    height: calc(-195px);
  }
}
</style>
