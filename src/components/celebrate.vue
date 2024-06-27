<script setup>
import { ref, onMounted, computed, inject } from "vue";
import pic1 from "@/img/pic1.jpg";
import pic2 from "@/img/pic2.jpg";
import pic3 from "@/img/pic3.jpg";
import pic4 from "@/img/pic4.jpg";

const device = inject("device");

// celebrate with us圖片切換
const imageLeft = ref([pic1, pic2]);
const imageRight = ref([pic3, pic4]);
const currentIndex = ref(0);

const celebrateLeft = computed(() => imageLeft.value[currentIndex.value]);
const celebrateRight = computed(() => imageRight.value[currentIndex.value]);

const startTimer = () => {
  let intervalId = null;
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % imageLeft.value.length;
  }, 1000);
};

onMounted(() => {
  startTimer();
});
</script>

<template>
  <div>
    <div class="relative max-w-[940px] mx-auto mb-36">
      <div
        class="absolute top-[-18px] right-1/2 translate-x-1/2 text-2xl font-bold text-nowrap"
      >celebrate with us</div>
      <div
        :class="[' py-5 mx-auto  border border-[--main-text-color]',
        ,{'w-[90%] flex justify-center items-center gap-[3%]': device === 'pc'},
        {'w-[80%] max-w-[360px]': device === 'mobile'}]"
      >
        <!-- 圖左 -->
        <div class="w-[30%]">
          <div
            class="relative w-full aspect-[3/4] p-5 bg-cover bg-center text-white"
            :style="{ 'background-image': `url(${celebrateLeft})` }"
          ></div>
        </div>
        <!-- 中 -->
        <div
          class="flex justify-center items-center w-[30%] aspect-[3/4] border border-[--main-text-color]"
        >
          <div class="text-center text-sm">
            2023.12.17
            <br />SUN.
            <br />邀請您們前往雨豆樹廣場
            <br />與我們一同慶祝！
          </div>
        </div>
        <!-- 圖右 -->
        <div class="w-[30%]">
          <div
            class="relative w-full aspect-[3/4] p-5 bg-cover bg-center text-white"
            :style="{ 'background-image': `url(${celebrateRight})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>