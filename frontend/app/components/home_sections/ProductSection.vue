<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';
import { IoSharpChevronBack, MdOutlinedNavigateNext } from '@kalimahapps/vue-icons';
import { CdHeart, CdHeartFilled, BsStar, BsStarFill, CoCart } from '@kalimahapps/vue-icons';
</script>

<template>
    <div class="w-full relative py-16">
        <div class="w-full flex flex-col">
            <div class="w-full flex flex-row items-center justify-between">
                <div class="w-fit flex flex-row items-center gap-x-3">
                    <span :class="[styles.main_headingText, 'font-bold']">WHAT</span>
                    <span :class="[styles.main_headingText, 'font-light']">WE OFFER</span>
                </div>
                <div class="w-fit flex flex-row items-center gap-x-10">
                    <div class="w-fit flex flex-row items-center gap-x-5">
                        <div class="w-fit bg-[#FFAB5D] px-3 py-1.5 cursor-pointer">
                            <span class="text-[#000] text-[16px] font-medium font-[Inter]">SALE PRODUCTS</span>
                        </div>
                        <div class="w-fit bg-transparent px-3 py-1.5 cursor-pointer">
                            <span class="text-[#aba197] text-[16px] font-light font-[Inter]">LATEST PRODUCTS</span>
                        </div>
                        <div class="w-fit bg-transparent px-3 py-1.5 cursor-pointer">
                            <span class="text-[#aba197] text-[16px] font-light font-[Inter]">TOP RATED PRODUCTS</span>
                        </div>
                    </div>
                    <div class="w-fit flex flex-row items-center gap-2">
                        <IoSharpChevronBack class="text-[#ec8c25] w-8 h-8 cursor-pointer" />
                        <IoSharpChevronBack class="text-[#ec8c25] w-8 h-8 rotate-180 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div class="w-full h-[2px] bg-[#e2e2e2]"></div>

            <div class="w-full grid grid-cols-4 h-[76vh] gap-6 py-[4%]">
                <div class="grid grid-cols-1 relative bg-[#FFFCFA] shadow-lg">
                    <CdHeart
                        class="absolute w-7 h-7 top-2 right-2 z-10 text-[#C1AE9A] cursor-pointer hover:text-[#EB4539] duration-300 ease-in-out transition-all" />

                    <div class="w-full h-full flex flex-col justify-end">
                        <div class="w-full h-1/2 flex justify-center items-center pt-16">
                            <div class="h-[120px] bg-center bg-cover">
                                <img src="~/assets/images/products/elentra_2021_2023.png"
                                    class="w-full h-full object-cover" alt="">
                            </div>
                        </div>
                        <div class="w-full h-1/2 flex flex-col gap-y-5 p-4">
                            <div class="w-full flex flex-col">
                                <span class="text-[#C19C9A] text-[15px] font-light font-[Inter]">Body Parts</span>
                                <span class="text-[#4E4840] text-[22px] font-medium font-[Inter]">Valvoline 4.73L
                                    5W-30</span>
                            </div>

                            <div class="w-full flex flex-col gap-y-3">
                                <div class="w-full flex flex-row justify-start items-center gap-x-2 mt-6">
                                    <BsStarFill class="w-5 h-5 text-[#ec8c25]" />
                                    <BsStarFill class="w-5 h-5 text-[#ec8c25]" />
                                    <BsStarFill class="w-5 h-5 text-[#ec8c25]" />
                                    <BsStarFill class="w-5 h-5 text-[#ec8c25]" />
                                    <BsStar class="w-5 h-5 text-[#ec8c25]" />
                                </div>
                                <div class="w-full flex flex-row items-center gap-x-2">
                                    <span class="text-[#403A35] text-[20px] font-medium font-[Inter]">LKR</span>
                                    <div class="w-full flex flex-row items-center justify-between">
                                        <span class="text-[#403A35] text-[20px] font-medium font-[Inter]">5800.00</span>
                                        <CoCart
                                            class="text-[#C1AE9A] w-7 h-7 cursor-pointer hover:text-[#ec8c25] duration-300 transition-all ease-in-out" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 relative bg-[#FFFCFA] shadow-lg">
                    <CdHeart
                        class="absolute w-7 h-7 top-2 right-2 text-[#C1AE9A] cursor-pointer hover:text-[#EB4539] duration-300 ease-in-out transition-all" />
                </div>
                <div class="grid grid-cols-1 relative bg-[#FFFCFA] shadow-lg">
                    <CdHeart
                        class="absolute w-7 h-7 top-2 right-2 text-[#C1AE9A] cursor-pointer hover:text-[#EB4539] duration-300 ease-in-out transition-all" />
                </div>
                <div class="grid grid-cols-1 relative bg-[#FFFCFA] shadow-lg">
                    <CdHeart
                        class="absolute w-7 h-7 top-2 right-2 text-[#C1AE9A] cursor-pointer hover:text-[#EB4539] duration-300 ease-in-out transition-all" />
                </div>
            </div>
        </div>
    </div>
</template>