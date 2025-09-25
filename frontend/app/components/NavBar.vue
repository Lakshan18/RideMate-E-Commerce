<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';

</script>

<template>
    <div class="w-full min-h-auto py-4">
       <div class="flex flex-row items-center justify-between">
          <div class="w-fit flex flex-row items-center justify-between gap-x-2">
             <span :class=[styles.nav_topText]>My Account</span>
             <div class="bg-[#6a6a6a] w-[1px] h-[20px]"></div>
             <span :class=[styles.nav_topText]>Cart</span>
          </div>

          <!-- social icons show -->
          <div class="flex flex-row items-center justify-between gap-x-2.5">
            
          </div>
       </div>
    </div>
</template>