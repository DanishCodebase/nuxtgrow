<script setup>
import Reviews from "~/components/Reviews.vue";

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
  <!-- <Reviews /> -->
  <Offering />
  <Courses />
  <Contact /> 
  <Popup />
</template>
