<script setup></script>

<template>
  <section class="pop-up">
    <div class="form-container">
      <div class="left-part">
        <img src="/images/Grow-Indication.webp" height="510" alt="" />
      </div>
      <div class="right-part">
        <h1>Now Start Learning Freely</h1>
        <form
          action="https://submit.jotform.com/submit/233248955667471"
          method="POST"
          id="myForm"
        >
          <label for="name"
            ><input
              id="name"
              minlength="3"
              maxlength="50"
              type="text"
              name="q1_typeA"
              placeholder="Name"
              required /></label
          ><label for="Number"
            ><input
              id="Number"
              type="tel"
              name="q2_2"
              minlength="10"
              placeholder="Mobile Number"
              maxlength="10"
              required /></label
          ><label for="city"
            ><input
              id="city"
              minlength="3"
              type="text"
              name="q3_3"
              placeholder="City"
              required /></label
          ><label for="job"
            ><select
              class="form-select"
              aria-label="Default select example"
              name="q4_selectYour"
              id="job"
              required
            >
              <option value="">Select your profession</option>
              <option value="government">Government Job</option>
              <option value="private">Private Job</option>
              <option value="self">Self Employed</option>
              <option value="student">Student</option>
            </select></label
          ><label for="experience"
            ><select
              class="form-select"
              aria-label="Default select example"
              id="experience"
              name="q5_selectYour5"
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="experienced">Experienced</option>
            </select></label
          ><button id="btnSubmit" class="btn-101" type="submit">
            Let's succeed together
          </button>
        </form>
      </div>
      <img id="close" src="/icons/close.png" alt="" />
    </div>
  </section>
</template>

<style scoped></style>
