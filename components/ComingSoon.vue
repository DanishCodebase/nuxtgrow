<template>
  <div>
    <a class="fs-6" href="/">Go back to home page</a>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
div {
  height: 100vh;
  background-image: url("/images/cooming\ soon.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 25px;
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
  div {
    background-image: url("/images/coming-soon-sm.webp");
    background-position-x: center;
    background-position-y: top;
  }
}
</style>
