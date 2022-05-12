<template>
  <div class="blueBg">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from "./Student.vue";
import School from "./School.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
html,
body {
  font-size: 1.2rem;
}

.blueBg {
  background-color: rgb(25, 125, 238);
  padding: 20px;
}
</style>
