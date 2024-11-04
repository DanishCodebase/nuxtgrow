<script setup>
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
    toast.error("Data submission failed. Please try again. Error: " + error.message);
  }
};

const logout = async () => {
  await account.deleteSession("current");
  loggedInUser.value = null;
};

// Check for an existing session when the component loads
checkSession();
</script>

<template>
  <!-- <p>
    {{ loggedInUser ? `Logged in as ${loggedInUser.email}` : "Not logged in" }}
  </p> -->
  <!-- Show the pop-up only if the user is not logged in -->
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
      </div>
      <img id="close" src="/icons/close.png" alt="" />
    </div>
  </section>
  <!-- <button type="button" @click="logout">Logout</button> -->
</template>

<style scoped></style>
