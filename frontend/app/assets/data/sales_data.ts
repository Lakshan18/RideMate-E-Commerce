export interface Sales {
    id: number;
    cardimg: string;
    subtitle: string;
    title: string;
    models: string;
    price?: number;
}

import sale1 from '~/assets/images/sales_1.png';
import sale2 from '~/assets/images/sales_2.png';


export const saleData: Sales[] = [
    {
        id: 1,
        cardimg: sale1,
        subtitle: "LAMP & LIGHTS",
        title: "MEGA SALE",
        models: "Mitsubishi,Toyota and Mazda",
        price: 450000,
    },
    {
        id: 2,
        cardimg: sale2,
        subtitle: "BODY PARTS",
        title: "LIMITED OFFER",
        models: "Volkswagen, Mazda, Benz ",
    }
];

