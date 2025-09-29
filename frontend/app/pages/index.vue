<script setup lang="ts">
import BadgeRowSection from '~/components/home_sections/BadgeRowSection.vue';
import Devide_OfferBar from '~/components/home_sections/Devide_OfferBar.vue';
import HeroSection from '~/components/home_sections/HeroSection.vue';
import Pop_Category from '~/components/home_sections/Pop_Category.vue';
import SaleSection from '~/components/home_sections/SaleSection.vue';

</script>

<template>
  <div class="relative w-full h-auto mt-3.5">
    <HeroSection />
    <BadgeRowSection />
    <SaleSection />
    <Pop_Category />
    <Devide_OfferBar />
  </div>
</template>