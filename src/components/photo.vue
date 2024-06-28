<script setup>
import { ref, onMounted, watchEffect, onBeforeUnmount, inject } from "vue";
import pic1 from "@/img/pic5.jpg";
import pic2 from "@/img/pic6.jpg";

const device = inject("device");

const morephoto = ref(false);
const photos = ref([pic1, pic2, pic2, pic1, pic1, pic2, pic2, pic1]);

// 彈窗時body滾輪移除
onMounted(() => {
  document.body.classList.remove("overflow-hidden");
});

watchEffect(() => {
  if (morephoto.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

onBeforeUnmount(() => {
  document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <div class="mb-32">
    <div class="mb-16 text-center text-2xl font-bold">Engagement Photo + Video</div>
    <div @click="morephoto=true" class="group relative max-w-[640px] mx-auto cursor-pointer px-5">
      <div
        class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center w-[95%] h-[95%] border border-white text-white text-4xl font-extrabold"
      >
        <div>morephoto</div>
      </div>
      <div class="flex gap-[2%] duration-700 group-hover:blur-sm">
        <div
          class="w-[49%] aspect-[3/4] py-32 bg-cover bg-center"
          :style="{ 'background-image': `url(${pic1})` }"
        ></div>
        <div
          class="w-[49%] aspect-[3/4] py-32 bg-cover bg-center"
          :style="{ 'background-image': `url(${pic2})` }"
        ></div>
      </div>
    </div>

    <!-- 彈窗 -->
    <div
      v-if="morephoto"
      class="fixed top-0 z-20 w-full h-dvh bg-white bg-opacity-90 overflow-y-auto"
    >
      <!-- 叉叉 -->
      <div
        @click="morephoto=false"
        class="absolute top-0 right-0 p-10 cursor-pointer duration-150 hover:scale-125"
      >
        <div
          class="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[30px] h-[3px] bg-black rotate-45"
        ></div>
        <div
          class="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2 w-[30px] h-[3px] bg-black -rotate-45"
        ></div>
      </div>
      <!-- 相片集 -->
      <div class="flex flex-wrap justify-center gap-[2%] mx-auto py-24 w-[80%] max-w-[900px]">
        <div v-for=" (item,idx) in photos" :key="idx">
          <div
            :class="['max-w-[400px] aspect-[3/4] bg-cover bg-center my-2',
            {'w-[30dvw] ': device === 'pc'},
        {' w-[70dvw] ': device === 'mobile'}]"
            :style="{ 'background-image': `url(${item})` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>