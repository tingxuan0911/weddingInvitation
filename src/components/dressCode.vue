<script setup>
import { ref, inject } from "vue";
import dresscode from "@/img/dresscode.jpg";
const device = inject("device");

const dressColor = ref([
  {
    color: "WHITE",
    background: "#fff"
  },
  {
    color: "BEIGE",
    background: "#E2DCD6"
  },
  {
    color: "GREY",
    background: "#1E1E1E"
  },
  {
    color: "DARK BLUE",
    background: "#1F1F30"
  }
]);
</script>
<template>
  <div class="p-5 mb-20">
    <div
      :class="['relative w-full h-fit py-32 bg-cover bg-center text-white text-center p-5',
      {' bg-fixed': device === 'pc'}]"
      :style="{ backgroundImage: `url(${dresscode})` }"
    >
      <!-- 背景圖片 -->
      <div
        class="absolute -z-10 top-0 right-0 inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${dresscode})` }"
      ></div>
      <div>
        <div class="text-2xl font-bold mb-20">Dress Code</div>
        <div
          class="flex flex-wrap justify-center items-end gap-[60px] mx-auto w-[300px] sm:w-[600px]"
        >
          <div v-for="(item, idx) in dressColor" :key="idx">
            <div class="w-[70px] text-center">
              <div class="text-sm mb-10">{{ item.color }}</div>
              <div
                :style="{ backgroundColor: item.background }"
                class="relative w-[50px] h-[50px] mx-auto"
              >
                <div
                  class="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[35px] h-[35px] bg-red-700 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

