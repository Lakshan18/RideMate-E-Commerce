<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { styles } from '~/assets/api-styles/styles';
import { IoSharpChevronBack, CdHeart, CoCart, BsStar, BsStarFill } from '@kalimahapps/vue-icons';
import { productData, type Products } from '~/assets/data/product_listData';

const currentPage = ref(0);
const carouselRef = ref<HTMLElement>();
const isAnimating = ref(false);

// ✅ Only products with is_welcDeal:true
const filteredProducts = computed(() =>
    productData.filter(p => p.is_welcDeal === true)
);

const paginatedProducts = computed(() => {
    const pages: Products[][] = [];
    for (let i = 0; i < filteredProducts.value.length; i += 4) {
        pages.push(filteredProducts.value.slice(i, i + 4));
    }
    return pages;
});

const totalPages = computed(() => paginatedProducts.value.length);

const currentProducts = computed(() => {
    return paginatedProducts.value[currentPage.value] || [];
});

const canGoNext = computed(() => currentPage.value < totalPages.value - 1);
const canGoPrev = computed(() => currentPage.value > 0);

const nextPage = async () => {
    if (!canGoNext.value || isAnimating.value) return;
    isAnimating.value = true;

    if (carouselRef.value) {
        await gsap.to(carouselRef.value, { x: -100, opacity: 0, duration: 0.3, ease: "power2.out" });
    }

    currentPage.value++;
    await nextTick();

    if (carouselRef.value) {
        gsap.set(carouselRef.value, { x: 100, opacity: 0 });
        gsap.to(carouselRef.value, {
            x: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)",
            onComplete: () => { isAnimating.value = false }
        });
    }
};

const prevPage = async () => {
    if (!canGoPrev.value || isAnimating.value) return;
    isAnimating.value = true;

    if (carouselRef.value) {
        await gsap.to(carouselRef.value, { x: 100, opacity: 0, duration: 0.3, ease: "power2.out" });
    }

    currentPage.value--;
    await nextTick();

    if (carouselRef.value) {
        gsap.set(carouselRef.value, { x: -100, opacity: 0 });
        gsap.to(carouselRef.value, {
            x: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)",
            onComplete: () => { isAnimating.value = false }
        });
    }
};

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) stars.push(BsStarFill);
    if (hasHalfStar) stars.push(BsStar);
    while (stars.length < 5) stars.push(BsStar);

    return stars;
};

onMounted(() => {
    if (carouselRef.value) {
        gsap.from(carouselRef.value, {
            y: 50, opacity: 0, duration: 0.8, ease: "power2.out"
        });
    }
});
</script>

<template>
    <div class="w-full min-h-auto relative py-16">
        <div class="w-full flex flex-col items-start">
            <!-- Title -->
            <div class="w-full flex flex-row items-center justify-between">
                <div class="w-fit flex flex-row items-center gap-2">
                    <span :class="[styles.main_headingText, 'font-bold']">WELCOME</span>
                    <span :class="[styles.main_headingText, 'font-light']">DEALS</span>
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

            <div class="w-full h-[2px] bg-[#e2e2e2]"></div>

            <!-- Products -->
            <div class="w-full py-[4%] overflow-hidden relative">
                <div ref="carouselRef" class="w-full grid grid-cols-4 gap-6">
                    <div v-for="product in currentProducts" :key="product.id"
                        class="grid grid-cols-1 relative bg-[#f9ece4] shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                        <CdHeart
                            class="absolute w-7 h-7 top-2 right-2 z-10 text-[#C1AE9A] cursor-pointer hover:text-[#EB4539] duration-300 ease-in-out transition-all" />

                        <div class="w-full h-full flex flex-col justify-end">
                            <div class="w-full h-1/2 flex justify-center items-center pt-16">
                                <div class="w-fit h-[140px] bg-center bg-cover">
                                    <img :src="product.p_image" class="w-full h-full object-cover"
                                        :alt="product.p_name">
                                </div>
                            </div>
                            <div class="w-full h-1/2 flex flex-col gap-y-2 p-4">
                                <div class="w-full flex flex-col">
                                    <span class="text-[#C19C9A] text-[15px] font-light font-[Inter]">
                                        {{ product.p_category }}
                                    </span>
                                    <span class="text-[#4E4840] text-[20px] truncate font-medium font-[Inter]">
                                        {{ product.p_name }}
                                    </span>
                                </div>

                                <div class="w-full flex flex-col">
                                    <div class="w-full flex flex-row justify-start items-center gap-x-2 mt-6">
                                        <component v-for="(StarIcon, index) in renderStars(product.p_rating)"
                                            :key="index" :is="StarIcon" class="w-5 h-5 text-[#ec8c25]" />
                                    </div>

                                    <!-- ✅ Fixed price -->
                                    <div class="w-full flex flex-row items-center gap-x-2 mt-4">
                                        <span class="text-[#eb2525] text-[20px] font-semibold font-[Inter]">LKR</span>
                                        <div class="w-full flex flex-row items-center justify-between">
                                            <span class="text-[#eb2525] text-[20px] font-semibold font-[Inter]">
                                                500.00
                                            </span>
                                            <CoCart
                                                class="text-[#C1AE9A] w-7 h-7 cursor-pointer hover:text-[#ec8c25] duration-300 transition-all ease-in-out" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ❌ Removed discount label -->
                    </div>

                    <div v-if="currentProducts?.length === 0"
                        class="col-span-4 flex flex-col items-center justify-center py-16">
                        <span class="text-[#4E4840] text-[22px] font-medium font-[Inter]">
                            No Welcome Deals found.
                        </span>
                    </div>
                </div>
            </div>

            <!-- Pagination dots -->
            <div v-if="totalPages > 1" class="w-full flex justify-center mt-2">
                <div class="flex space-x-2">
                    <div v-for="page in totalPages" :key="page"
                        class="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer"
                        :class="currentPage === page - 1 ? 'bg-[#ec8c25]' : 'bg-[#e2e2e2]'"
                        @click="currentPage = page - 1">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
