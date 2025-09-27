<script setup lang="ts">

import { badgeData } from '~/assets/data/badge_itemData';

const badges = badgeData;

</script>

<template>
    <div class="w-full flex flex-row items-center justify-between mb-[6%]">
        <div v-for="(badge) in badges" :key="badge.id" class="w-24 h-24 bg-cover bg-center">
            <img :src="badge.image" :alt="badge.name" class="w-full h-full object-cover">
        </div>
    </div>
</template>