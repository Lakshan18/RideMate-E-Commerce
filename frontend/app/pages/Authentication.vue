<script setup>
import { AnOutlinedUser, MdOutlinedEmail, BsTelephone, AnOutlinedLock, DeGoogleOriginal, DeFacebookPlain, DeLinkedinOriginal } from '@kalimahapps/vue-icons';
import authBg from '~/assets/images/auth_bg.png';

definePageMeta({
    layout: false
});

import { ref, nextTick } from 'vue';
import gsap from 'gsap';

const isLogin = ref(true);
const loginRef = ref(null);
const registerRef = ref(null);

const toggleForm = async () => {
    const currentForm = isLogin.value ? loginRef.value : registerRef.value;
    await gsap.to(currentForm, { x: isLogin.value ? -200 : 200, opacity: 0, duration: 0.4, ease: 'power2.inOut' });

    isLogin.value = !isLogin.value;

    await nextTick();

    const newForm = isLogin.value ? loginRef.value : registerRef.value;
    gsap.fromTo(newForm, { x: isLogin.value ? -200 : 200, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
};
</script>

<template>
    <div class="w-full h-screen">
        <div class="w-full h-full flex relative bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${authBg})` }">
            <div class="w-full h-full absolute z-0 bg-[rgba(82,63,37,0.57)]"></div>
            <div class="w-full h-full flex justify-center z-10 items-center">
                <div class="max-w-md w-full bg-[#FBF3E8] rounded-md border-2 border-[#D3800D]">

                    <!-- Login form -->
                    <div v-if="isLogin" key="login" ref="loginRef"
                        class="w-full h-auto flex flex-col items-start py-4 px-5">
                        <div class="flex flex-col items-start my-4">
                            <span class="text-[24px] text-[#000] font-semibold font-[Quicksand]">Login</span>
                            <p class="text-[16px] text-[#000] font-normal font-[Quicksand]">Please login to continue
                            </p>
                        </div>
                        <div class="w-full flex flex-col items-start mt-4">
                            <span class="text-[14px] text-[#000] font-semibold font-[Quicksand] mb-1">Email</span>

                            <div class="relative w-full">
                                <MdOutlinedEmail
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-[#CB9A6F] w-5 h-5" />

                                <input type="email"
                                    class="w-full py-2 pl-10 rounded-sm font-normal bg-[rgba(199,141,80,0.19)] border outline-none border-[#D3800D] px-3 placeholder-[#CB9A6F]"
                                    placeholder="Enter email address" />
                            </div>

                            <span
                                class="text-[14px] text-[#000] font-semibold font-[Quicksand] mt-4 mb-1">Password</span>

                            <div class="relative w-full">
                                <AnOutlinedLock
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-[#CB9A6F] w-5 h-5" />

                                <input type="password"
                                    class="w-full py-2 pl-10 rounded-sm font-normal bg-[rgba(199,141,80,0.19)] border outline-none border-[#D3800D] px-3 placeholder-[#CB9A6F]"
                                    placeholder="Enter password" />
                            </div>

                            <div class="w-full flex flex-row items-center justify-between py-6">
                                <div class="w-fit flex flex-row items-center justify-between gap-2">
                                    <input type="checkbox" class="w-4 h-4 border border-[#CB9A6F] bg-[#FBF3E8]">
                                    <span class="text-[13px] text-[#D77600] font-medium font-[Quicksand]">Remember
                                        Me</span>
                                </div>
                                <span
                                    class="text-[13px] text-[#D77600] font-medium font-[Quicksand] duration-300 transition-all ease-in-out hover:text-[#9E5D0D] cursor-pointer">Forgot
                                    Password
                                    ?</span>
                            </div>
                            <button
                                class="w-full mt-4 py-2 rounded-sm bg-[#E58825] text-[16px] text-white font-[Roboto] font-light cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#B56918]">LOGIN</button>
                            <span
                                class="w-full my-3 text-[13px] text-[#D77600] font-medium font-[Quicksand] text-center duration-300 transition-all ease-in-out hover:text-[#9E5D0D] cursor-pointer"
                                @click="toggleForm">If
                                you haven't already an account ?</span>

                            <div class="w-full flex flex-col items-center">
                                <div class="w-full flex flex-col items-center">
                                    <div class="w-[140px] h-[1px] bg-[#d3a05898] my-3"></div>
                                    <span class="text-[#D77600] text-[14px] font-medium font-[Quicksand]">OR</span>
                                </div>
                                <div class="w-fit flex flex-row items-center justify-center gap-5 py-3">
                                    <DeGoogleOriginal class="w-8 h-8 object-cover" />
                                    <DeFacebookPlain class="w-8 h-8 object-cover" />
                                    <DeLinkedinOriginal class="w-8 h-8 object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- SignUp form -->
                    <div v-else key="register" ref="registerRef"
                        class=" w-full h-auto flex flex-col items-start py-4 px-5">
                        <div class="flex flex-col items-start my-4">
                            <span class="text-[24px] text-[#000] font-semibold font-[Quicksand]">Register</span>
                            <p class="text-[16px] text-[#000] font-normal font-[Quicksand]">Welcome to RideMate
                                Platform
                            </p>
                        </div>
                        <div class="w-full flex flex-col items-start mt-4">
                            <span class="text-[14px] text-[#000] font-semibold font-[Quicksand] mb-1">Full
                                Name</span>

                            <div class="relative w-full">
                                <AnOutlinedUser
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-[#CB9A6F] w-5 h-5" />

                                <input type="text"
                                    class="w-full py-2 pl-10 rounded-sm font-normal bg-[rgba(199,141,80,0.19)] border outline-none border-[#D3800D] px-3 placeholder-[#CB9A6F]"
                                    placeholder="Enter full name" />
                            </div>

                            <span class="text-[14px] text-[#000] font-semibold font-[Quicksand] mt-4 mb-1">Email</span>

                            <div class="relative w-full">
                                <MdOutlinedEmail
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-[#CB9A6F] w-5 h-5" />

                                <input type="email"
                                    class="w-full py-2 pl-10 rounded-sm font-normal bg-[rgba(199,141,80,0.19)] border outline-none border-[#D3800D] px-3 placeholder-[#CB9A6F]"
                                    placeholder="Enter email address" />
                            </div>

                            <span class="text-[14px] text-[#000] font-semibold font-[Quicksand] mt-4 mb-1">Mobile</span>

                            <div class="relative w-full">
                                <BsTelephone class="absolute left-3 top-1/2 -translate-y-1/2 text-[#CB9A6F] w-5 h-5" />

                                <input type="text"
                                    class="w-full py-2 pl-10 rounded-sm font-normal bg-[rgba(199,141,80,0.19)] border outline-none border-[#D3800D] px-3 placeholder-[#CB9A6F]"
                                    placeholder="Enter mobile number" />
                            </div>

                            <span
                                class="text-[14px] text-[#000] font-semibold font-[Quicksand] mt-4 mb-1">Password</span>

                            <div class="relative w-full">
                                <AnOutlinedLock
                                    class="absolute left-3 top-1/2 -translate-y-1/2 text-[#CB9A6F] w-5 h-5" />

                                <input type="password"
                                    class="w-full py-2 pl-10 rounded-sm font-normal bg-[rgba(199,141,80,0.19)] border outline-none border-[#D3800D] px-3 placeholder-[#CB9A6F]"
                                    placeholder="Create password" />
                            </div>

                            <div class="w-fit flex flex-row justify-start gap-2 py-5">
                                <input type="checkbox" class="w-4 h-4 border border-[#CB9A6F] bg-[#FBF3E8]">
                                <span class="text-[13px] text-[#D77600] font-medium font-[Quicksand]">Agree with
                                    terms
                                    and conditions</span>
                            </div>

                            <button
                                class="w-full mt-4 py-2 rounded-sm bg-[#E58825] text-[16px] text-white font-[Roboto] font-light cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#B56918]">REGISTER</button>
                            <span
                                class="w-full my-3 text-[13px] text-[#D77600] font-medium font-[Quicksand] text-center duration-300 transition-all ease-in-out hover:text-[#9E5D0D] cursor-pointer"
                                @click="toggleForm">If
                                you have already an account ?</span>

                            <!-- <div class="w-full flex flex-col items-center">
                                <div class="w-full flex flex-col items-center">
                                    <div class="w-[140px] h-[1px] bg-[#d3a05898] my-3"></div>
                                    <span class="text-[#D77600] text-[14px] font-medium font-[Quicksand]">OR</span>
                                </div>
                                <div class="w-fit flex flex-row items-center justify-center gap-5 py-3">
                                    <DeGoogleOriginal class="w-8 h-8 object-cover" />
                                    <DeFacebookPlain class="w-8 h-8 object-cover" />
                                    <DeLinkedinOriginal class="w-8 h-8 object-cover" />
                                </div>
                            </div> -->
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<!-- <style>
.slide-fade-enter-from {
    transform: translateX(200px);
    opacity: 0;
}

.slide-fade-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.5s ease;
}
</style> -->
