<script setup>
useHead({
  script: [
    {
      src: "/js/reviews",
      defer: "defer",
      type: "text/javascript",
    },
  ],
});
</script>

<template>
  <section id="reviews" class="reviews color black">
    <h2 class="text-center text-light text-capitalize">
      What people say about us?
    </h2>
    <p class="text-light mt-4 mb-5 text-center">
      Pay attention to others words, not to us only.
    </p>
    <div class="owl-carousel owl-theme pt-3 mt-5">
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita dicta doloremque odit saepe quo natus aut accusantium alias
            blanditiis.
          </div>
          <div class="name">Denis Richie</div>
        </div>
      </div>
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita dicta doloremque odit saepe quo natus aut accusantium alias
            blanditiis.
          </div>
          <div class="name">Lisa Sthalekar</div>
        </div>
      </div>
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita dicta doloremque odit saepe quo natus aut accusantium alias
            blanditiis.
          </div>
          <div class="name">Elizabith Richie</div>
        </div>
      </div>
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita dicta doloremque odit saepe quo natus aut accusantium alias
            blanditiis.
          </div>
          <div class="name">Daniel Xavier</div>
        </div>
      </div>
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita dicta doloremque odit saepe quo natus aut accusantium alias
            blanditiis.
          </div>
          <div class="name">Emma Watson</div>
        </div>
      </div>
      <div class="owl-item">
        <div class="card">
          <div class="img-card">
            <img
              src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
          <div class="testimonial mt-4 mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            expedita dicta doloremque odit saepe quo natus aut accusantium alias
            blanditiis.
          </div>
          <div class="name">Mohammad Imran</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#reviews h2,
#reviews p {
  color: #fff !important;
}

.reviews {
  padding: 90px 0;
}

.reviews p.text-light {
  font-size: 24px;
  margin-top: 2rem !important;
  margin-bottom: 60px !important;
}

.owl-carousel .owl-item {
  transition: all 0.3s ease-in-out;
}

.owl-carousel .owl-item .card {
  padding: 30px !important;
  position: relative !important;
  overflow:visible;
}

.owl-carousel .owl-stage-outer {
  overflow-y: auto !important;
  padding-bottom: 40px !important;
}

.owl-carousel .owl-item img {
  height: 200px !important;
  object-fit: cover !important;
  border-radius: 6px !important;
  width: 100% !important;
}

.owl-carousel .owl-item .card .name {
  position: absolute !important;
  bottom: -20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  color: #6ec205 !important;
  font-size: 1.1rem !important;
  font-weight: 600 !important;
  white-space: nowrap !important;
  background-color: #fff !important;
  padding: 0.3rem 0.4rem !important;
  border-radius: 5px !important;
  box-shadow: 2px 3px 15px #3c405a;
}

.owl-carousel .owl-item .card {
  opacity: 0.5!important;
  transform: scale3d(0.8, 0.8, 0.8)!important;
  transition: all 0.3s ease-in-out;
  height: auto!important;
}

.owl-carousel .owl-item.active.center .card {
  opacity: 1!important;
  transform: scale3d(1, 1, 1)!important;
}

.owl-carousel .owl-dots {
  display: inline-block!important;
  width: 100%!important;
  text-align: center!important;
}

.owl-theme .owl-dots .owl-dot span {
  height: 20px!important;
  background: #fff !important;
  opacity: 0.8!important;
}

.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  height: 13px!important;
  width: 13px!important;
  opacity: 1!important;
  transform: translateY(2px)!important;
  background: #fff !important;
}

@media (min-width: 480.6px) and (max-width: 575.5px) {
  .owl-carousel .owl-item .card .name {
    left: 24%!important;
  }
}

@media (max-width: 360px) {
  .owl-carousel .owl-item .card .name {
    left: 30%!important;
  }
}

.lappi {
  width: 70vw;
}

/* .rev-cover {
    position: relative;
} */

#carouselExampleInterval {
  width: 55%!important;
  position: absolute!important;
  top: 5.8vh!important;
  left: 19.3vw!important;
}
</style>
