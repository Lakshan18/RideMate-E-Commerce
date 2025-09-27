<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';

import { saleData } from '~/assets/data/sales_data';

const sales = saleData;
</script>

<template>
    <div class="w-full relative">
        <div class="flex flex-row items-center justify-between gap-x-7">

            <!-- this is a card section for use sale section! -->
            <div class="w-1/2 h-[50vh] relative shadow-xl shadow-black/40" v-for="(sale) in sales" :key="sale.id"
                :style="{ backgroundImage: `url(${sale.cardimg})` }">
                <div class="w-full h-full flex flex-col items-start justify-center">
                    <div class="flex flex-col z-10 gap-y-2 ps-[4%]">
                        <span class="text-white text-[18px] font-light font-[Quicksand]">{{ sale.subtitle }}</span>
                        <span class="text-white text-[38px] font-black font-[Roboto]">{{ sale.title }}</span>
                        <span class="text-white text-[16px] font-light font-[Quicksand]">{{ sale.models }}</span>

                        <div v-if="sale.price !== undefined"
                            class="w-fit flex flex-row items-center justify-between gap-1">
                            <span class="text-white text-[24px] font-medium font-[Inter]">From:</span>
                            <span class="text-[#FF9E66] text-[32px] font-semibold font-[Roboto]">
                                {{ sale.price.toLocaleString() }}
                            </span>
                        </div>


                        <button
                            class="w-[100px] rounded-sm bg-[#E78700] text-white font-medium font-[Roboto] px-2.5 py-2">Shop
                            Now</button>
                    </div>
                    <div class="absolute w-full h-full z-0 bg-black/55"></div>
                </div>
            </div>

        </div>
    </div>
</template>