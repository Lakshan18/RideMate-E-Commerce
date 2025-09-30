<script setup lang="ts">

import bannerBg from '~/assets/images/premium_class_bg.png';

</script>

<template>
    <div class="w-full h-auto">
        <div class="w-full h-[50vh] relative flex flex-row items-center">
            <div class="w-1/2 h-full z-0 bg-[#000000]"></div>
            <div class="w-full max-w-1/2 h-full bg-center bg-cover z-0"
                :style="{ backgroundImage: `url(${bannerBg})` }">
            </div>
            <div class="absolute w-full h-full z-10 inset-0 pointer-events-none" :style="{
                background:
                    'linear-gradient(90deg, rgba(0,0,0,1) 42%, rgba(26,26,26,0.66) 77%, rgba(40,40,40,0) 100%)'
            }">
            </div>
            <div class="absolute inset-0 z-20">
                <div class="w-full h-full flex flex-col items-start pt-[5%] ps-[10%]">
                    <span class="text-white text-[30px] font-medium font-[Poppins]">INTERIOR ITEMS FOR</span>
                    <div class="w-fit flex flex-row items-center gap-x-3">
                        <span class="text-[#FF9C50] text-[48px] font-bold font-[Poppins]">PREMIUM</span>
                        <span class="text-white text-[48px] font-bold font-[Poppins]">CLASS</span>
                    </div>
                    <span
                        class="text-[17px] text-white font-light font-[Poppins] mt-10 duration-300 ease-in-out transition-all hover:text-[#FF9C50] cursor-pointer">View
                        Details</span>
                </div>
            </div>
        </div>
    </div>
</template>