<script setup>
import {  inject } from "vue";

const device = inject("device");
</script>

<template>

     <div class="bg-[#fff] py-5 px-3">
          <div class="text-2xl font-bold mb-5">技能</div>
          <div class="flex flex-wrap gap-1 w-full">
            <div class="w-[40%] rounded bg-[#E4E2E2] text-center hover:shadow-inner hover:shadow-zinc-400 px-2">
              <div>前端基本</div>
              <div class="text-sm border border-t-[#735643]">HTML、CSS、SASS、JavaScript</div>
            </div>
            <div class="w-[58%] rounded bg-[#E4E2E2] text-center hover:shadow-inner hover:shadow-zinc-400 px-2">
              <div>VueJS</div>
              <div
                class="text-sm border border-t-[#735643]"
              >Vue3、Vue2、Vue Router、Vite、Vue-Cil、Vuex、Pinia、Node.js、Axios、Linux、API串接</div>
            </div>
            <div class="w-[60%] rounded bg-[#E4E2E2] text-center hover:shadow-inner hover:shadow-zinc-400 px-2">
              <div>套件 & 工具</div>
              <div
                class="text-sm border border-t-[#735643]"
              >Tailwind、Bootstrap、Element Plus、PrimeVue、i18n、Postman</div>
            </div>
            <div class="w-[38%] rounded bg-[#E4E2E2] text-center hover:shadow-inner hover:shadow-zinc-400 px-2">
              <div>版本控制</div>
              <div class="text-sm border border-t-[#735643]">Git、GitHub、GitLab</div>
            </div>
            <div class="rounded bg-[#E4E2E2] text-center hover:shadow-inner hover:shadow-zinc-400 px-2 py-2">
              <div class>RWD</div>
            </div>
          </div>
        </div>

</template>