export interface Badges {
    id: number;
    name: string;
    image: string;
}

import toyotaImg from '~/assets/images/logos/toyota_logo.png';
import nissanImg from '~/assets/images/logos/nissan_logo.png';
import hyundaiImg from '~/assets/images/logos/hyundai_logo.png';
import volksImg from '~/assets/images/logos/vlokswagen_logo.png';
import mazdaImg from '~/assets/images/logos/mazda_logo.png';
import suzukiImg from '~/assets/images/logos/suzuki_logo.png';
import hondaImg from '~/assets/images/logos/honda_logo.png';
import mitsuImg from '~/assets/images/logos/mitsubishi_logo.png';


export const badgeData: Badges[] = [
    {
        id: 1,
        name: "Toyota",
        image: toyotaImg,
    },
    {
        id: 2,
        name: "Nissan",
        image: nissanImg,
    },
    {
        id: 3,
        name: "Hyundai",
        image: hyundaiImg,
    },
    {
        id: 4,
        name: "Volkswagen",
        image: volksImg,
    },
    {
        id: 5,
        name: "Mazda",
        image: mazdaImg,
    },
    {
        id: 6,
        name: "Suzuki",
        image: suzukiImg,
    },
    {
        id: 7,
        name: "Honda",
        image: hondaImg,
    },
    {
        id: 8,
        name: "Mitsubishi",
        image: mitsuImg,
    }
];