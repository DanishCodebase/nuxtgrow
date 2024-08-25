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
  title: "Improve Your Financial Status",
  meta: [
    {
      name: "description",
      content:
        "Resilient Grow is here to help people who want to learn about the stock market. We want to make it easy and profitable for those who are just starting or already know a bit about stocks.",
    },
    {
      name: "keywords",
      content:
        "Stock Market Psychologist, Share Market, Online Programs, Educational Service",
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
      href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css",
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css",
    },
    {
      rel: "stylesheet",
      href: "/styles/styles.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
      defer: "defer",
      type: "text/javascript",
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.js",
      defer: "defer",
      type: "text/javascript",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      defer: "defer",
      type: "text/javascript",
    },
    {
      src: "/js/course.js",
      defer: "defer",
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <Header />
  <slot />
  <Footer />
  <Coursepop />
</template>

<style scoped>
body > nav {
  padding: 0;
  z-index: 2;
  box-shadow: var(--box-shadow) !important;
}
</style>
