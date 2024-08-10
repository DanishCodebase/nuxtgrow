<script setup>
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
      src: "/js/theme.js",
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
