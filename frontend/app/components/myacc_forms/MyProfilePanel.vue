<script setup>
import { AnOutlinedCloudUpload, ChPlus } from '@kalimahapps/vue-icons';
import test_userImage from '../../../public/images/test_user_prof2.jpg';

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
                        <input type="email"
                            class="bg-transparent border border-[#D76D0B] outline-none w-full py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="john123@gmail.com">
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">Username</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="John123@">
                        <input type="text" disabled class="bg-transparent outline-none w-1/2 py-3 px-4">
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

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <div class="w-fit flex flex-col items-start">
                        <span class="text-black text-[16px] font-medium font-[Inter]">Profile Photo</span>
                        <p class="text-[#8B8B8B] text-[15px] font-normal font-[Inter]">This photo will be displayed on
                            your profile</p>
                    </div>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <!-- Profile Image Preview -->
                        <img :src="test_userImage" alt="Profile"
                            class="w-[100px] h-[100px] object-cover rounded-full border border-[#E0802C] shadow" />
                        <!-- Drop Area -->
                        <label
                            class="flex flex-col justify-center items-center w-full p-8 border-2 border-[#E0802C] border-dashed rounded-lg cursor-pointer transition hover:bg-[#fff7ed]">
                            <input type="file" accept="image/*" class="hidden" />
                            <div class="flex flex-col items-center">
                                <AnOutlinedCloudUpload class="text-[#B9580E] w-10 h-10" />
                                <div class="w-full flex flex-row items-center gap-x-2">
                                    <span class="font-semibold text-[#000] text-[14px] font-[Inter]">Click to
                                        upload</span>
                                    <span class="text-gray-400 text-[14px] font-[Inter]">or drag and drop</span>
                                </div>
                                <span class="text-gray-400 text-[12px]">SVG, PNG and JPG (max. 800x400px)</span>
                            </div>
                        </label>
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

                <!-- shopping details -->

                <div class="w-full flex flex-row items-center justify-between mt-8">
                    <div class="w-fit flex flex-col items-start justify-center">
                        <span class="text-[20px] text-black font-medium font-[Inter]">Shopping Details</span>
                        <p class="text-[#8B8B8B] text-[15px] font-light font-[Inter]">Update your shipping details here.
                        </p>
                    </div>
                    <div class="w-fit flex flex-row items-center gap-x-2">
                        <button
                            class="text-[#CF600B] text-[16px] font-light font-[Inter] bg-[#e9ded4] w-[180px] py-3 rounded-sm cursor-pointer hover:bg-[#ad8b6e] hover:text-white duration-300 transition-all ease-in-out">Cancel</button>
                        <button
                            class="text-white text-[16px] font-light font-[Inter] bg-[#E0802C] w-[180px] py-3 rounded-sm cursor-pointer hover:bg-[#AD5910] duration-300 transition-all ease-in-out">Save
                            Changes</button>
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] mt-5"></div>

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">Street Address</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="Address Line 1">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="Address Line 2">
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">State/Province, City</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <select
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-[#212121] placeholder:text-gray-400 rounded-sm font-[Inter] font-light cursor-pointer">
                            <option value="0">Select Province</option>
                            <option value="1">Western Province</option>
                            <option value="2">Sabaragamuwa Province</option>
                        </select>
                        <select
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-[#212121] placeholder:text-gray-400 rounded-sm font-[Inter] font-light cursor-pointer">
                            <option value="0">Select City</option>
                            <option value="1">Colombo</option>
                            <option value="2">Gampaha</option>
                        </select>
                    </div>
                </div>

                <div class="w-full h-[0.8px] bg-[#E7E7E7] my-2"></div>

                <div class="w-full flex flex-row items-center justify-between my-6">
                    <span class="text-black text-[16px] font-medium font-[Inter]">Postal Code</span>
                    <div class="w-full flex flex-row items-center gap-x-4 max-w-2xl">
                        <input type="text"
                            class="bg-transparent border border-[#D76D0B] outline-none w-1/2 py-3 px-4 text-[15px] text-black placeholder:text-gray-400 rounded-sm font-[Inter] font-light"
                            placeholder="eg:-98765">
                        <input type="text" disabled class="bg-transparent outline-none w-1/2 py-3 px-4">
                    </div>
                </div>

                <div class="w-full grid grid-cols-3 gap-5 py-10">
                    <div class="grid bg-[#F9F0EA] rounded-sm drop-shadow-sm drop-shadow-slate-300 p-4">
                        <div class="w-full flex flex-col items-start justify-center gap-y-0.5">
                            <span class="text-[14px] text-[#158CC3] font-normal font-[Inter] mb-3">( Default address
                                )</span>
                            <span class="text-[14px] text-[#A64503] font-normal font-[Inter]">No: 121/5 Jayanthi Perera
                                Mawatha,Gampaha.</span>
                            <span class="text-[14px] text-[#A64503] font-normal font-[Inter]">Western Province</span>
                            <span class="text-[14px] text-[#A64503] font-normal font-[Inter]">71210</span>
                        </div>
                    </div>
                    <div class="grid bg-[#F9F0EA] rounded-sm drop-shadow-sm drop-shadow-slate-300 p-4 cursor-pointer">
                        <div class="w-full h-full flex flex-col items-center justify-center">
                            <ChPlus class="w-[60px] h-[60px] object-cover text-[#A64503]"/>
                            <span class="text-[14px] text-[#158CC3] font-normal font-[Inter]">Add New Address</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>