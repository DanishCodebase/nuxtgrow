<script setup>
useHead({
  script: [
    {
      src: "/js/login.js",
      defer: "defer",
      type: "text/javascript",
    },
  ],
});

import { ref } from "vue";
import { account, ID } from "@/server/appwrite";
import { useToast } from "vue-toastification";

const name = ref("");
const email = ref("");
const password = ref("");
const loggedInUser = ref(null);

const toast = useToast();

// Function to check if a session is already active
const checkSession = async () => {
  try {
    const user = await account.get();
    loggedInUser.value = user;
  } catch (error) {
    loggedInUser.value = null; // No active session
  }
};

const login = async (email, password) => {
  try {
    if (!loggedInUser.value) {
      await account.createEmailPasswordSession(email, password);
      loggedInUser.value = await account.get();
    } else {
      console.log("User is already logged in.");
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error("Login failed. Please try again. Error: " + error.message);
  }
};

const registerUser = async () => {
  try {
    // Step 1: Add user details to the database collection
    await account.create(ID.unique(), email.value, password.value, name.value);

    // Step 2: Log the user in only if they are not already logged in
    await login(email.value, password.value);

    toast.success("User data submitted successfully!");
  } catch (error) {
    console.error("Data submission error:", error);
    toast.success(
      "Data submission failed. Please try again. Error: " + error.message
    );
  }
};

// Check for an existing session when the component loads
checkSession();
</script>

<template>
  <section v-if="!loggedInUser" class="free-course">
    <div class="container">
      <h1>Let's Start Free Learning Now</h1>
      <nav class="mt-4 px-4 px-sm-5">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Free Videos
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Free Materails
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div class="free-grid justify-content-center d-grid text-center">
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/Doji.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/three-outside-down.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bulish-kicker.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bullish-pinbar.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bearish-kicker.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/three-inside-up.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bearish-marubozu.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bullish-marubozu.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/morning-star.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/gravestone-doji.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/spinning-top.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bearish-harami.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/bullish-engulfing.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/shooting-star.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/Inverted-hammer.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/hanging-man.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="free-courses position-relative">
              <img
                alt=""
                width="280"
                height="500"
                class="c-video"
                src="https://danishcodebase.github.io/Email-Template/images/hammer.jpg"
              /><svg
                class="svg position-absolute top-50 start-50 translate-middle"
                fill="none"
                height="90"
                viewBox="0 0 87 115"
                width="62"
              >
                <path
                  clip-rule="evenodd"
                  d="M83.99 10.81C90.08 21.24 86.62 34.66 76.26 40.79L69.05 45.06L74.17 47.38C81.58 50.74 86.52 57.99 86.96 66.17C87.40 74.34 83.27 82.09 76.26 86.24L32.76 111.97C22.41 118.10 9.08 114.61 3.00 104.18C-3.08 93.75 .37 80.33 10.73 74.20L17.94 69.93L12.82 67.61C5.41 64.25 .47 57.00 .03 48.82C-0.40 40.65 3.72 32.90 10.73 28.75L54.23 3.02C64.58 -3.10 77.91 .38 83.99 10.81Z"
                  fill="#f00"
                  fill-rule="evenodd"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M33 74L33 41L61 57.5L33 74Z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div class="mt-3 px-4 px-sm-5 row row-cols-1 row-cols-md-2 g-5">
            <div class="col">
              <div class="card">
                <img
                  src="/images/ATR.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/SuperTrend.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/VWAP.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/MovingAverage.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/PCR.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/OptionGreeks.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/RSI.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/bollinger bands.png"
                  class="card-img-top c-video"
                  alt="bollinger bands image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/Support and Resistance.png"
                  class="card-img-top c-video"
                  alt="Ascending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/gap-up and gap-down.png"
                  class="card-img-top c-video"
                  alt="Descending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/MACD.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/Ascending triangle.png"
                  class="card-img-top c-video"
                  alt="Ascending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/Descending triangle.png"
                  class="card-img-top c-video"
                  alt="Descending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/bullish flag.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/bullish pennat.png"
                  class="card-img-top c-video"
                  alt="bollinger bands image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/bump and run.png"
                  class="card-img-top c-video"
                  alt="Ascending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/cup and handle.png"
                  class="card-img-top c-video"
                  alt="Ascending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/double top.png"
                  class="card-img-top c-video"
                  alt="Descending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/double bottom.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/falling wedge.png"
                  class="card-img-top c-video"
                  alt="bollinger bands image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/head & shoulders.png"
                  class="card-img-top c-video"
                  alt="Ascending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/Inverse head & shoulders.png"
                  class="card-img-top c-video"
                  alt="Descending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/price channel.png"
                  class="card-img-top c-video"
                  alt="Descending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/rounding bottom.png"
                  class="card-img-top c-video"
                  alt="RSI image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/symmetrical triangle.png"
                  class="card-img-top c-video"
                  alt="bollinger bands image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/triple top pattern.png"
                  class="card-img-top c-video"
                  alt="Ascending triangle image"
                />
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="/images/triple bottom pattern.png"
                  class="card-img-top c-video"
                  alt="Descending triangle image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="loggedInUser" class="free-course">
    <div class="container">
      <h1>Let's Start Free Learning Now</h1>
      <nav class="mt-4 px-4 px-sm-5">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Free Videos
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Free Materails
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div class="free-grid justify-content-center d-grid text-center">
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/o_dBxEl1458"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/ncOwuVc6RGg"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/1zzzQlZe3p8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/Qnztvj9YwiE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/VtptxpFMRuc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/lx7IvEa38uA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/XM_PRoF2-Ms"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/UlyGksZzbbw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/bacrEmpY0SQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/s4AA1syNyco"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/hGN_PuFtGD0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/75DTFxejXko"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/A9t317p4X_k"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/o9e9mhSgbVk"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/FX-0Eg99s7w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/oetfEMrtnQ4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div class="free-courses video-placeholder position-relative">
              <iframe
                id="c-vid"
                width="280"
                height="500"
                src="https://www.youtube.com/embed/8SfNQIu6tio"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div class="mt-3 px-4 px-sm-5 row row-cols-1 row-cols-md-2 g-5">
            <div class="col">
              <div class="card">
                <a href="/pdfs/ATR.pdf">
                  <img
                    src="/images/ATR.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/SuperTrend.pdf">
                  <img
                    src="/images/SuperTrend.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/VWAP.pdf">
                  <img
                    src="/images/VWAP.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/MovingAverage.pdf">
                  <img
                    src="/images/MovingAverage.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/PCR.pdf">
                  <img
                    src="/images/PCR.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/OptionGreeks.pdf">
                  <img
                    src="/images/OptionGreeks.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/RSI.pdf">
                  <img
                    src="/images/RSI.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Bollinger Bands.pdf">
                  <img
                    src="/images/bollinger bands.png"
                    class="card-img-top"
                    alt="bollinger bands image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Support and Resistance.pdf">
                  <img
                    src="/images/Support and Resistance.png"
                    class="card-img-top"
                    alt="Ascending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Gap Up and Gap Down.pdf">
                  <img
                    src="/images/gap-up and gap-down.png"
                    class="card-img-top"
                    alt="Descending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="pdfs/MACD Indicator.pdf">
                  <img
                    src="/images/MACD.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Ascending triangle.pdf">
                  <img
                    src="/images/Ascending triangle.png"
                    class="card-img-top"
                    alt="Ascending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Descending triangle.pdf">
                  <img
                    src="/images/Descending triangle.png"
                    class="card-img-top"
                    alt="Descending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/bullish flag.pdf">
                  <img
                    src="/images/bullish flag.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Bullish Pennat.pdf">
                  <img
                    src="/images/bullish pennat.png"
                    class="card-img-top"
                    alt="bollinger bands image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Bum and Run.pdf">
                  <img
                    src="/images/bump and run.png"
                    class="card-img-top"
                    alt="Ascending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Cup and Handle.pdf">
                  <img
                    src="/images/cup and handle.png"
                    class="card-img-top"
                    alt="Ascending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Double top.pdf">
                  <img
                    src="/images/double top.png"
                    class="card-img-top"
                    alt="Descending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/double bottom.pdf">
                  <img
                    src="/images/double bottom.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/falling wedge.pdf">
                  <img
                    src="/images/falling wedge.png"
                    class="card-img-top"
                    alt="bollinger bands image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/head & shoulders.pdf">
                  <img
                    src="/images/head & shoulders.png"
                    class="card-img-top"
                    alt="Ascending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Inverse head & shoulders.pdf">
                  <img
                    src="/images/Inverse head & shoulders.png"
                    class="card-img-top"
                    alt="Descending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/price channel.pdf">
                  <img
                    src="/images/price channel.png"
                    class="card-img-top"
                    alt="Descending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/Rounding bottom.pdf">
                  <img
                    src="/images/rounding bottom.png"
                    class="card-img-top"
                    alt="RSI image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/symmetrical triangle.pdf">
                  <img
                    src="/images/symmetrical triangle.png"
                    class="card-img-top"
                    alt="bollinger bands image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/treeple top pattern.pdf">
                  <img
                    src="/images/triple top pattern.png"
                    class="card-img-top"
                    alt="Ascending triangle image"
                  />
                </a>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <a href="/pdfs/triple bottom pattern.pdf">
                  <img
                    src="/images/triple bottom pattern.png"
                    class="card-img-top"
                    alt="Descending triangle image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="!loggedInUser" class="pop-up">
    <div class="form-container">
      <!-- <div class="left-part">
        <img src="/images/Grow-Indication.webp" height="510" alt="" />
      </div> -->
      <div class="right-part">
        <h1>Now Start Learning Freely</h1>
        <form @submit.prevent="registerUser">
          <label for="Number"
            ><input
              v-model="name"
              id="Number"
              type="tel"
              minlength="10"
              placeholder="Mobile Number"
              maxlength="10"
              required
          /></label>
          <label for="email">
            <input
              v-model="email"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label for="password">
            <input
              v-model="password"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <button id="btnSubmit" class="btn-101" type="submit">
            Let's succeed together
          </button>
        </form>
        <a class="member1 mt-4">Already member?</a>
      </div>
      <img id="close" src="/icons/close.png" alt="" />
    </div>
  </section>

  <section v-if="!loggedInUser" class="pop-up" id="login">
    <div class="form-container">
      <div class="right-part">
        <h1>Now Start Learning Freely</h1>
        <div id="error" v-if="loginError">
          <button id="exclam">&#33;</button> Sorry, your login credentials are
          incorrect.
        </div>
        <form @submit.prevent="login(email, password)">
          <label for="email">
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label for="password">
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <button id="btnSubmit" class="btn-101" type="submit">
            Let's succeed together
          </button>
        </form>
        <span class="new">New to Resilient Grow?</span>
        <a class="member"> Become member</a>
      </div>
      <img id="close" class="close" src="/icons/close.png" alt="" />
    </div>
  </section>
</template>

<style scoped></style>
