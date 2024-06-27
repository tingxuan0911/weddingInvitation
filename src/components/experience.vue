<script setup>
import {  inject } from "vue";

const device = inject("device");
</script>

<template>

      <div class="bg-[#fff] py-5 px-3 mt-2">
          <div class="text-2xl font-bold mb-5">工作經歷</div>
          <!-- 經驗一 -->
          <div class="flex">
            <div class="w-[25%]">
              <div
                :class="['text-sm mx-auto  bg-[#C9B49A] text-center font-bold h-fit w-fit px-3 py-1 rounded-2xl',{
        'text-wrap':device=='mobile'
      },{
        'text-nowrap':device=='pc'
      },]"
              >2022/8-2024/7</div>
            </div>
            <div class="w-[5%] mt-3">
              <div class="w-[8px] h-[8px] mx-auto bg-black rounded-full"></div>
              <div class="w-[2px] h-[calc(100%+5px)] mx-auto bg-black rounded-full"></div>
            </div>
            <div class="w-[70%] pb-8">
              <div class="font-bold">神兵資訊(前端工程師)</div>
              <div
                :class="['leading-relaxed',{
                'text-sm':device=='mobile'
              }]"
              >
                1. 使用Vue 進行網站開發。
                <br />2. 串接 API 資料進行使用。
                <br />3. 使用 git 進行版本控制。
                <br />4. RWD
                <br />5.與後端工程師討論製作相關的API資料，或是跨部門企劃、UI討論
                <br />【主要專案】
                <br />專案名稱：區塊鏈遊戲平台開發
                <br />專案內容：
                <br />(1) 以 Vite-Vue 為框架，搭配 PrimeVUE、tailwind、i18n 等套件進行電腦版、手機版前台開發。
                <br />(2)以既有的 Vue2框架建立的後台，搭配Element plus、typescript接手進行新功能開發及維護。
                <br />(3) 利用 Figma 協助處理頁面 UI 規劃與設計。
                <br />(4) 幣安api websocket串接。
                <br />
              </div>
            </div>
          </div>
          <!-- 經驗二 -->
          <div class="flex">
            <div class="w-[25%]">
              <div
                :class="['text-sm mx-auto  bg-[#C9B49A] text-center font-bold h-fit w-fit px-3 py-1 rounded-2xl',{
        'text-wrap':device=='mobile'
      },{
        'text-nowrap':device=='pc'
      },]"
              >2021/8-2022/8</div>
            </div>
            <div class="w-[5%] mt-3">
              <div class="w-[8px] h-[8px] mx-auto bg-black rounded-full"></div>
              <div class="w-[2px] h-[calc(100%+5px)] mx-auto bg-black rounded-full"></div>
            </div>
            <div class="w-[70%] pb-8">
              <div class="font-bold">邑爍資訊(ERP系統輔導專員)</div>
              <div
                :class="['leading-relaxed',{
                'text-sm':device=='mobile'
              },]"
              >
                1.了解勞基法基本法條及知識。
                <br />2.依客戶提供資訊設定系統。
                <br />3.到客戶端安裝系統以及教育訓練。
                <br />4.輔導客戶系統溝通解決問題。
                <br />5.做出客製化系統分析達到客戶需求。
                <br />6.QA，測試系統Bug。
                <br />7.輔導客戶上線，每年更新政府級距資料服務。
                <br />
              </div>
            </div>
          </div>
          <!-- 經驗三 -->
          <div class="flex">
            <div class="w-[25%]">
              <div
                :class="['text-sm mx-auto  bg-[#C9B49A] text-center font-bold h-fit w-fit px-3 py-1 rounded-2xl',{
        'text-wrap':device=='mobile'
      },
      {
        'text-nowrap':device=='pc'
      },]"
              >2019/6-2019/9</div>
            </div>
            <div class="w-[5%] mt-3">
              <div class="w-[8px] h-[8px] mx-auto bg-black rounded-full"></div>
              <div class="w-[2px] h-[calc(100%+5px)] mx-auto bg-black rounded-full"></div>
            </div>
            <div class="w-[70%] pb-8">
              <div class="font-bold">Borgata hotel casino and spa</div>
              <div
                :class="['leading-relaxed',{
                  'text-sm':device=='mobile'
                },]"
              >大學時自行找代辦ciee到美國打工度假，利用遠端視訊與雇主面試，面試上了位於美國西岸紐澤西州的東岸賭城飯店borgata，我負責在賭場內做服務生的角色，也利用這個機會積極與客人對話，練習英文口說，也教了不同國家的朋友。</div>
            </div>
          </div>
          <!-- 經驗四 -->
          <div class="flex">
            <div class="w-[25%]">
              <div
                :class="['text-sm mx-auto  bg-[#C9B49A] text-center font-bold h-fit w-fit px-3 py-1 rounded-2xl',{
        'text-wrap':device=='mobile'
      },{
        'text-nowrap':device=='pc'
      }]"
              >2016-2019</div>
            </div>
            <div class="w-[5%] mt-3">
              <div class="w-[8px] h-[8px] mx-auto bg-black rounded-full"></div>
            </div>
            <div class="w-[70%] pb-8">
              <div class="font-bold">學生時期兼職打工</div>
              <div
                :class="['leading-relaxed',{
                'text-sm':device=='mobile'
              }]"
              >
                1.名貫補習班(數學助教)
                <br />2.Yogilini 瑜珈SPA會館(櫃檯)
                <br />3.一沐日飲料店(櫃檯)
                <br />
              </div>
            </div>
          </div>
        </div>
</template>