<script setup>
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
      src: "/js/pop.js",
      defer: "defer",
      type: "text/javascript",
    },
    {
      src: "/js/theme.js",
      defer: "defer",
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <Header />
  <slot />
  <div class="position-relative">
    <Footer />
  </div>
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
