<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { styles } from '~/assets/api-styles/styles';
import { IoSharpChevronBack, MdOutlinedNavigateNext } from '@kalimahapps/vue-icons';
import { CdHeart, CdHeartFilled, BsStar, BsStarFill, CoCart } from '@kalimahapps/vue-icons';

import { productData, type Products } from '~/assets/data/product_listData';

const activeTab = ref<'SALE' | 'LATEST' | 'RATED'>('SALE');
const currentPage = ref(0);
const carouselRef = ref<HTMLElement>();
const isAnimating = ref(false);

const filteredProducts = computed(() => {
    switch (activeTab.value) {
        case 'SALE':
            return productData.filter(product => product.p_feature === 'SALE');
        case 'LATEST':
            return productData.filter(product => product.p_feature === 'LATEST');
        case 'RATED':
            return productData.filter(product => product.p_rating >= 4);
        default:
            return productData;
    }
});

const paginatedProducts = computed(() => {
    const pages = [];
    for (let i = 0; i < filteredProducts.value.length; i += 4) {
        pages.push(filteredProducts.value.slice(i, i + 4));
    }
    return pages;
});

const totalPages = computed(() => paginatedProducts.value.length);

const currentProducts = computed(() => {
    if (paginatedProducts.value[currentPage.value]) {
        return paginatedProducts.value[currentPage.value];
    }
    return [];
});

const canGoNext = computed(() => currentPage.value < totalPages.value - 1);

const canGoPrev = computed(() => currentPage.value > 0);

const nextPage = async () => {
    if (!canGoNext.value || isAnimating.value) return;

    isAnimating.value = true;

    if (carouselRef.value) {
        await gsap.to(carouselRef.value, {
            x: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }

    currentPage.value++;

    await nextTick();

    if (carouselRef.value) {
        gsap.set(carouselRef.value, { x: 100, opacity: 0 });
        gsap.to(carouselRef.value, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
            onComplete: () => {
                isAnimating.value = false;
            }
        });
    }
};

const prevPage = async () => {
    if (!canGoPrev.value || isAnimating.value) return;

    isAnimating.value = true;

    if (carouselRef.value) {
        await gsap.to(carouselRef.value, {
            x: 100,
            opacity: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }

    currentPage.value--;

    await nextTick();

    if (carouselRef.value) {
        gsap.set(carouselRef.value, { x: -100, opacity: 0 });
        gsap.to(carouselRef.value, {
            x: 0,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
            onComplete: () => {
                isAnimating.value = false;
            }
        });
    }
};

const changeTab = (tab: 'SALE' | 'LATEST' | 'RATED') => {
    if (activeTab.value === tab || isAnimating.value) return;

    activeTab.value = tab;
    currentPage.value = 0;

    if (carouselRef.value) {
        gsap.fromTo(carouselRef.value,
            { scale: 0.9, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
    }
};

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(BsStarFill);
    }

    if (hasHalfStar) {
        stars.push(BsStar);
    }

    while (stars.length < 5) {
        stars.push(BsStar);
    }

    return stars;
};

onMounted(() => {
    if (carouselRef.value) {
        gsap.from(carouselRef.value, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }
});
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
                        <div class="w-fit px-3 py-1.5 cursor-pointer transition-all duration-300"
                            :class="activeTab === 'SALE' ? 'bg-[#FFAB5D]' : 'bg-transparent'"
                            @click="changeTab('SALE')">
                            <span class="text-[16px] font-medium font-[Inter] transition-all duration-300"
                                :class="activeTab === 'SALE' ? 'text-[#000]' : 'text-[#aba197] font-light'">
                                SALE PRODUCTS
                            </span>
                        </div>
                        <div class="w-fit px-3 py-1.5 cursor-pointer transition-all duration-300"
                            :class="activeTab === 'LATEST' ? 'bg-[#FFAB5D]' : 'bg-transparent'"
                            @click="changeTab('LATEST')">
                            <span class="text-[16px] font-medium font-[Inter] transition-all duration-300"
                                :class="activeTab === 'LATEST' ? 'text-[#000]' : 'text-[#aba197] font-light'">
                                LATEST PRODUCTS
                            </span>
                        </div>
                        <div class="w-fit px-3 py-1.5 cursor-pointer transition-all duration-300"
                            :class="activeTab === 'RATED' ? 'bg-[#FFAB5D]' : 'bg-transparent'"
                            @click="changeTab('RATED')">
                            <span class="text-[16px] font-medium font-[Inter] transition-all duration-300"
                                :class="activeTab === 'RATED' ? 'text-[#000]' : 'text-[#aba197] font-light'">
                                TOP RATED PRODUCTS
                            </span>
                        </div>
                    </div>
                    <div class="w-fit flex flex-row items-center gap-2">
                        <IoSharpChevronBack class="w-8 h-8 cursor-pointer transition-all duration-300"
                            :class="canGoPrev ? 'text-[#ec8c25] hover:text-[#ff9e3d]' : 'text-[#e2e2e2] cursor-not-allowed'"
                            @click="prevPage" />
                        <IoSharpChevronBack class="w-8 h-8 rotate-180 cursor-pointer transition-all duration-300"
                            :class="canGoNext ? 'text-[#ec8c25] hover:text-[#ff9e3d]' : 'text-[#e2e2e2] cursor-not-allowed'"
                            @click="nextPage" />
                    </div>
                </div>
            </div>
            <div class="w-full h-[2px] bg-[#e2e2e2]"></div>

            <div class="w-full py-[4%] overflow-hidden relative min-h-[76vh]">
                <div ref="carouselRef" class="w-full grid grid-cols-4 gap-6">
                    <div v-for="product in currentProducts" :key="product.id"
                        class="grid grid-cols-1 relative bg-[#FFFCFA] shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] pb-12">
                        <CdHeart
                            class="absolute w-7 h-7 top-2 right-2 z-10 text-[#C1AE9A] cursor-pointer hover:text-[#EB4539] duration-300 ease-in-out transition-all" />

                        <div class="w-full h-full flex flex-col justify-end">
                            <div class="w-full h-1/2 flex justify-center items-center pt-16">
                                <div class="w-fit h-[140px] bg-center bg-cover">
                                    <img :src="product.p_image" class="w-full h-full object-cover"
                                        :alt="product.p_name">
                                </div>
                            </div>
                            <div class="w-full h-1/2 flex flex-col gap-y-5 p-4">
                                <div class="w-full flex flex-col">
                                    <span class="text-[#C19C9A] text-[15px] font-light font-[Inter]">{{
                                        product.p_category }}</span>
                                    <span class="text-[#4E4840] text-[22px] font-medium font-[Inter]">{{ product.p_name
                                        }}</span>
                                </div>

                                <div class="w-full flex flex-col gap-y-3">
                                    <div class="w-full flex flex-row justify-start items-center gap-x-2 mt-6">
                                        <component v-for="(StarIcon, index) in renderStars(product.p_rating)"
                                            :key="index" :is="StarIcon" class="w-5 h-5 text-[#ec8c25]" />
                                    </div>
                                    <div class="w-full flex flex-row items-center gap-x-2">
                                        <span class="text-[#403A35] text-[20px] font-medium font-[Inter]">LKR</span>
                                        <div class="w-full flex flex-row items-center justify-between">
                                            <span class="text-[#403A35] text-[20px] font-medium font-[Inter]">
                                                {{ product.p_price.toLocaleString() }}.00
                                            </span>
                                            <CoCart
                                                class="text-[#C1AE9A] w-7 h-7 cursor-pointer hover:text-[#ec8c25] duration-300 transition-all ease-in-out" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="currentProducts?.length === 0"
                        class="col-span-4 flex flex-col items-center justify-center py-16">
                        <span class="text-[#4E4840] text-[22px] font-medium font-[Inter]">
                            No products found for this category.
                        </span>
                    </div>
                </div>
            </div>

            <div v-if="totalPages > 1" class="w-full flex justify-center mt-8">
                <div class="flex space-x-2">
                    <div v-for="page in totalPages" :key="page"
                        class="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
                        :class="currentPage === page - 1 ? 'bg-[#ec8c25]' : 'bg-[#e2e2e2]'"
                        @click="currentPage = page - 1"></div>
                </div>
            </div>
        </div>
    </div>
</template>