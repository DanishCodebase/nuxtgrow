<script setup></script>

<template>
  <section class="pop-up cpu d-none visible opacity-100">
    <div class="d-grid gap-2 d-flex justify-content-start">
      <nuxt-link
        to="/free-courses"
        class="btn hero-btn rounded-pill py-md-2 blue px-4 px-md-5 me-3 me-md-4 fs-6 fs-md-5"
        id="free"
        >Free Courses
      </nuxt-link>
      <nuxt-link
        to="/#course"
        id="redirect"
        class="btn btn hero-btn rounded-pill py-md-2 px-4 px-md-5 blue fs-6 fs-md-5"
      >
        Paid Courses
      </nuxt-link>
    </div>
  </section>
</template>

<style scoped></style>
