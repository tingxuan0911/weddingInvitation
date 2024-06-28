
<script setup>
import { ref, inject } from "vue";
const device = inject("device");

const timeline = ref([
  {
    time: "04:30",
    ampm: "PM",
    route: "Ceremony"
  },
  {
    time: "05:00",
    ampm: "PM",
    route: "Photo"
  },
  {
    time: "06:00",
    ampm: "PM",
    route: "Dinner"
  },
  {
    time: "07:00",
    ampm: "PM",
    route: "First Dance"
  },
  {
    time: "07:30",
    ampm: "PM",
    route: "PARTY!"
  }
]);
</script>

<template>
  <div class="px-5">
    <div class="text-2xl font-bold">Wedding Timeline</div>
    <div class="mx-auto w-fit font-medium">
      <div v-for="(item, index) in timeline" :key="index">
        <div
          :class="['flex items-center ',{'ml-10 text-xl': device === 'pc'},
        {'text-md ml-7 ': device === 'mobile'}]"
        >
          <div class="flex items-end">
            <div>{{ item.time }}</div>
            <div class="text-xs">{{ item.ampm }}</div>
          </div>
          <div
            class="mx-14 my-20 w-[5px] h-[5px] bg-[--main-text-color] rounded-full after:block after:w-[1px] after:h-[165px] after:ml-[2px] after:bg-[--main-text-color]"
          ></div>
          <div>{{ item.route }}</div>
        </div>
      </div>
      <div
        :class="[' text-sm mt-[100px] italic font-bold',
        {'ml-16 ': device === 'pc'},
        {'ml-10 ': device === 'mobile'}]"
      >hope you enjoy the wedding</div>
    </div>
  </div>
</template>