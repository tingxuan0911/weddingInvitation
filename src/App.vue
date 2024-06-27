<script setup>
import { ref, provide } from "vue";
import main from "./components/main.vue";
import footer from "./components/footer.vue";
// 裝置監聽
const device = ref("");
provide("device", device);
const windowWidth = ref(window.innerWidth);
const handleWindowResize = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value >= "768") {
    device.value = "pc";
  } else {
    device.value = "mobile";
  }
};
handleWindowResize();

window.addEventListener("resize", handleWindowResize);
</script>

<template>
  <div>
    <main />
    <footer />
  </div>
</template>