<script setup>
definePageMeta({
  layout: "only",
});

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Baloo Bhai:wght@400&display=swap",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jsrsasign/10.1.0/jsrsasign-all-min.js",
      defer: "defer",
      type: "text/javascript",
    },
    {
      src: "/js/phonepe.js",
      defer: "defer",
      type: "text/javascript",
    },
  ],
});

const name = ref("");
const amount = ref("");
const number = ref("");

const makePayment = async () => {
  try {
    const { data } = await useFetch("/api/makePayment", {
      method: "POST",
      body: {
        name: name.value,
        amount: amount.value,
        number: number.value,
      },
    });

    if (data) {
      window.location.href = data.value;
      // console.log(data.value);
    } else {
      // Handle response if payment was not successful
      console.error("Payment Error:", data.error);
    }
  } catch (error) {
    console.error("Error making payment:", error);
  }
};
</script>

<template>
  <div class="container phonepe">
    <a id="cut" class="cut">
      <img height="16" width="16" src="../public/icons/close.png" alt="" />
    </a>
    <div class="brand-logo">
      <img src="/images/phonepe.png" width="80" alt="" />
    </div>
    <div class="brand-title">PhonePe</div>
    <form @submit.prevent="makePayment">
      <input
        type="text"
        v-model="name"
        id="name"
        name="name"
        placeholder="Name"
        required
      />
      <input
        type="number"
        id="amount"
        v-model="amount"
        name="amount"
        placeholder="Amount"
        required
      />
      <input
        type="tel"
        v-model="number"
        name="number"
        id="number"
        placeholder="Mobile Number"
      />
      <button type="submit">PAY NOW</button>
    </form>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 350px;
  height: 500px;
  background-color: #ecf0f3;
  padding: 40px;
  text-align: center;
  border-radius: 20px;
  /* box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  opacity: 0;
}

.cut {
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
}

.brand-logo {
  margin: auto;
  width: 100px;
  height: 100px;
  box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.brand-title {
  margin-top: 10px;
  font-weight: 900;
  font-size: 1.8rem;
  color: #582d98;
  font-family: "Baloo Bhai";
  letter-spacing: 1px;
}

form {
  text-align: left;
  margin-top: 30px;
}

input::placeholder {
  color: #582d98;
}

input {
  background: #ecf0f3;
  padding: 10px;
  margin-bottom: 15px;
  padding-left: 20px;
  height: 50px;
  font-size: 14px;
  border-radius: 50px;
  box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
}

input,
button {
  display: block;
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
}

button {
  color: white;
  margin-top: 20px;
  background: #582d98;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
  transition: 0.5s;
}

@media (max-width: 380px) {
  .container {
    max-width: 320px;
    height: 470px;
    margin: 0 20px;
    padding: 20px 30px;
  }
}

@media (max-width: 360px) {
  form {
    margin-top: 15px;
  }
}
</style>
