'use client';
import BentoGridPage from "@/components/BentoGrid";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { cn } from "@/utils/cn";
import { azeretMono } from "@/utils/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GithubIcon, Linkedin, LinkedinIcon, Menu, MenuIcon, MenuSquare, MenuSquareIcon, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import Loading from "./loading";
import NavButton from '@/components/nav-button/nav-button';


export default function Home() {
 
  return (
  <main className="relative  min-h-screen flex flex-col lg:flex-row text-white p-6">
  <div id="left" className="  grow-0   lg:basis-1/4" >
    <aside className=" flex flex-col gap-y-7 mx-4  ">

    <div className="flex items-center justify-between">
    <div className="flex justify-start items-center gap-3 mt-2 lg:mt-6 ">
        <Image style={{
          width:'4em',
          
        }} src='/smiling.png' alt='profile-img'  width={81}
          height={81} className="border-2 rounded-full bg-gray-500"/>
         <div className="flex flex-col">
         <h1 className="text-2xl tracking-wide ">Priyanshu T. </h1>
         <span className="text-xs text-gray-400">
          Web developer</span>
         </div>
      </div>
      <div className="block  lg:hidden ">
          <NavButton/>
         </div>
    </div>
     

      <p className="text-gray-300 tracking-widest leading-5  text-md font-light">I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web design.</p>

      <Link href="/about" className="cursor-pointer ">
          <button className="border-[0.89px] py-3 px-7 gap-2 rounded-3xl w-full lg:w-2/3 my-5 lg:my-12   font-light  transition delay-75 duration-300 hover:bg-[#19191C] hover:border-[#19191C] ">
            More about me
          </button>
        </Link>
     <div className=" flex gap-5 items-center justify-center lg:items-start lg:justify-start my-0 lg:my-12  ">
        <Link href='https://www.linkedin.com/in/priyanshu-tiwari-2840b81a8' className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center ">
          <GithubIcon className="w-9 h-9 p-1 "/>
        </Link>
        <Link href='https://www.linkedin.com/in/priyanshu-tiwari-2840b81a8' className="border-[0.89px] px-1 py-1 rounded-full  grow lg:grow-0 flex items-center  justify-center">
          <Twitter className="w-9 h-9 p-1  "/>
        </Link>
        <Link href='https://www.linkedin.com/in/priyanshu-tiwari-2840b81a8' className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center">
          <LinkedinIcon className="w-9 h-9 p-1.5 "/>
        </Link>
     </div>
     <div/>

        <div className="hidden lg:block">
        <div className=" -mt-3 ml-2 hidden  xl:flex  flex-wrap items-start gap-x-2 justify-start">
        <span className="text-xs text-slate-400"> © </span>
        <span className="  text-xs text-slate-400  hover:text-slate-200">
          developed
        </span>
        <span className="text-xs text-slate-400"> by </span>
        <span className=" text-xs text-slate-400  hover:text-slate-200">
          Priyanshu tiwari
        </span>
      </div>
        </div>
     
    </aside>
  </div>
  <div id="right" className="  grow lg:basis-[75%] flex flex-col ">
    <div style={{
      flexGrow:'1'
    }} id='right-nav' className=" h-10 mb-2  hidden lg:flex items-center justify-between   mx-9">
      
      <h1>17:32 May 31, 2024</h1>
     <div className="relative z-10">
     <NavButton/>
     </div>
    </div>
    <div style={{
      flexGrow:'10'
    }} id='right-dasboard' className="flex flex-col  ">
     
     <BentoGridPage />
  {/* <BentoGridPage.Skeleton/> */}
    
      
    </div>
  </div>
  </main>
  );
}


