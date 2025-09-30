export interface Products {
    id: number;
    p_category: string;
    p_name: string;
    p_image: string;
    p_rating: number;
    p_price: number;
    p_feature: string;
}

import product1 from '~/assets/images/products/valvoline_4_73L.png';
import product2 from '~/assets/images/products/XT_brake-pads.png';
import product3 from '~/assets/images/products/elentra_2021_2023.png';
import product4 from '~/assets/images/products/evolution.png';
import product5 from '~/assets/images/products/advanced_oil.png';
import product6 from '~/assets/images/products/exide_battery.png';
import product7 from '~/assets/images/products/car_dashboard_display.png';
import product8 from '~/assets/images/products/car_seat_cov.png';
import product9 from '~/assets/images/products/pioneer_car_aud.png';
import product10 from '~/assets/images/products/bosch_spark_plugs.png';


export const productData: Products[] = [
    {
        id: 1,
        p_category: "Repair Parts",
        p_name: "Valvoline 4.73L 5W-30",
        p_image: product1,
        p_rating: 4,
        p_price: 5800,
        p_feature: "SALE",
    },
    {
        id: 2,
        p_category: "Repair Parts",
        p_name: "Xtreme Row Break Pads",
        p_image: product2,
        p_rating: 4,
        p_price: 7800,
        p_feature: "SALE",
    },
    {
        id: 3,
        p_category: "Body Parts",
        p_name: "Hyundai Elentra Front Bumper 2021 - 2023",
        p_image: product3,
        p_rating: 4,
        p_price: 80000,
        p_feature: "SALE",
    },
    {
        id: 4,
        p_category: "Performance Parts",
        p_name: 'Evolution Liners "14,16"',
        p_image: product4,
        p_rating: 4,
        p_price: 12100,
        p_feature: "SALE",
    },
    {
        id: 5,
        p_category: "Repair Parts",
        p_name: "ADVANCED Oil 2L 5W-30",
        p_image: product5,
        p_rating: 4,
        p_price: 4800,
        p_feature: "SALE",
    },
    {
        id: 6,
        p_category: "Electronics",
        p_name: 'Exide Battery "12W,25W"',
        p_image: product6,
        p_rating: 4,
        p_price: 10000,
        p_feature: "SALE",
    },
    {
        id: 7,
        p_category: "Electronics",
        p_name: "Car Dashboard Display 8.9inches",
        p_image: product7,
        p_rating: 5,
        p_price: 45000,
        p_feature: "LATEST",
    },
    {
        id: 8,
        p_category: "Body Parts",
        p_name: "Car Seat Covers - Premium Leather",
        p_image: product8,
        p_rating: 3,
        p_price: 15000,
        p_feature: "SALE",
    },
    {
        id: 9,
        p_category: "Electronics",
        p_name: "Pioneer Car Audio System",
        p_image: product9,
        p_rating: 5,
        p_price: 35000,
        p_feature: "SALE",
    },
    {
        id: 10,
        p_category: "Repair Parts",
        p_name: "Bosch Spark Plug Set",
        p_image: product10,
        p_rating: 4,
        p_price: 3000,
        p_feature: "LATEST",
    }
];