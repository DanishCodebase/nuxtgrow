<script setup></script>

<template>
  <section class="footer">
    <div class="container px-lg-5">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col col-md-4 mb-3">
          <nuxt-link class="navbar-brand d-flex flex-column align-items-center" to="/"
            ><img
              src="/images/Resilient-Grow1.webp"
              height="50"
              width="79"
              alt=""
            /><span class="fs-6 fw-normal">Resilient Grow</span></nuxt-link
          >
          <p class="text-body-secondary mt-4">
            To deliver top-notch education and enable people to command their
            financial future & growth.
          </p>
          <div class="mnc-logos">
            <nuxt-link to="https://www.youtube.com/@resilientgrow" target="_blank"
              ><img src="/icons/youtube.png" alt="" /></nuxt-link
            ><nuxt-link to="https://www.facebook.com/resilientgrow1" target="_blank"
              ><img src="/icons/facebook.png" alt="" /></nuxt-link
            ><nuxt-link to="https://shorturl.at/loCD6" target="_blank"
              ><img src="/icons/whatsapp.png" alt="" /></nuxt-link
            ><nuxt-link to="https://t.me/resilientgrow" target="_blank"
              ><img src="/icons/telegram.png" alt="" /></nuxt-link
            ><nuxt-link to="https://www.instagram.com/resilient.grow/" target="_blank"
              ><img id="insta" src="/icons/instagram.png" alt="" /></nuxt-link
            ><nuxt-link
              to="https://twitter.com/resilientgrow"
              id="twitter"
              target="_blank"
              ><img src="/icons/twitter.png" alt=""
            /></nuxt-link>
          </div>
        </div>
        <div class="col mt-5 mt-md-0 w-auto cm mb-3">
          <h5>Company</h5>
          <ul class="nav flex-column">
            <li class="nav-item my-4">
              <nuxt-link to="/about" class="nav-link p-0 text-body-secondary"
                >About Us</nuxt-link
              >
            </li>
            <li class="nav-item mb-4">
              <nuxt-link to="/program" class="nav-link p-0 text-body-secondary"
                >Program</nuxt-link
              >
            </li>
            <li class="nav-item mb-4">
              <nuxt-link to="/refund" class="nav-link p-0 text-body-secondary"
                >Refund Policy</nuxt-link
              >
            </li>
            <li class="nav-item mb-4">
              <nuxt-link to="/policy" class="nav-link p-0 text-body-secondary"
                >Terms & Conditions</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col w-auto mt-5 mt-lg-0 cm-1 mb-3">
          <h5>Resources</h5>
          <ul class="nav flex-column">
            <li class="nav-item my-4">
              <nuxt-link to="/blog" class="nav-link p-0 text-body-secondary">Blog</nuxt-link>
            </li>
            <li class="nav-item mb-4">
              <nuxt-link to="/free-courses" class="nav-link p-0 text-body-secondary"
                >Free Courses<span class="ms-3 blink btn hero-btn rounded-pill">
                  Free</span
                ></nuxt-link
              >
            </li>
            <li class="nav-item mb-4">
              <nuxt-link to="/updates" class="nav-link p-0 text-body-secondary"
                >Market Updates</nuxt-link
              >
            </li>
            <li class="nav-item mb-4">
              <nuxt-link to="/certificate" class="nav-link p-0 text-body-secondary"
                >Download Certificate</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="col mt-5 mt-lg-0 mt-xl-0 wfit w-auto mb-3">
          <h5 class="text-capitalize">
            Support for this kind of more resources
          </h5>
          <nuxt-link to="/pay">
            <img class="mt-4" src="/images/qr.webp" width="160" alt="" />
          </nuxt-link>
        </div>
      </footer>
    </div>
  </section>

  <section class="disclaimer">
    <div class="container px-xl-5">
      <marquee
        behavior="scroll"
        direction="left"
        onmouseout="this.start();"
        onmouseover="this.stop();"
        scrolldelay="1"
        scrolldirection="left"
        >Disclaimer / Disclosure: All content provided in this channel is for
        informational and educational purposes only and is not meant to
        represent trade or investment recommendation. Kindly contact your
        financial advisor before taking any position/decision.</marquee
      >
    </div>
  </section>
</template>
