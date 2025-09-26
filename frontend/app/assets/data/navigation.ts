export interface NavItem{
    id: number;
    label:string;
    href:string;
    isActive:boolean;
    class:string;
}

export const navItems : NavItem[] = [
   {id:1,label:"Home",href:"/",isActive:true,class:"nav_bottomText" as const},
   {id:2,label:"Service",href:"/service",isActive:false,class:"nav_bottomText" as const},
   {id:3,label:"Company",href:"/company",isActive:false,class:"nav_bottomText" as const},
   {id:4,label:"Shop",href:"/shop",isActive:false,class:"nav_bottomText" as const},
   {id:5,label:"Blog",href:"/blog",isActive:false,class:"nav_bottomText" as const},
   {id:6,label:"Contact",href:"/contact",isActive:false,class:"nav_bottomText" as const},
];