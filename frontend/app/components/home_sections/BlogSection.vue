<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';

</script>

<template>
    <div class="w-full min-h-auto relative py-16">
        <div class="w-full flex flex-col items-start">
            <div class="w-fit flex flex-row items-center gap-2">
                <span :class="[styles.main_headingText, 'font-bold']">LATEST</span>
                <span :class="[styles.main_headingText, 'font-light']">FROM RIDEMATE</span>
            </div>
            <div class="w-full h-[2px] bg-[#e2e2e2]"></div>
        </div>
    </div>
</template>