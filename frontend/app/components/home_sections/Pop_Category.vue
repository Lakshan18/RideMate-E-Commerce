<script setup lang="ts">

import { styles } from '~/assets/api-styles/styles';
import { MdOutlinedNavigateNext } from '@kalimahapps/vue-icons';
import { categoryData, type Category } from '~/assets/data/categories_data';

</script>

<template>
    <div class="w-full relative pt-12 pb-16">
        <div class="w-full flex flex-col items-start">
            <div class="w-fit flex flex-row items-center gap-2">
                <span :class="[styles.main_headingText, 'font-bold']">POPULAR</span>
                <span :class="[styles.main_headingText, 'font-light']">CATEGORIES</span>
            </div>
            <div class="w-full h-[2px] bg-[#e2e2e2]"></div>

            <div class="w-full grid grid-cols-3 gap-5 mt-[4%]">
                <div v-for="cat in categoryData" :key="cat.id"
                    class="w-full p-4 bg-[#FFFCFA] shadow-md flex flex-row items-center justify-center gap-x-6">
                    <div class="w-fit h-[150px] bg-center bg-cover">
                        <!-- image -->
                        <img :src="cat.image" class="w-full h-full object-cover" :alt="cat.title">
                    </div>
                    <div class="w-fit flex flex-col items-start">
                        <!-- title -->
                        <span class="text-[20px] text-[#4A351F] font-medium font-[Inter]">{{ cat.title }}</span>
                        <!-- c_list -->
                        <div class="flex flex-col items-start gap-y-1 mt-2">
                            <span
                            v-for="(item,index) in cat.c_list"
                            :key="index"  
                            class="text-[16px] text-[#BB9F82] font-light font-[Inter]">{{ item }}</span>
                        </div>
                        <div class="w-full flex flex-row items-center justify-end gap-x-1 mt-2 cursor-pointer">
                            <span class="text-[#F68207] text-[16px] font-normal font-[Inter]">Show ALL</span>
                            <MdOutlinedNavigateNext class="w-7 h-7 text-[#F68207]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>