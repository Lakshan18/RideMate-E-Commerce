export interface CaraouselSlide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    image: string;
    buttonLink: string;
}

import caraousel1 from '~/assets/images/caraousel_1.png';
import caraousel2 from '~/assets/images/caraousel_2.png';
import caraousel3 from '~/assets/images/caraousel_3.png';
import caraousel4 from '~/assets/images/caraousel_4.png';
import caraousel5 from '~/assets/images/caraousel_5.png';

export const heroCaraouselData: CaraouselSlide[] = [
    {
        id: 1,
        title: "Your Trusted Vehicle Spare Parts Partner",
        subtitle: "Find Genuine Spare Parts for Any Vehicle",
        description: "RideMate brings you high-quality, tested, and reliable spare parts at the best price. Shop with confidence and keep your ride moving smoothly.",
        buttonText: "Shop Now",
        image: caraousel1,
        buttonLink: "/shop",
    },
    {
        id: 2,
        title: "Premium Quality Auto Parts",
        subtitle: "Genuine Parts for Optimal Performance",
        description: "Experience unmatched vehicle performance with our certified spare parts. Quality guaranteed for every make and model.",
        buttonText: "Explore Products",
        image: caraousel2,
        buttonLink: "/products",
    },
    {
        id: 3,
        title: "Fast Delivery & Support",
        subtitle: "Get Your Parts When You Need Them",
        description: "Quick shipping and expert support to keep you on the road. Your satisfaction is our priority.",
        buttonText: "Learn More",
        image: caraousel3,
        buttonLink: "/about",
    },
    {
        id: 4,
        title: "Competitive Prices & Deals",
        subtitle: "Quality Parts at Affordable Rates",
        description: "Get the best value for your money with our competitive pricing and regular discounts on premium auto parts.",
        buttonText: "View Deals",
        image: caraousel4,
        buttonLink: "/deals",
    },
    {
        id: 5,
        title: "Competitive Prices & Deals",
        subtitle: "Quality Parts at Affordable Rates",
        description: "Get the best value for your money with our competitive pricing and regular discounts on premium auto parts.",
        buttonText: "View Deals",
        image: caraousel5,
        buttonLink: "/deals",
    }
];


// export const heroCaraouselData: CaraouselSlide[] = [
//     {
//         id: 1,
//         title: "Your Trusted Vehicle Spare Parts Partner",
//         subtitle: "Find Genuine Spare Parts for Any Vehicle",
//         description: "RideMate brings you high-quality, tested, and reliable spare parts at the best price. Shop with confidence and keep your ride moving smoothly.",
//         buttonText: "Shop Now",
//         image: "~assets/images/caraousel_1.png",
//         buttonLink: "/shop",
//     },
//     {
//         id: 2,
//         title: "Premium Quality Auto Parts",
//         subtitle: "Genuine Parts for Optimal Performance",
//         description: "Experience unmatched vehicle performance with our certified spare parts. Quality guaranteed for every make and model.",
//         buttonText: "Explore Products",
//         image: "~assets/images/caraousel_2.png",
//         buttonLink: "/products",
//     },
//     {
//         id: 3,
//         title: "Fast Delivery & Support",
//         subtitle: "Get Your Parts When You Need Them",
//         description: "Quick shipping and expert support to keep you on the road. Your satisfaction is our priority.",
//         buttonText: "Learn More",
//         image: "~assets/images/caraousel_3.png",
//         buttonLink: "/about",
//     },
//     {
//         id: 4,
//         title: "Competitive Prices & Deals",
//         subtitle: "Quality Parts at Affordable Rates",
//         description: "Get the best value for your money with our competitive pricing and regular discounts on premium auto parts.",
//         buttonText: "View Deals",
//         image: "~assets/images/caraousel_4.png",
//         buttonLink: "/deals",
//     },
//     {
//         id: 5,
//         title: "Competitive Prices & Deals",
//         subtitle: "Quality Parts at Affordable Rates",
//         description: "Get the best value for your money with our competitive pricing and regular discounts on premium auto parts.",
//         buttonText: "View Deals",
//         image: "~assets/images/caraousel_5.png",
//         buttonLink: "/deals",
//     }
// ];