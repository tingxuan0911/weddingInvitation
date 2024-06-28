<script setup>
import { inject } from "vue";
import mapPic from "@/img/map.webp";
const device = inject("device");
</script>

<template>
  <div>
    <div :class="[' mb-32',{'flex items-center gap-[2%]': device === 'pc'}]">
      <div
        :class="['relative h-fit  px-5 bg-[--main-text-color] text-white'
      ,{ 'w-[70%] py-20': device === 'pc'},
        {'  w-[100%] py-14': device === 'mobile'}]"
      >
        <div class="absolute -top-6 text-[--main-text-color] left-6 text-2xl font-bold">MAP</div>
        <div class="w-fit mx-auto">
          <div class="text-2xl font-bold">抱一茶屋</div>
          <div class="text-sm font-light mt-2 mb-8">高雄市鼓山區美術館路80號（高雄市立美術館園區內）</div>

          <div class="text-sm font-light">
            <div class="mt-7">
              <i class="fa-solid fa-train mr-1"></i>輕軌
            </div>
            <div class="mt-2 ml-5">搭乘輕軌至C21站-美術館站，沿步道步行約10分鐘</div>
            <div class="mt-7">
              <i class="fa-solid fa-train-subway mr-1"></i>台鐵
            </div>
            <div class="mt-2 ml-5">搭乘區間車至台鐵美術館站，出站步行約15-20分鐘</div>
            <div class="mt-7">
              <i class="fa-solid fa-car mr-1"></i>開車
            </div>
            <div class="mt-2 ml-5">可將車輛停至停車場</div>
          </div>
        </div>
      </div>
      <div
        :class="[{ 'w-[25%]': device === 'pc'},
        {' w-[80%] mx-auto mt-8': device === 'mobile'}]"
      >
        <img :src="mapPic" alt />
      </div>
    </div>
  </div>
</template>