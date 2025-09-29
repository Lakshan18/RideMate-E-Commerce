export interface Category {
    id: number;
    title: string;
    image: string;
    c_list: string[];
}

import bodyParts from '~/assets/images/category/body_parts.png';
import performanceParts from '~/assets/images/category/performance_parts.png';
import electronics from '~/assets/images/category/electronics.png';
import lighting from '~/assets/images/category/lighting.png';
import wheels from '~/assets/images/category/wheels.png';
import repairParts from '~/assets/images/category/repaires.png';

export const categoryData: Category[] = [
    {
        id: 1,
        title: "BODY PARTS",
        image: bodyParts,
        c_list: ["Bumpers", "Fenders", "Mirrors", "Doors"],
    },
    {
        id: 2,
        title: "PERFORMANCE PARTS",
        image: performanceParts,
        c_list: ["Air Intake Systems", "Engine Components", "Performance Chips"],
    },
    {
        id: 3,
        title: "ELECTRONICS",
        image: electronics,
        c_list: ["Installation Parts", "Stereos", "Amplifiers", "Speakers"],
    },
    {
        id: 4,
        title: "LIGHTING",
        image: lighting,
        c_list: ["Headlights", "Fog Lights", "LED Lights", "Bulbs"],
    },
    {
        id: 5,
        title: "WHEELS & TIRES",
        image: wheels,
        c_list: ["Tires", "Wheel Covers", "Lug Nuts & Locks", "Tire Chains"],
    },
    {
        id: 6,
        title: "REPAIR PARTS",
        image: repairParts,
        c_list: ["Exhaust Parts", "Engine Parts", "Break Parts", "Fuel Delivery"],
    },
];