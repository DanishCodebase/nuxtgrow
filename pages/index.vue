<script setup>
useHead({
  script: [
    {
      src: "/js/hero.js",
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
  <Hero />
  <Why />
  <Offering />
  <Courses />
  <Contact />
  <Popup />
</template>

<style scoped></style>
