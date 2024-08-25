<script setup></script>

<template>
  <section id="home" class="hero">
    <div class="container px-5 px-lg-5 py-5 py-xl-0">
      <div
        class="row flex-column-reverse flex-lg-row-reverse align-items-center py-5"
      >
        <div class="col-lg-6">
          <div class="vid-cover position-relative">
            <video class="lap" autoplay="autoplay" muted loop>
              <source src="/videos/hero-vid.mp4" />
            </video>
            <div class="unmute position-absolute">
              <img class="position-absolute" src="/icons/mute.png" alt="" />
            </div>
            <div class="mute position-absolute d-none">
              <img class="position-absolute" src="/icons/volume.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 video-box">
          <h1 class="display-5 fw-bold text-body-emphasis mb-3" id="heroh1">
            Change Your Trading Habit & It's Mindset
          </h1>
          <p class="lead my-4">
            Resilient Grow is a trusted choice for thousands of satisfied
            traders and investors in India. If you're eager to work toward your
            future goals, consider beginning your educational journey with us.
          </p>
          <div
            class="d-grid d-flex align-items-center justify-content-center justify-content-lg-start mt-5"
          >
            <nuxt-link
              to="https://wa.me/917524801556"
              type="button"
              class="btn btn--glow effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101"
              target="_blank"
              >Start Learning With Free Demo </nuxt-link
            ><nuxt-link
              to="https://t.me/resilientgrowofficial"
              type="button"
              class="btn rounded-pill ms-3 ms-lg-4 twitter btn-lg px-4"
              target="_blank"
              ><img
                class="rounded-pill"
                src="/icons/telegram.gif"
                width="40"
                height="40"
                alt=""
            /></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


