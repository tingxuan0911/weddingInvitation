<script setup>
import bride from "@/img/bride.jpg";
import groom from "@/img/groom.jpg";
</script>

<template>
  <div>
    <div class="max-w-[640px] mx-auto my-20">
      <!-- 新娘 -->
      <div class="flex justify-between items-center">
        <div
          class="relative w-[35%] aspect-[3/4] p-5 bg-cover bg-center text-white"
          :style="{ 'background-image': `url(${bride})` }"
        >
          <div
            class="absolute top-12 left-[-31px] text-2xl font-bold tracking-widest rotate-90"
          >BRIDE</div>
        </div>
        <div class="w-[60%]">
          <div class="text-xl font-bold mb-3">Gabrielle</div>
          <div class="mb-1">introduce yourself</div>
          <div class="mb-1">introduce yourself</div>
          <div class="mb-1">introduce yourself</div>
        </div>
      </div>
      <!-- 分隔 -->
      <div class="flex justify-center items-center my-16">
        <div class="text-xs font-bold">you have the hands that I want to hold</div>
        <div
          class="mx-5 w-[30px] py-2 text-xs text-center border border-[--main-text-color] rounded-full"
        >
          J
          <br />&
          <br />G
        </div>
        <div class="text-xs font-bold">finding you was like coming home</div>
      </div>
      <!-- 新郎 -->
      <div class="flex justify-between items-center">
        <div class="w-[60%] text-end">
          <div class="text-xl font-bold mb-3">Jay</div>
          <div class="mb-1">introduce yourself</div>
          <div class="mb-1">introduce yourself</div>
          <div class="mb-1">introduce yourself</div>
        </div>
        <div
          class="relative w-[35%] aspect-[3/4] p-5 bg-cover bg-center text-white"
          :style="{ 'background-image': `url(${groom})` }"
        >
          <div
            class="absolute top-14 right-[-45px] text-2xl font-bold tracking-widest -rotate-90"
          >GROOM</div>
        </div>
      </div>
    </div>
  </div>
</template>