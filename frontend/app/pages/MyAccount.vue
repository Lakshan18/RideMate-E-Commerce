<script setup lang="ts">
import NavBar from '~/components/NavBar.vue';
import { ref } from 'vue';
import { Motion } from '@motionone/vue';
import MyProfilePanel from '~/components/myacc_forms/MyProfilePanel.vue';
import SecurityPanel from '~/components/myacc_forms/SecurityPanel.vue';
import BillingPanel from '~/components/myacc_forms/BillingPanel.vue';
import NotificationPanel from '~/components/myacc_forms/NotificationPanel.vue';

definePageMeta({
    layout: false,
});

const tabs = [
    { key: 'MyProfile', label: 'My Profile' },
    { key: 'Security', label: 'Password & Security' },
    { key: 'Billing', label: 'Billing' },
    { key: 'Notify', label: 'Notifications' }
];
const activeTab = ref('MyProfile');

function setActiveTab(tabKey: string) {
    activeTab.value = tabKey;
    console.log('Tab changed:', tabKey);
}
</script>

<template>
    <div class="px-[4%] bg-[#F8F5F3] h-full">
        <NavBar />
        <div class="w-full h-screen relative">
            <!-- breadcrumb section -->
            <div class="w-fit flex flex-row items-center gap-x-2 my-2">
                <span class="text-[#362A1E] text-[14px] font-normal font-[Inter] cursor-pointer">Home &gt;</span>
                <span class="text-[#7C5B3B] text-[14px] font-normal font-[Inter] cursor-pointer">My Account</span>
            </div>

            <!-- tab with form sections -->
            <div
                class="w-full h-auto relative mt-[2%] py-5 px-8 bg-white rounded-lg drop-shadow-slate-300 drop-shadow-sm">
                <div class="w-full flex flex-col items-start">
                    <span class="text-[#362A1E] text-[28px] font-semibold font-[Roboto] mb-2">My Account</span>
                    <div class="w-full flex flex-row items-center justify-start mt-3">
                        <div class="w-fit flex flex-row items-center gap-x-6">
                            <div v-for="tab in tabs" :key="tab.key" @click="setActiveTab(tab.key)"
                                class="w-fit relative hover:bg-gray-100 duration-300 ease-in-out transition-all cursor-pointer py-1">
                                <span :class="[
                                    'text-[15px] font-[Inter] px-2',
                                    tab.key === activeTab ? 'text-[#EA8406] font-medium' : 'text-[#625549] font-light'
                                ]">{{ tab.label }}</span>
                                <Motion v-if="tab.key === activeTab" :initial="{ opacity: 0, scaleX: 0.7 }"
                                    :animate="{ opacity: 1, scaleX: 1 }"
                                    :transition="{ duration: 0.3, easing: 'ease-in-out' }"
                                    class="absolute w-full h-[2px] bg-[#EA8406] -bottom-0.5 z-10" />
                            </div>
                        </div>
                    </div>
                    <div class="relative w-full h-[2px] bg-[#d1d1d1] z-0"></div>
                </div>

                <div class="w-full relative min-h-auto py-8">
                    <Motion :key="activeTab" :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
                        :exit="{ opacity: 0, y: -30 }" :transition="{ duration: 0.35, easing: 'ease-in-out' }">
                        <div v-if="activeTab === 'MyProfile'" class="p-4 bg-transparent">
                            <MyProfilePanel />
                        </div>
                        <div v-else-if="activeTab === 'Security'" class="p-4 bg-transparent">
                            <SecurityPanel />
                        </div>
                        <div v-else-if="activeTab === 'Billing'" class="p-4 bg-transparent">
                            <BillingPanel />
                        </div>
                        <div v-else-if="activeTab === 'Notify'" class="p-4 bg-transparent">
                            <NotificationPanel />
                        </div>
                    </Motion>
                </div>
            </div>
        </div>
    </div>
</template>