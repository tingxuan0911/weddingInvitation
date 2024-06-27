<script setup>
import { ref } from "vue";

const timline = ref([
  {
    time: "4:30",
    ampm: "PM",
    route: "Ceremony"
  },
  {
    time: "05:00",
    ampm: "PM",
    route: "Photo"
  }
]);
</script>

<template>
  <div class="px-5">
    <div class="text-2xl font-bold">Wedding Timeline</div>
    <div class="text-lg">
      <div v-for="list,idx in timline" :key="idx">
        <div class="flex justify-center items-center">
          <div class="flex items-end">
            <div>04:30</div>
            <div class="text-xs">PM</div>
          </div>
          <div class="mx-14 w-[5px] h-[5px] bg-[--main-text-color] rounded-full"></div>
          <div>Ceremony</div>
        </div>
      </div>
    </div>
  </div>
</template>