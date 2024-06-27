<script setup>
import { ref } from "vue";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
};
</script>

<template>
  <div>
    <div
      class="relative w-full bg-[--main-text-color] text-white text-center tracking-widest text-sm py-10"
    >
      <div
        @click="scrollToTop()"
        class="absolute -top-8 right-1/2 translate-x-1/2 aspect-square mx-auto p-4 text-zinc-400 font-bold bg-[--main-text-color] rounded-full cursor-pointer"
      >TOP</div>
      <div class="mb-5">期待與你們見面</div>
      <div class="mx-auto mb-5 w-[30px] py-2 text-xs text-center border border-white rounded-full">
        J
        <br />&
        <br />G
      </div>
      <div class="mb-2">
        WEB DEVELOPED BY © SHANNA / PHOTO ©
        <a href="https://www.pexels.com/zh-tw/">PEXELS</a>
      </div>
      <div>All rights reserved.</div>
    </div>
  </div>
</template>