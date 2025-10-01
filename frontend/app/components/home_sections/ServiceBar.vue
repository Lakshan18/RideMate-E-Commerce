<script setup lang="ts">
import { FlPersonSupport, CaDelivery, LaWalletSolid, GlRepeat } from '@kalimahapps/vue-icons';

interface Services {
  id: number;
  icon: any;
  title: string;
  subTitle: string;
  size: string;
}

const serviceData: Services[] = [
  {
    id: 1,
    icon: CaDelivery,
    title: "FAST DELIVERY",
    subTitle: "Island wide delivery",
    size: "w-14 h-14"
  },
  {
    id: 2,
    icon: LaWalletSolid,
    title: "COMFORT PAYMENTS",
    subTitle: "Credit card available",
    size: "w-14 h-14"
  },
  {
    id: 3,
    icon: GlRepeat,
    title: "EASY RETURNS",
    subTitle: "365 days for free",
    size: "w-10 h-10"
  },
  {
    id: 4,
    icon: FlPersonSupport,
    title: "24/7 Customer Support",
    subTitle: "24 hours active services",
    size: "w-10 h-10"
  }
];
</script>

<template>
  <div class="w-full min-h-auto relative bg-[#fff] p-4 shadow-sm">
    <div class="w-full flex flex-row items-center justify-between">
      <div
        v-for="service in serviceData"
        :key="service.id"
        class="w-fit flex flex-row items-center gap-x-4"
      >
        <component
          :is="service.icon"
          :class="`${service.size} text-[#FF9E66]`"
        />
        <div class="w-fit flex flex-col items-start justify-center">
          <span class="text-[#000] text-[18px] font-[Poppins] font-medium">
            {{ service.title }}
          </span>
          <span class="text-[#A69688] text-[14px] font-[Poppins] font-light">
            {{ service.subTitle }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
