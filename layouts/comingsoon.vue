<template>
  <slot />
  <body>
    <nuxt-link class="fs-6" to="/">Go back to home page</nuxt-link>
  </body>
</template>

<style scoped>
body {
  background-image: url("/images/cooming\ soon.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
  padding-top: 25px;
}

.theme {
  display: none !important;
}

.fs-6 {
  text-decoration: none;
  display: inline-block;
  display: flex;
  max-width: max-content;
  margin: auto;
  background-color: #fff;
  color: #225593;
  height: unset;
  padding: 15px 30px;
  border-radius: 80px;
}

@media (max-width: 600px) {
  body {
    background-image: url("/images/coming-soon-sm.webp");
    background-position-x: center;
    background-position-y: top;
  }
}
</style>
