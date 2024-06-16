import React from "react";
import Link from "next/link";
import Image from "next/image";
import { azeretMono } from "@/utils/font";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GithubIcon,
  Linkedin,
  LinkedinIcon,
  Menu,
  MenuIcon,
  Twitter,
  X,
} from "lucide-react";
import { currentDate } from "@/lib/date";
import NavButton from '@/components/nav-button/nav-button'
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative scroll-smooth  min-h-screen flex flex-col lg:flex-row text-white p-6">
      <div id="left" className="  grow-0  lg:basis-1/4  ">
        <aside className=" lg:fixed left-0 top-0 lg:h-screen lg:w-1/4  flex flex-col gap-y-7 mx-4 scroll p-0 lg:p-5  mt-2 lg:mt-6">
        <div className="flex items-center justify-between">
    <div className="flex justify-start items-center gap-3 mt-2 lg:mt-6 ">
        <Image  src='/smiling.png' alt='profile-img'  width={81}
          height={81} className="border-2 rounded-full bg-gray-500 w-[3.5em] sm:w-[4em]"/>
         <div className="flex flex-col">
         <h1 className="text-xl sm:text-2xl tracking-wide ">Priyanshu</h1>
         <span className="text-xs text-gray-400">
          Web developer</span>
         </div>
      </div>
      <div className="block  lg:hidden ">
          <NavButton/>
         </div>
    </div>
          <h1 className="text-3xl font-medium my-2 block lg:hidden">
            My recent projects
          </h1>
          <p className="text-gray-300 tracking-widest leading-5  text-md font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            accusantium quasi eaque reiciendis repellat? Quas accusantium labore
            optio nostrum maxime error Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, provident..
          </p>

          <div className=" flex gap-5 items-center justify-center lg:items-start lg:justify-start my-0 lg:my-12  ">
            <Link
              href="https://www.linkedin.com/in/priyanshu-tiwari-2840b81a8"
              className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center "
            >
              <GithubIcon className="w-9 h-9 p-1 " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/priyanshu-tiwari-2840b81a8"
              className="border-[0.89px] px-1 py-1 rounded-full  grow lg:grow-0 flex items-center  justify-center"
            >
              <Twitter className="w-9 h-9 p-1  " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/priyanshu-tiwari-2840b81a8"
              className="border-[0.89px] px-1 py-1 rounded-full grow lg:grow-0 flex items-center justify-center"
            >
              <LinkedinIcon className="w-9 h-9 p-1.5 " />
            </Link>
          </div>
          <div />

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
      <div
        id="right"
        className=" overflow-y-auto grow lg:basis-[75%] flex flex-col "
      >
        <div
          id="right-nav"
          className=" h-16    hidden lg:flex items-center justify-between   mx-9"
        >
          <h1>{currentDate()}</h1>
          <div>
           <NavButton/>
          </div>
        </div>
        <div id="right-dasboard" className="flex-1    flex flex-col">
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;
