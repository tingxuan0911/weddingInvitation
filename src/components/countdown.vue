<script setup>
import { ref, onMounted } from "vue";

const WeddingDate = new Date("2024-12-31T00:00:00");

const remainingTime = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
});

function calculateTime() {
  const now = new Date();
  const timeDiff = WeddingDate - now;

  if (timeDiff > 0) {
    remainingTime.value.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    remainingTime.value.hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    remainingTime.value.minutes = Math.floor(
      (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    remainingTime.value.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  } 
}

onMounted(() => {
  calculateTime();
  setInterval(calculateTime, 1000);
});
</script>


<template>
  <div class=" mb-32">
    <div class="mb-10 text-center text-2xl font-bold">Wedding Countdown</div>
    <div class="mb-10 text-center font-light">距離婚禮還有</div>
    <div class="flex justify-between w-[80%] max-w-[680px] mx-auto mb-10">
      <div class="w-[23%]">
        <div class=" flex justify-center  items-center  text-xl w-full aspect-square border border-[--main-text-color] "> 
          <div>
          {{ remainingTime.days }}</div>

          </div>
        <div class="text-center mt-5">Days</div>
      </div>
      <div class="w-[23%]">
        <div class=" flex justify-center  items-center  text-xl w-full aspect-square border border-[--main-text-color] "> 
          <div>
           {{ remainingTime.hours }}</div>

          </div>
        <div class="text-center mt-5">Hours</div>
      </div>
      <div class="w-[23%]">
        <div class=" flex justify-center  items-center  text-xl w-full aspect-square border border-[--main-text-color] "> 
          <div>
          {{ remainingTime.minutes }}</div>

          </div>
        <div class="text-center mt-5">Mins</div>
      </div>
      <div class="w-[23%]">
        <div class=" flex justify-center  items-center  text-xl w-full aspect-square border border-[--main-text-color] "> 
          <div>
          {{ remainingTime.seconds }}</div>

          </div>
        <div class="text-center mt-5">Secs</div>
      </div>
    </div>
    <div class="text-center font-light">期待與你們見面！</div>
  </div>
</template>