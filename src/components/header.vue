<script setup>
import headerPic from "@/img/header.jpg";
</script>

<template>
  <div>
    <div class="p-5 mb-32">
      <div
        class="header relative w-full h-dvh p-5 bg-cover bg-center bg-no-repeat bg-fixed text-white text-center"
            :style="{ 'background-image': `url(${headerPic}) `}"
        
      >
    
      </div>
    </div>
  </div>
</template>
<style scoped>
  .header::before{
    contain: '';
    position: fixed;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    /* background-color: transparent; */
  }
</style>
