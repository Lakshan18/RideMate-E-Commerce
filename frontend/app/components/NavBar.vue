<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';
import { PhFacebookLogo, BsWhatsapp, BsInstagram, TaOutlineCategoryPlus } from '@kalimahapps/vue-icons';
import { navItems, type NavItem } from '~/assets/data/navigation';
import { ref } from 'vue';

type StyleKey = keyof typeof styles;

const navigationItems = ref(navItems);

const handleNavClick = (item: NavItem) => {
   navigationItems.value.forEach(navItem => {
      navItem.isActive = navItem.id == item.id
   });

   console.log("Navigation to: ", item.href);
}

const getStyleClass = (className: string) => {
   return styles[className as StyleKey];
}
</script>

<template>
   <div class="w-full min-h-auto py-4">
      <div class="flex flex-col w-full">
         <!-- Top Bar -->
         <div class="flex flex-row items-center justify-between mb-3.5">
            <div class="w-fit flex flex-row items-center justify-between gap-x-2">
               <span :class="[styles.nav_topText]">My Account</span>
               <div class="bg-[#6a6a6a] w-[1px] h-[20px]"></div>
               <span :class="[styles.nav_topText]">Cart</span>
            </div>

            <div class="flex flex-row items-center w-fit gap-x-5">
               <span class="text-[24px] text-[#2a2a2a] font-[Roboto] font-semibold">
                  Ride<span class="text-orange-600">Mate</span>
               </span>

               <!-- social icons show -->
               <div class="w-fit flex flex-row items-center justify-between gap-x-3">
                  <PhFacebookLogo
                     class="w-8 h-8 text-[#000] hover:text-[#FF8C00] duration-300 ease-in-out transition-all cursor-pointer" />
                  <BsWhatsapp
                     class="w-[25px] h-[25px] text-[#000] hover:text-[#FF8C00] duration-300 ease-in-out transition-all cursor-pointer" />
                  <BsInstagram
                     class="w-[25px] h-[25px] text-[#000] hover:text-[#FF8C00] duration-300 ease-in-out transition-all cursor-pointer" />
               </div>
            </div>
         </div>

         <!-- Bottom Navigation Bar - Fixed Layout -->
         <div class="w-full flex flex-row items-center justify-between bg-white">
            <!-- Categories Button - Left -->
            <div class="flex-shrink-0">
               <div class="flex flex-row justify-center items-center px-6 py-3 gap-2 bg-[#C09A53] cursor-pointer duration-300 transition-all ease-in-out hover:bg-[#756445]">
                  <span :class="[styles.nav_bottomText, 'text-white']">Categories</span>
                  <TaOutlineCategoryPlus class="w-5 h-5 text-white" />
               </div>
            </div>

            <!-- Navigation Items - Center -->
            <div class="flex-1 flex flex-row items-center justify-center gap-8">
               <span 
                  v-for="item in navigationItems" 
                  :key="item.id" 
                  :class="[
                     getStyleClass(item.class),
                     'cursor-pointer transition-all duration-300 px-4 py-3',
                     item.isActive ? 'text-[#FF8C00] font-semibold bg-[#F8F5F3]' : 'text-[#2a2a2a] hover:text-[#FF8C00] hover:bg-gray-100'
                  ]" 
                  @click="handleNavClick(item)"
               >
                  {{ item.label }}
               </span>
            </div>

            <!-- Special Offer Button - Right -->
            <div class="flex-shrink-0">
               <div class="flex flex-row justify-center items-center px-6 py-3 gap-2 bg-[#C09A53] cursor-pointer duration-300 transition-all ease-in-out hover:bg-[#756445]">
                  <span :class="[styles.nav_bottomText, 'text-white']">Special Offer</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>