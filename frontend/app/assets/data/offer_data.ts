export interface Offers {
    id: number;
    titleP1: string;
    titleP2: string;
    desc: string;
    product_img: string;
    priceTitle: string;
    price: string;
    endDate:string;
}

import product1 from '~/assets/images/offers/evolution.png';
import product2 from '~/assets/images/offers/advanced_oil.png';
import product3 from '~/assets/images/offers/exide_battery.png';

export const offersData: Offers[] = [
   {
        id: 1,
        titleP1: "SAVE ON",
        titleP2: "BRAKING POWER",
        desc: "High-performance brake pads for all vehicles – precision tested for maximum safety.",
        product_img: product1,
        priceTitle: "From",
        price: "14500",
        endDate: "2025-10-05T23:59:59",
    },
    {
        id: 2,
        titleP1: "PROTECT",
        titleP2: "YOUR ENGINE",
        desc: "Premium synthetic oils for smoother rides and longer engine life.",
        product_img: product2,
        priceTitle: "Up To",
        price: "4500",
        endDate: "2025-10-10T18:00:00",
    },
    {
        id: 3,
        titleP1: "POWER",
        titleP2: "THAT LASTS",
        desc: "Reliable, maintenance-free car batteries designed for every journey.",
        product_img: product3,
        priceTitle:"Up To",
        price: "3500",
        endDate: "2025-10-15T12:00:00",
    }
];