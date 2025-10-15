<script setup>

</script>

<template>
    <div class="w-full min-h-auto relative">
        <div class="w-full flex flex-col items-start gap-y-3">
            <div class="w-full flex flex-row items-center justify-between">
                <div class="w-fit flex flex-col items-start justify-center">
                    <span class="text-[20px] text-black font-medium font-[Inter]">Personal Info</span>
                    <p class="text-[#8B8B8B] text-[15px] font-light font-[Inter]">Update your profile with personal
                        details here.</p>
                </div>
                <div class="w-fit flex flex-row items-center gap-x-2">
                    <button
                        class="text-[#CF600B] text-[16px] font-light font-[Inter] bg-[#e9ded4] w-[180px] py-3 rounded-sm cursor-pointer hover:bg-[#ad8b6e] hover:text-white duration-300 transition-all ease-in-out">Cancel</button>
                    <button
                        class="text-white text-[16px] font-light font-[Inter] bg-[#E0802C] w-[180px] py-3 rounded-sm cursor-pointer hover:bg-[#AD5910] duration-300 transition-all ease-in-out">Save
                        Changes</button>
                </div>
            </div>
            <div class="w-full h-[1.5px] bg-[#E7E7E7] mt-2"></div>

            <!-- form section -->
            <div class="w-full relative flex flex-col items-start">

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">Name</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="John">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="Doe">
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">Email Address</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-full py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="john123@gmail.com">
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">Mobile Number</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="+94771122334">
                        <input type="text" disabled class="bg-transparent outline-none w-1/2 py-3 px-4">
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

            </div>

        </div>
    </div>
</template>