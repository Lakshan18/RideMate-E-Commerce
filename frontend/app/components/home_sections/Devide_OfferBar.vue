<!-- <script setup lang="ts">
import bg_SaleBar from '~/assets/images/devide_post_bg.png';
import { offersData, type Offers } from '~/assets/data/offer_data';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import gsap from 'gsap';

const currentIndex = ref(0);
const currentOffer = computed(() => offersData[currentIndex.value]);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

</script>

<template>
    <div class="w-full h-[60vh] relative flex justify-center" :style="{ backgroundImage: `url(${bg_SaleBar})` }">
        <div class="w-full max-w-4xl flex flex-row items-center justify-between z-10">
            <div class="w-fit h-full flex flex-col items-start justify-center gap-y-3">
                <div class="w-fit flex flex-row items-center gap-x-2">
                    <span class="text-[28px] text-[#FF9B45] font-semibold font-[Poppins]">SAVE ON</span>
                    <span class="text-[28px] text-[#fff] font-semibold font-[Poppins]">BRAKING POWER</span>
                </div>
                <p class="text-white text-[17px] font-light font-[Quicksand] max-w-sm">High-performance brake pads for
                    all vehicles – precision tested for maximum safety.</p>
                <div class="w-[300px] relative flex flex-row items-center justify-between">
                    <div class="w-[150px] flex flex-col items-center">
                        <span class="text-[40px] text-white font-medium font-[Quant]">0</span>
                        <span class="text-[16px] text-white font-medium font-[Quicksand]">Days</span>
                    </div>
                    <span class="text-white absolute top-1 left-17 text-[30px] font-semibold font-[Quant]">:</span>
                    <div class="w-[150px] flex flex-col items-center">
                        <span class="text-[40px] text-white font-medium font-[Quant]">0</span>
                        <span class="text-[16px] text-white font-medium font-[Quicksand]">Hours</span>
                    </div>
                    <span class="text-white absolute top-1 left-36 text-[30px] font-semibold font-[Quant]">:</span>
                    <div class="w-[150px] flex flex-col items-center">
                        <span class="text-[40px] text-white font-medium font-[Quant]">0</span>
                        <span class="text-[16px] text-white font-medium font-[Quicksand]">Min</span>
                    </div>
                    <span class="text-white absolute top-1 left-55 text-[30px] font-semibold font-[Quant]">:</span>
                    <div class="w-[150px] flex flex-col items-center">
                        <span class="text-[40px] text-white font-medium font-[Quant]">0</span>
                        <span class="text-[16px] text-white font-medium font-[Quicksand]">Sec</span>
                    </div>
                </div>
                <button
                    class="text-white text-[14px] bg-[#E78700] py-2 px-5 font-light rounded-md font-[Inter] mt-5">Shop
                    Now</button>
            </div>
            <div class="w-[350px] relative bg-center bg-cover">
                <img src="~/assets/images/offers/evolution.png" class="w-full h-full object-cover" alt="">
                <div
                    class="absolute -bottom-10 -right-18 w-[120px] h-[70px] flex flex-col justify-center items-center rounded-full bg-[#FF8400]">
                    <span class="text-white text-[16px] font-light font-[Roboto]">From</span>
                    <span class="text-white text-[20px] font-medium font-[Roboto]">14500</span>
                </div>
            </div>
        </div>
        <div class="w-fit flex flex-row items-center absolute bottom-4 z-10 justify-self-center gap-x-4">
            <div class="w-3 h-3 bg-[#FF8400] rounded-full"></div>
            <div class="w-3 h-3 border border-[#FF8400] bg-transparent rounded-full"></div>
            <div class="w-3 h-3 border border-[#FF8400] bg-transparent rounded-full"></div>
        </div>
        <div class="bg-[rgba(34,34,34,0.70)] absolute w-full h-full z-0"></div>
    </div>
</template> -->




<script setup lang="ts">
import bg_SaleBar from '~/assets/images/devide_post_bg.png';
import { offersData, type Offers } from '~/assets/data/offer_data';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import gsap from 'gsap';

const currentIndex = ref(0);
const currentOffer = computed(() => offersData[currentIndex.value]);

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let countdownTimer: number | null = null;
let autoplayTimer: number | null = null;

function updateCountdown() {
  if (!currentOffer.value?.endDate) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    return;
  }

  const now = Date.now();
  const target = new Date(currentOffer.value.endDate).getTime();
  const diff = target - now;

  if (diff <= 0) {
    days.value = hours.value = minutes.value = seconds.value = 0;
    return;
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
}

/** Advance to next slide with GSAP fade */
function nextSlide() {
  // fade current out, update index, fade new in
  gsap.to('.offer-slide', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      currentIndex.value = (currentIndex.value + 1) % offersData.length;
      // small fromTo to make entry look nice
      gsap.fromTo('.offer-slide', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 });
    }
  });
}

/** Jump to specific slide (via dots) */
function goTo(i: number) {
  if (autoplayTimer !== null) {
    // restart autoplay so user interaction resets the timer
    window.clearInterval(autoplayTimer);
    autoplayTimer = window.setInterval(nextSlide, 7000);
  }
  // animate transition immediately
  gsap.to('.offer-slide', {
    opacity: 0,
    duration: 0.35,
    onComplete: () => {
      currentIndex.value = i;
      gsap.fromTo('.offer-slide', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 });
    }
  });
}

onMounted(() => {
  // initial render animation
  gsap.fromTo('.offer-slide', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6 });

  // start countdown and autoplay
  updateCountdown();
  countdownTimer = window.setInterval(updateCountdown, 1000);
  autoplayTimer = window.setInterval(nextSlide, 7000);
});

onUnmounted(() => {
  if (countdownTimer !== null) {
    window.clearInterval(countdownTimer);
    countdownTimer = null;
  }
  if (autoplayTimer !== null) {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
});

// recalc countdown whenever the slide changes
watch(currentIndex, () => {
  updateCountdown();
});
</script>

<template>
  <div
    class="w-full h-[60vh] relative flex justify-center items-center overflow-hidden"
    :style="{ backgroundImage: `url(${bg_SaleBar})` }"
  >
    <!-- Slide container (single slide visually; layout flips using flex-row-reverse on odd index) -->
    <div
      class="offer-slide w-full max-w-4xl flex flex-row items-center justify-between z-10 px-6"
      :class="{ 'flex-row-reverse': currentIndex % 2 === 1 }"
    >
      <!-- Left: text (or right when flex-row-reverse) -->
      <div class="w-1/2 flex flex-col items-start justify-center gap-y-3">
        <div class="flex flex-row items-center gap-x-2">
          <span class="text-[28px] text-[#FF9B45] font-semibold font-[Poppins]">
            {{ currentOffer?.titleP1 }}
          </span>
          <span class="text-[28px] text-[#fff] font-semibold font-[Poppins]">
            {{ currentOffer?.titleP2 }}
          </span>
        </div>

        <p class="text-white text-[17px] font-light font-[Quicksand] max-w-sm">
          {{ currentOffer?.desc }}
        </p>

        <!-- Countdown -->
        <div class="flex flex-row items-center justify-between gap-x-6 mt-4">
          <div class="flex flex-col items-center">
            <span class="text-[40px] text-white font-medium font-[Quant]">{{ days }}</span>
            <span class="text-[14px] text-white font-[Quicksand]">Days</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[40px] text-white font-medium font-[Quant]">{{ hours }}</span>
            <span class="text-[14px] text-white font-[Quicksand]">Hours</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[40px] text-white font-medium font-[Quant]">{{ minutes }}</span>
            <span class="text-[14px] text-white font-[Quicksand]">Min</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="text-[40px] text-white font-medium font-[Quant]">{{ seconds }}</span>
            <span class="text-[14px] text-white font-[Quicksand]">Sec</span>
          </div>
        </div>

        <button class="text-white text-[14px] bg-[#E78700] py-2 px-5 font-light rounded-md font-[Inter] mt-5">
          Shop Now
        </button>
      </div>

      <!-- Right: product image (or left when flex-row-reverse) -->
      <div class="w-1/2 flex justify-center relative">
        <img :src="currentOffer?.product_img" class="w-[350px] object-contain z-10" />
        <div class="absolute -bottom-8 right-8 w-[120px] h-[70px] flex flex-col justify-center items-center rounded-full bg-[#FF8400] z-20">
          <span class="text-white text-[16px] font-light font-[Roboto]">{{ currentOffer?.priceTitle }}</span>
          <span class="text-white text-[20px] font-medium font-[Roboto]">{{ currentOffer?.price }}</span>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="absolute bottom-6 flex flex-row gap-x-3 z-20">
      <div
        v-for="(offer, i) in offersData"
        :key="offer.id + '-' + i"
        class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300"
        :class="i === currentIndex ? 'bg-[#FF8400]' : 'border border-[#FF8400] bg-transparent'"
        @click="goTo(i)"
      />
    </div>

    <!-- Dark overlay behind content -->
    <div class="bg-[rgba(34,34,34,0.70)] absolute w-full h-full z-0"></div>
  </div>
</template>
