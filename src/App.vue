<script setup>
import { ref, provide } from "vue";
import aboutMe from "./components/aboutMe.vue";
import skill from "./components/skill.vue";
import experience from "./components/experience.vue";
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
  <div class="bg-[#DBC4A7]">
    <div
      :class="['max-w-[1240px]  mx-auto min-h-dvh   bg-[#DBC4A7] pt-[10px] pb-[10px]',{
        'flex  pr-[10px]':device=='pc'
      },
      {
        'px-[10px]':device=='mobile'
      }]"
    >
      <!-- 右邊區塊 -->
      <div
        :class="[{
        'w-full':device=='mobile'
      },{
        'w-[30%]':device=='pc'
      },]"
      >
        <aboutMe />
      </div>

      <!-- 左邊區塊 -->
      <div
        :class="['text-[#735643]',{
        'w-full':device=='mobile'
      },{
        'w-[70%]':device=='pc'
      },]"
      >
        <!-- 左邊區塊:上 -->
        <skill />

        <!-- 左邊區塊:下 -->
        <experience />
      </div>
    </div>
  </div>
</template>