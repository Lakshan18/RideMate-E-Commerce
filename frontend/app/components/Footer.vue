<script setup lang="ts">
import { CoLocationPin, BsTelephone, MdOutlinedEmail } from '@kalimahapps/vue-icons';

interface FooterItems {
    id: number;
    title: string;
    items: string[];
}

const footerItemData: FooterItems[] = [
    {
        id: 1,
        title: "INFORMATION",
        items: ["About Us", "Contact Us", "Privacy & Policy", "Terms & Conditions", "Careers", "Blog"],
    },
    {
        id: 2,
        title: "CUSTOMER SERVICE",
        items: ["My Account", "Order Tracking", "Wishlist", "Return & Refunds", "Shipping Info", "FAQs"],
    },
    {
        id: 3,
        title: "OUR FEATURES",
        items: ["Wide Range of Auto Parts", "Trusted Quality & Brands", "Secure Payments", "Fast Delivery", "24/7 Customer Support", "Easy Returns"],
    }
];

interface FooterIcons {
    id: number;
    icon: string;
    name: string;
}

import fbIc from '~/assets/images/icons/facebook_ic.png';
import insIc from '~/assets/images/icons/instagram_ic.png';
import linIc from '~/assets/images/icons/linkedin_ic.png';
import xIc from '~/assets/images/icons/x_ic.png';

import visaIc from '~/assets/images/icons/visa_ic.png';
import stripeIc from '~/assets/images/icons/stripe_ic.png';
import gpayIc from '~/assets/images/icons/gpay_ic.png';
import paypalIc from '~/assets/images/icons/paypal_ic.png';

const socialData: FooterIcons[] = [
    {
        id: 1,
        icon: fbIc,
        name: "Facebook",
    },
    {
        id: 2,
        icon: insIc,
        name: "Instagram",
    },
    {
        id: 3,
        icon: linIc,
        name: "Linked In",
    },
    {
        id: 4,
        icon: xIc,
        name: "X",
    }
];

const paymentData: FooterIcons[] = [
    {
        id: 1,
        icon: visaIc,
        name: "Payhere",
    },
    {
        id: 2,
        icon: stripeIc,
        name: "Stripe",
    },
    {
        id: 3,
        icon: gpayIc,
        name: "G-Pay",
    },
    {
        id: 4,
        icon: paypalIc,
        name: "PayPal",
    }
];

</script>

<template>
    <div class="w-full min-h-auto relative px-[4%] py-12 bg-[#272727]">
        <div class="w-full flex flex-row items-start justify-between">
            <div class="max-w-md flex flex-col items-start gap-y-2">
                <div class="w-fit flex flex-row items-center">
                    <span class="text-[#fff] text-[40px] font-bold font-[Inter]">Ride</span>
                    <span class="text-[#F58829] text-[40px] font-bold font-[Inter]">Mate</span>
                </div>
                <p class="text-[#DCC6B0] text-[16px] font-light font-[Quicksand]">Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Sint necessitatibus dignissimos veniam.
                    Ullam possimus est illum, alias veniam tempore exercitationem deleniti suscipit assumenda, nobis sit
                    et. Odit eius commodi voluptate?</p>
                <div class="w-full flex flex-col items-start gap-y-4 pt-6">
                    <div class="w-fit flex flex-row items-center gap-x-1.5">
                        <CoLocationPin class="w-5 h-5 object-cover text-[#DCC6B0]" />
                        <span class="text-[15px] text-[#DCC6B0] font-light font-[Quicksand]">Ridemate Co , Raja Mawatha,
                            Bambalapitiya.</span>
                    </div>
                    <div class="w-fit flex flex-row items-center gap-x-1.5">
                        <BsTelephone class="w-5 h-5 object-cover text-[#DCC6B0]" />
                        <span class="text-[15px] text-[#DCC6B0] font-light font-[Quicksand]">+94 11 222 33 44 |
                            Hotline</span>
                    </div>
                    <div class="w-fit flex flex-row items-center gap-x-1.5">
                        <MdOutlinedEmail class="w-5 h-5 object-cover text-[#DCC6B0]" />
                        <span
                            class="text-[15px] text-[#DCC6B0] font-light font-[Quicksand]">ridemate25@officialbiz.com</span>
                    </div>
                </div>
            </div>
            <div class="w-full max-w-3xl flex flex-row items-start justify-between">
                <div v-for="footerItem in footerItemData" :key="footerItem.id"
                    class="w-fit flex flex-col items-start gap-y-1">
                    <span class="text-white text-[18px] font-semibold font-[Inter]">{{ footerItem.title }}</span>
                    <div v-for="(item, index) in footerItem.items" class="w-fit flex flex-row items-center gap-2">
                        <div :key="index" class="w-[6px] h-[6px] bg-[#F3A444]"></div>
                        <span class="text-[15px] text-[#DCC6B0] font-light font-[Quicksand] cursor-pointer duration-300 ease-in-out transition-all hover:text-[#F3A444]">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-row items-center justify-between pt-8">
            <div class="w-fit flex flex-col items-start">
                <span class="text-white text-[15px] font-medium font-[Inter]">JOIN WITH US:</span>
                <div class="w-fit flex flex-row items-center gap-x-4">
                    <div v-for="social in socialData" :key="social.id"
                        class="w-[40px] h-[40px] bg-center bg-cover bg-no-repeat">
                        <img :src="social.icon" class="w-full h-full object-cover" :alt="social.name">
                    </div>
                </div>
            </div>
            <div class="w-fit flex flex-col items-start">
                <span class="text-white text-[15px] font-medium font-[Inter]">WE ACCEPT:</span>
                <div class="w-fit flex flex-row items-center gap-x-4">
                    <div v-for="payment in paymentData" :key="payment.id"
                        class="w-[40px] h-[40px] bg-center bg-cover bg-no-repeat">
                        <img :src="payment.icon" class="w-full h-full object-cover" :alt="payment.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>