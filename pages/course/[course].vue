<script setup>
import overview from "./overview.json";
const { course } = useRoute().params;

const courseDets = ref(overview.find((over) => over.id === course));

// console.log(courseDets);
</script>

<template>
  <section class="course-overview">
    <div class="container">
      <div class="course-card">
        <div class="row">
          <div class="col col-lg-7">
            <h1 class="mb-4">
              <!-- Stock Market Course -<br />
              Beginners Module -->
              {{ courseDets.heading }}
            </h1>
            <div class="d-flex align-items-end">
              <h5 class="me-2">9</h5>
              Chapters
              <h5 class="ms-5 me-2">2:30</h5>
              Hours
            </div>
            <p class="mt-4">
              Investing provides financial stability, and the Stock market plays
              an important role when it comes to generating returns which can
              beat inflation, stock market it is a place where people buy/sell
              shares of publicly listed companies. In this module, you will know
              more about the basic of stock market, how to get started, how it
              functions and the various intermediaries that appertain it.
              <a href="" class="text-decoration-underline">MORE</a>
            </p>
            <a
              href="/course/stock-market-basics"
              type="button"
              class="btn effect hero-btn rounded-pill btn-lg me-md-2 blue btn-101 mt-3"
              >Learn More
            </a>
          </div>
          <div
            class="col col-lg-5 d-flex justify-content-center align-items-center"
          >
            <div class="overview-img text-center">
              <img
                src="https://www.5paisa.com/finschool/wp-content/uploads/2021/10/Stock-Market-Basics.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="row mt-5 pt-5">
          <div class="col">
            <h5 class="mb-3">WHAT YOU WILL LEARN</h5>
            <p>
              You might have come across jargons like NIFTY, SENSEX, MCap, Short
              selling, IPO and so many more. The concepts seem to be difficult
              to understand but are actually very easy to understand if you try
              to relate it to practical examples. The course will be helpful for
              beginners looking to start investment in stock markets and it is
              also useful for learners from a non-finance background.
            </p>
          </div>
          <div class="col ps-5">
            <h5 class="mb-3">SKILLS YOU WILL GAIN</h5>
            <ul>
              <li>Get a Basic Understanding of how stock markets work</li>
              <li>Why & How Should One Invest</li>
              <li>Money Management Skills</li>
              <li>Risk Management Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.course-overview {
  margin-top: 164px;
  padding-bottom: 80px;
}

.course-card {
  padding: 20px;
  padding-bottom: 60px;
}

.course-card h5 {
  margin-bottom: 2px;
}

.overview-img {
  width: 100%;
  max-width: 300px;
}

.hero-btn {
  padding: 8px 100px;
}
</style>
