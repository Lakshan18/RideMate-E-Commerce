<script setup lang="ts">
import { styles } from '~/assets/api-styles/styles';
import { PhFacebookLogo, BsWhatsapp, BsInstagram } from '@kalimahapps/vue-icons';

</script>

<template>
   <div class="w-full min-h-auto py-4">
      <div class="fex flex-col w-full">
         <div class="flex flex-row items-center justify-between">
            <div class="w-fit flex flex-row items-center justify-between gap-x-2">
               <span :class=[styles.nav_topText]>My Account</span>
               <div class="bg-[#6a6a6a] w-[1px] h-[20px]"></div>
               <span :class=[styles.nav_topText]>Cart</span>
            </div>

            <div class="flex flex-row items-center w-fit gap-x-5">
               <span class="text-[24px] text-[#2a2a2a] font-[Roboto] font-semibold">Ride<span
                     class="text-orange-600">Mate</span></span>

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

         <!-- top below navbar (2nd bar) -->
         <div class="w-full flex flex-row items-center justify-between">

            <!-- need created sections!! -->
         
         </div>
      </div>
   </div>
</template>