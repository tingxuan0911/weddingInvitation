<script setup>
import headerPic from "@/img/header.jpg";
</script>

<template>
  <div>
    <div class="p-5 mb-32">
       <div
        class="relative w-full h-dvh p-5 bg-cover bg-center bg-fixed text-white text-center"
        :style="{ 'background-image': `url(${headerPic})` }"
      >
        <div class="text-xs">2024</div>
        <div class="text-2xl font-bold">We’re getting married</div>
        <div class="flex justify-between pt-3 mt-5 border-t border-white">
          <div>Jay & Gabrielle</div>
          <div>DEC.17</div>
        </div>
        <div class="absolute bottom-[10%] right-0 text-end text-3xl">
          please join us
          <br />and
          <br />celebrate togethe
        </div>
      </div>
    </div>
  </div>
</template>