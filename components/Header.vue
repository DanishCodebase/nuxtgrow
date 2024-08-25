<script setup></script>

<template>
  <button
    class="theme"
    type="button"
    data-theme-toggle
    aria-label="Change to light theme"
  ></button>
  <nav
    class="navbar position-fixed top-0 w-100 py-0 navbar-expand-lg white box-b"
  >
    <div class="container mx-lg-4 mx-xl-auto px-xl-5">
      <a
        class="navbar-brand d-flex flex-column align-items-center"
        href="/"
        ><img
          src="/images/Resilient-Grow1.webp"
          height="50"
          width="79"
          alt=""
        /><span class="fs-6 fw-normal" id="slogan"
          >Resilient Grow</span
        ></a
      ><button
        class="navbar-toggler rounded-pill blue"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path stroke="rgb(255, 255, 255)" d="M4 7h22M4 15h22M4 23h22" />
        </svg>
      </button>
      <div
        class="collapse navbar-collapse pb-5 pt-4 py-lg-0"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav align-items-center ms-lg-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#why">Why Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#offer">Offerings</a>
          </li>
          <!-- <li class="nav-item">
              <a class="nav-link" href="/#reviews">Reviews</a>
            </li> -->
          <li class="nav-item">
            <button class="nav-link" id="cours">Course</button>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">Contact Us</a>
          </li>
        </ul>
        <a
          href="https://fas.st/t/MSkxE2fJ"
          class="btn hero-btn effect btn--glow d-flex align-items-center mx-auto me-lg-0 ms-xl-5 rounded-pill mt-4 mt-lg-0 blue btn-101"
          type="submit"
          target="_blank"
          >Become A Pro Trader
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
