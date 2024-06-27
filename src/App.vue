<script setup>
import { ref, provide } from "vue";
import Header from "./components/header.vue";
import Introduce from "./components/introduce.vue";
import Celebrate from "./components/celebrate.vue";
import Timeline from "./components/timeline.vue";
import Map from "./components/map.vue";
import DressCode from "./components/dressCode.vue";
import Photo from "./components/photo.vue";
import Countdown from "./components/countdown.vue";
import Footer from "./components/footer.vue";

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
  <div class="text-[--main-text-color] tracking-widest">
    <Header />
    <Introduce />
    <Celebrate />
    <Map />
    <Timeline />
    <DressCode />
    <Photo />
    <Countdown />
    <Footer />
  </div>
</template>