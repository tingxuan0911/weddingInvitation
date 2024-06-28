<script setup>
import { inject } from "vue";
import headerPic from "@/img/header.jpg";
const device = inject("device");
</script>

<template>
  <div>
    <div class="p-5 mb-32">
      <div
        :class="[' relative w-full  h-screen p-5 bg-cover bg-center  bg-fixed text-white text-center',
         {'bg-fixed ': device === 'pc'},
        {'  ': device === 'mobile'}]"
        :style="{ 'background-image':` url(${headerPic}) `}"
      ></div>

      <div class="header relative w-full h-screen p-5 text-white text-center">
        Using the container
        The container class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if you’d prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.
        Note that unlike containers you might have used in other frameworks, Tailwind’s container does not center itself automatically and does not have any built-in horizontal padding.
        To center a container, use the mx-auto utility:
      </div>
    </div>
  </div>
</template>
<style scoped>
html {
  height: 100%;
}
.header::before {
  contain: "";
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-color: transparent;
  background-image: url(${headerPic});
}
</style>
