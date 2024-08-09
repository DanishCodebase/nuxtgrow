<script setup>
const cardData = [
  {
    image: "/icons/workshop.png",
    heading: "Practical Learning, Real Earnings",
    description:
      "We believe in teaching you strategies that work in the real world. Our course focuses on practical knowledge that can help you earn, not just theories that sound good on paper.",
  },
  {
    image: "/icons/personalized.png",
    heading: "Personalized Support",
    description:
      "Learning at your own pace is important. That's why we offer personalized support to ensure you understand and apply what you learn effectively.",
  },
  {
    image: "/icons/tools.png",
    heading: "Unique Tools for Success",
    description:
      "Access unique analysis tools and resources not available elsewhere. Stay ahead in trading technology and techniques.",
  },
  {
    image: "/icons/bulb.png",
    heading: "Gain Expert Guidance",
    description:
      "Get tips and tricks from experienced traders who share what they do every day. Learn from those who've been in the field and can show you how things work in real life.",
  },
  {
    image: "/icons/investment.png",
    heading: "Safe Investments, Big Gains",
    description:
      "Staying safe with your money is super important in trading. Our course teaches you ways to protect your investments and increase your chances of doing well.",
  },
  {
    image: "/icons/mountain.png",
    heading: "Your Path to Success",
    description:
      "Our course is your path to success in evolving markets. With lifetime updates, you'll always have the latest trading techniques and trends at your fingertips.",
  },
  {
    image: "/icons/partnership.png",
    heading: "Connect, Ask, Achieve",
    description:
      "Become part of our trader community, where you can share experiences, ask questions, and get continuous support. You're never alone on your journey to success.",
  },
  {
    image: "/icons/education.png",
    heading: "Education for All",
    description:
      "Quality education should be affordable. Our course offers excellent value for both beginners and experienced traders, making it accessible to everyone.",
  },
];
</script>

<template>
  <section id="why" class="reviews">
    <div class="cover">
      <h2 class="text-center text-capitalize">how we are different?</h2>
      <!-- <h2 class="text-center text-capitalize">What people say about us?</h2> -->
      <!-- <p class="mt-4 mb-5 text-center">
      Pay attention to others words, not to us only.
    </p> -->
      <div class="why owl-carousel owl-theme pt-3 mt-5">
        <div v-for="card in cardData" class="owl-item">
          <div class="card why-card">
            <div class="card-img">
              <img :src="card.image" width="100" alt="" />
            </div>
            <h4 class="my-4 text-capitalize">{{ card.heading }}</h4>
            <p>
              {{ card.description }}
            </p>
          </div>
        </div>
        <div class="owl-item">
          <div class="card why-card">
            <div class="card-img">
              <img src="/icons/unorganized.png" width="100" alt="" />
              <img class="clos" src="/icons/cancel.png" width="100" alt="" />
            </div>
            <h4 class="my-4 text-capitalize">Simplify Your Finances</h4>
            <p>
              No more confusing finance talk! We keep it simple. Our reports and
              advice are easy to understand. Investing should be as clear as
              day, not a foreign language.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
