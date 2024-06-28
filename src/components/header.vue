<script setup>
import { inject } from "vue";
import headerPic from "@/img/header.jpg";
const device = inject("device");
</script>

<template>
  <div>
    <div class="p-5 mb-32">
      <div class="relative w-full h-screen">
        <!-- 使用 ::before 伪元素显示背景图片 -->
        <div class="absolute inset-0 bg-cover bg-center"
             :style="{ backgroundImage: `url(${headerPic})` }"></div>

        <div class="flex flex-col justify-center items-center h-full text-white text-center">
          <div class="text-xs">2024</div>
          <div class="text-2xl font-bold">We’re getting married</div>
          <div class="flex justify-between pt-3 mt-5 border-t border-white">
            <div>Jay & Gabrielle</div>
            <div>DEC.17</div>
          </div>
          <div class="absolute bottom-[10%] right-0 text-end text-3xl">
            please join us
            <br />and
            <br />celebrate together
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* 背景图片的样式设置 */
.absolute {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${headerPic});
}
</style>