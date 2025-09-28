<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';
import { BsCartCheck } from '@kalimahapps/vue-icons';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { Motion } from '@motionone/vue';
import { useRouter } from 'vue-router';

import { heroCaraouselData } from '~/assets/data/caraousel';

const router = useRouter();


const slides = heroCaraouselData;
const currentIndex = ref(0);
let timer: number | null = null;

function startAutoplay() {
    stopAutoplay();
    timer = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.length;
    }, 6000);
}

function stopAutoplay() {
    if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
    }
}

function goTo(index: number) {
    currentIndex.value = index;
    startAutoplay();
}

function goToAuth() {
    router.push({ name: 'Authentication' });
}

onMounted(() => startAutoplay());
onBeforeUnmount(() => stopAutoplay());
</script>

<template>
    <div class="w-full flex-col">
        <div class="w-full flex flex-row items-center justify-between">
            <div class="w-10 h-10 bg-amber-500 rounded-full"></div>
            <div class="w-fit flex flex-row items-center">
                <input type="text" placeholder="Search products......."
                    class="w-[700px] text-[#000] font-normal font-[Inter] rounded-l-3xl py-3 px-5 bg-white outline-none" />
                <button
                    class="w-[100px] text-white bg-[#E2A152] font-normal cursor-pointer duration-300 ease-in-out hover:bg-[#825844] font-[Roboto] py-3 px-4 rounded-r-3xl">Search</button>
            </div>
            <div class="w-fit flex flex-row items-center justify-between gap-x-5">
                <span :class="[styles.nav_topText]" @click="goToAuth">Login/Register</span>
                <BsCartCheck class="w-10 h-10 text-[#c47514]" />
            </div>
        </div>

        <div class="w-full min-h-screen mt-10 relative overflow-hidden">
            <div class="w-[100%] h-[92vh] relative">
                <Motion v-for="(slide, idx) in slides" :key="slide.id" tag="div"
                    class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})` }"
                    :initial="{ opacity: 0 }" :animate="idx === currentIndex ? { opacity: 1 } : { opacity: 0 }"
                    :transition="{ duration: 1.2, easing: 'ease-in-out' }">
                    <div class="absolute inset-0 bg-black/60"></div>

                    <div class="relative w-full h-full flex flex-col items-start justify-center ps-[5%]">
                        <span :class="[styles.subText_csl]">{{ slide.title }}</span>
                        <span :class="[styles.mainText_csl]">{{ slide.subtitle }}</span>
                        <p :class="[styles.descText_csl]">{{ slide.description }}</p>
                        <button class="text-white bg-[#E78700] py-2 px-4 rounded-sm mt-6 text-[16px]">{{
                            slide.buttonText }}</button>
                    </div>
                </Motion>

                <div class="w-full flex justify-center absolute bottom-10">
                    <div class="w-auto flex gap-x-3">
                        <button v-for="(s, i) in slides" :key="s.id" @click="goTo(i)"
                            class="w-3 h-3 rounded-full cursor-pointer transition-colors duration-300"
                            :class="i === currentIndex ? 'bg-[#FFB151]' : 'bg-[#a9a9a9]'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
