<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect, inject } from "vue";
import "animate.css";
import me from "@/img/me.jpg";

const device = inject("device");

const mePicShow = ref(false);

//
// 彈窗時body滾輪移除
onMounted(() => {
  document.body.classList.remove("overflow-hidden");
});

watchEffect(() => {
  if (mePicShow.value) {
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
  <div class="relative bg-[#DBC4A7]">
    <div
      @click="mePicShow=true"
      class="w-[90%] aspect-square mx-auto bg-cover bg-center rounded-full cursor-pointer after:content-[''] after:block after:w-[100%] after:aspect-square after:rounded-full after:border after:border-black after:translate-x-2"
      :style="{ 'background-image': `url(${me})` }"
    ></div>
    <div class="p-3">
      <div class="text-center font-bold text-2xl">李庭瑄</div>
      <div class="mx-auto w-fit px-5 text-center text-[#735643] border-t border-t-[#735643]">前端工程師</div>
      <div>
        <div class="my-3">
          <div class="font-bold">關於我</div>
          <div class="text-sm my-1 text-[#735643] leading-relaxed">
            我是李庭瑄，個性活潑樂觀，面對挑戰及想做的事情，都會盡力去完成，享受成就感，不害怕失敗，只怕沒有行動而錯失機會。
            <br />
            <br />學生時期透過代辦參加美國打工旅遊計畫，持續進修自我，強化世界觀，透過此機會，加強與累積經驗且建立好人際基礎，學習到與他人溝通與互動及資源找尋之能力，並可將此運用於工作中。
            <br />
            <br />出社會後第一份ERP系統工作，讓我對寫程式產生興趣，並自行進修前端技能，成功轉職為前端工程師，並將所學運用在實務上。我覺得寫程式很有趣，我也很享受寫程式讓我獲得成就感!
            <br />
            <br />平常喜歡健身，利用下班之餘維持身材，認為擁有健康的身體不管是對生活還是工作都是最重要的。
          </div>
        </div>
        <div class="my-3">
          <div class="font-bold">學習歷程</div>
          <div class="text-sm my-1 text-[#735643] leading-relaxed">
            1.高中期間勤奮學習，邏輯觀念好、對數字敏感度高，數理是我的強項，每次段考都獲得全班第一名，每學期都榮獲學校獎學金，也榮獲班上第一名市長獎畢業。
            <br />
            <br />2.大學期間不斷勉勵自己朝多方面發展，積極參與系會活動，同時也考取相關金融專業證照，希望能將自己的知識活用於規劃資產配置上。也利用學生身分這個機會，參與美國政府的打工旅遊計畫，利用這個機會在美國生活了4個月，體驗外國風情，增加世界觀以及獨立的個性，使我擴大視野、增廣見聞對，我受益良多。
            <br />
            <br />3.藉由ERP系統觸寫程式並產生興趣，利用下班之餘自行進修前端技能，上了基本HTML+CSS+Javascript的課程，也上了vue3框架課程來幫助網頁更好維護以及讓工作更有效率，希望能夠轉職前端工程師。
          </div>
        </div>
      </div>
    </div>
    <!-- 大頭照 -->
    <template v-if="mePicShow==true">
      <div
        @click.self="mePicShow=false"
        class="cursor-pointer fixed top-0 left-0 w-dvw h-dvh flex items-center justify-center bg-white bg-opacity-60"
      >
        <div
          :class="['animate__animated animate__flipInY  max-w-[600px]   cursor-default  aspect-square bg-cover bg-center rounded-full after:content-[\'\'] after:block after:w-[100%] after:aspect-square after:rounded-full after:border after:border-black after:translate-x-2',{
        'w-[50%] ':device=='pc'
      },{ 'w-[70%] ':device=='mobile'
      }]"
          :style="{ 'background-image': `url(${me})` }"
        ></div>
      </div>
    </template>
  </div>
</template>