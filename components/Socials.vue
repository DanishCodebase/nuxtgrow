<script setup>
import { ref } from "vue";

useHead({
  link: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      rel: "stylesheet",
    },
  ],
});

const isSocialVisible = ref(false);
const isLeftBtnVisible = ref(true);

let hoverTimeout;

const onMouseEnter = () => {
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    isSocialVisible.value = true;
    isLeftBtnVisible.value = false;
  }, 50);
};

const onMouseLeave = () => {
  clearTimeout(hoverTimeout);
  hoverTimeout = setTimeout(() => {
    isSocialVisible.value = false;
    isLeftBtnVisible.value = true;
  }, 500);
};
</script>

<template>
  <div
    v-if="isLeftBtnVisible"
    class="left-btn"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <a class="hero-btn">CONTACT US</a>
  </div>
  <div
    class="social"
    :class="{ 'social-hidden': !isSocialVisible }"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <ul>
      <li>
        <a href="https://www.linkedin.com/company/resilient-grow"
          >Linkedin
          <i
            style="background-color: #0a66c2; color: #fff"
            class="fa fa-linkedin"
          ></i
        ></a>
      </li>
      <li>
        <a href="https://www.youtube.com/@resilientgrow"
          >Youtube
          <i
            style="background-color: red; color: #fff"
            class="fa fa-youtube-play"
          ></i
        ></a>
      </li>
      <li>
        <a href="https://www.facebook.com/share/12BGYF1QzjG/"
          >Facebook
          <i
            style="text-align: center; background-color: #1877f2; color: #fff"
            class="fa fa-facebook"
          ></i>
        </a>
      </li>
      <li>
        <a href="https://wa.link/0nflac"
          >Whatsapp
          <i
            style="text-align: center; background-color: #24d366; color: #fff"
            class="fa fa-whatsapp"
          ></i>
        </a>
      </li>
      <li>
        <a href="https://t.me/resilientgrow"
          >Telegram
          <i
            style="text-align: center; background-color: #fff; color: #039be5"
            class="fa fa-telegram"
          ></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/resilient.grow/"
          >Instagram
          <i
            style="
              text-align: center;
              background: linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7);
              color: white;
            "
            class="fa fa-instagram"
          ></i>
        </a>
      </li>
      <li>
        <a href="https://x.com/resilientgrow"
          >Twitter
          <i
            style="text-align: center; background-color: #03a9f4; color: white"
            class="fa fa-twitter"
          ></i
        ></a>
      </li>
    </ul>
  </div>
  <div class="right-btn">
    <a class="hero-btn" href="https://p.njw.bz/25753">OPEN AN ACCOUNT</a>
  </div>
</template>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}

.social {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s;
}

.social:not(.social-hidden) {
  opacity: 1;
  visibility: visible;
}

.social,
.right-btn,
.left-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

.right-btn {
  right: -72px;
  transform: rotate(270deg) !important;
}

.left-btn {
  left: -52px;
  transform: rotate(90deg) !important;
}

.right-btn a,
.left-btn a {
  font-size: 14px;
}

.social ul {
  padding: 0px;
  transform: translate(-215px, 0);
}
.social ul li {
  display: block;
  margin: 5px;
  background: rgba(0, 0, 0, 0.36);
  width: 250px;
  text-align: right;
  padding: 5px;
  border-radius: 0 30px 30px 0;
  transition: all 1s;
}
.social ul li:hover {
  transform: translate(90px, 0);
  background: rgba(0, 0, 0, 0.4);
}
.social ul li:hover a {
  color: #000;
}
.social ul li:hover i {
  color: #fff;
  background: rgba(0, 0, 0, 0.36);
  transform: rotate(360deg) !important;
  transition: all 1s;
}
.social ul li i {
  margin-left: 10px;
  color: #000;
  background: #fff;
  padding: 5px;
  border-radius: 50%;
  width: 30px !important;
  height: 30px !important;
  font-size: 20px !important;
  background: #ffffff;
  transform: rotate(0deg);
}

@media (max-width: 768px) {
  .left-btn,
  .right-btn,
  .social {
    display: none;
  }
}
</style>
