<script setup lang="ts">
import BadgeRowSection from '~/components/home_sections/BadgeRowSection.vue';
import Devide_OfferBar from '~/components/home_sections/Devide_OfferBar.vue';
import HeroSection from '~/components/home_sections/HeroSection.vue';
import Pop_Category from '~/components/home_sections/Pop_Category.vue';
import SaleSection from '~/components/home_sections/SaleSection.vue';
import ProductSection from '~/components/home_sections/ProductSection.vue';
import PremiumItem_Banner from '~/components/home_sections/PremiumItem_Banner.vue';
import ExclusiveDisc from '~/components/home_sections/ExclusiveDisc.vue';
import WelcomeDeals from '~/components/home_sections/WelcomeDeals.vue';
import ServiceBar from '~/components/home_sections/ServiceBar.vue';

</script>

<template>
  <div class="relative w-full h-auto mt-3.5">
    <HeroSection />
    <BadgeRowSection />
    <SaleSection />
    <WelcomeDeals/>
    <Pop_Category />
    <Devide_OfferBar />
    <ProductSection />
    <PremiumItem_Banner />
    <ExclusiveDisc/>
    <ServiceBar/>
  </div>
</template>