<script setup>
import { inject } from "vue";
import headerPic from "@/img/header.jpg";
const device = inject("device");
</script>

<template>
  <div>
    <div class="p-5 mb-32">
      <div
        :class="['header relative w-full  h-screen p-5 bg-cover bg-center  text-white text-center',
         {'bg-fixed ': device === 'pc'},
        {'  ': device === 'mobile'}]"
        :style="{ 'background-image':` url(${headerPic}) `}"
      ></div>
    </div>
  </div>
</template>
<style scoped>
/* html {
  height: 100%;
} */
/* .header::before {
  contain: "";
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-color: transparent;
  background-image: url(./img/header.jpg);
} */
</style>
