<script setup>
import overview from "./overview.json"

const overviews = ref(overview);

function limitWords(str, limit) {
  return str.split(" ").slice(0, limit).join(" ");
}
</script>

<template>
  <section class="course">
    <div class="container">
      <div class="row row-cols-lg-3">
        <div v-for="over in overviews" class="col">
          <div class="course-card text-center">
            <div class="img">
              <img :src="over.image" alt="" />
            </div>
            <h5 class="mt-4">{{ limitWords(over.heading, 3) }}</h5>
            <div class="time-to-read">
              <span>
                <i class="ri-time-fill"></i>
                {{ over.time.time }} Hours
              </span>
              <span class="ms-2">
                <i class="ri-book-fill"></i>
                {{ over.chapters.chapter }} Chs
              </span>
            </div>
            <a
              :href="'/course/'+over.id"
              type="button"
              class="btn d-block effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101 mt-3"
              >Start Learning
            </a>
          </div>
        </div>
        <!-- <div class="col">
          <div class="course-card text-center">
            <div class="img">
              <img
                src="https://www.5paisa.com/finschool/wp-content/uploads/2021/10/Stock-Market-Basics.svg"
                alt=""
              />
            </div>
            <h5 class="mt-4">Options Scalping</h5>
            <div class="time-to-read">
              <span>
                <i class="ri-time-fill"></i>
                2:30 Hours
              </span>
              <span class="ms-2">
                <i class="ri-book-fill"></i>
                12 Chs
              </span>
            </div>
            <a
              href="/course/options-scalping"
              type="button"
              class="btn d-block effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101 mt-3"
              >Start Learning
            </a>
          </div>
        </div>
        <div class="col">
          <div class="course-card text-center">
            <div class="img">
              <img
                src="https://www.5paisa.com/finschool/wp-content/uploads/2021/10/10.svg"
                alt=""
              />
            </div>
            <h5 class="mt-4">Option Strategies</h5>
            <div class="time-to-read">
              <span>
                <i class="ri-time-fill"></i>
                2:15 Hours
              </span>
              <span class="ms-2">
                <i class="ri-book-fill"></i>
                9 Chs
              </span>
            </div>
            <a
              href="/course/option-strategies"
              type="button"
              class="btn d-block effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101 mt-3"
              >Start Learning
            </a>
          </div>
        </div>
        <div class="col">
          <div class="course-card text-center">
            <div class="img">
              <img
                src="https://www.5paisa.com/finschool/wp-content/uploads/2021/10/Fundamental-Analysis.svg"
                alt=""
              />
            </div>
            <h5 class="mt-4">Fundamental Analysis</h5>
            <div class="time-to-read">
              <span>
                <i class="ri-time-fill"></i>
                3:15 Hours
              </span>
              <span class="ms-2">
                <i class="ri-book-fill"></i>
                14 Chs
              </span>
            </div>
            <a
              href="/course/fundamental-analysis"
              type="button"
              class="btn d-block effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101 mt-3"
              >Start Learning
            </a>
          </div>
        </div>
        <div class="col">
          <div class="course-card text-center">
            <div class="img">
              <img
                src="https://www.5paisa.com/finschool/wp-content/uploads/2021/10/Technical-Analysis.svg"
                alt=""
              />
            </div>
            <h5 class="mt-4">Technical Analysis</h5>
            <div class="time-to-read">
              <span>
                <i class="ri-time-fill"></i>
                2:45 Hours
              </span>
              <span class="ms-2">
                <i class="ri-book-fill"></i>
                11 Chs
              </span>
            </div>
            <a
              href="/course/technical-analysis"
              type="button"
              class="btn d-block effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101 mt-3"
              >Start Learning
            </a>
          </div>
        </div>
        <div class="col">
          <div class="course-card text-center">
            <div class="img">
              <img
                src="https://www.5paisa.com/finschool/wp-content/uploads/2021/10/g12-2.svg"
                alt=""
              />
            </div>
            <h5 class="mt-4">Technical Indicators</h5>
            <div class="time-to-read">
              <span>
                <i class="ri-time-fill"></i>
                2:00 Hours
              </span>
              <span class="ms-2">
                <i class="ri-book-fill"></i>
                8 Chs
              </span>
            </div>
            <a
              href="/free-courses"
              type="button"
              class="btn d-block effect hero-btn rounded-pill btn-lg px-4 me-md-2 blue btn-101 mt-3"
              >Start Learning
            </a>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.course {
  margin-top: 164px;
  padding-bottom: 80px;
}

.course-card {
  padding: 20px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.18) 0 2px 4px;
  border-radius: 15px;
}

.img {
  position: relative;
  top: -50%;
}

.img img {
  height: 150px;
}
</style>
