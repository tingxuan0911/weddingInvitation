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
