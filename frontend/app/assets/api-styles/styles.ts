export interface Styles {
   nav_topText:string;
   nav_bottomText:string;
   subText_csl:string;
   mainText_csl:string;
   descText_csl:string;
   main_headingText:string;
}


export const styles : Styles = {
  nav_topText:"text-[#000] text-[17px] font-medium font-[Inria] cursor-pointer hover:text-[#FF8C00] duration-300 ease-in-out transition-all",
  nav_bottomText:"text-[#000] text-[17px] font-medium font-[Inria] cursor-pointer",
  subText_csl:"text-[#fff] text-[24px] font-[Quicksand] font-light",
  mainText_csl:"text-[#fff] text-[40px] font-black font-[Poppins] max-w-xl pt-2",
  descText_csl:"text-[#fff] text-[18px] font-light font-[Quicksand] max-w-xl pt-5",
  main_headingText:"text-[#000] text-[30px] font-[Inter]",
}as const;