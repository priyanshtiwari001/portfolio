"use client";
import React, { useEffect, useRef, useState } from "react";
import { Resume } from "./Resume";
import Globe from "./grid-globe";
import Link from "next/link";
import MyStack from "./myStack";
import MagicButton from "./MagicButton";
import { Copy } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import Loading from "@/app/loading";

const BentoGridPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  console.log(isLoading);
  useEffect(()=>{
   if(videoRef.current){
    videoRef.current.addEventListener("loadeddata", (event) => {
      console.log(
        "Yay! The readyState just increased to  " +
          "HAVE_CURRENT_DATA or greater for the first time.",
      );
    });
   }
    console.log(isLoading);
  },[])

  
  //console.log(videoRef.current.readyState)
  return (
    <section className="flex flex-col lg:flex-row   grow gap-5">
      <div id="box-1" className="flex-1 flex flex-col ">
        <Link href='/myprojects' className=" lg:basis-[60%] h-96 grow  ">
          <div 
            id="project-box-1"
            className=" w-full h-full relative"
          >
            <video
            ref={videoRef}
              className="absolute border-[#1E2332] aspect-square w-full h-full object-cover border-2 rounded-3xl z-0"
              autoFocus
              autoPlay
              muted
              loop
              src="https://us-east-1-bucket-video.s3.amazonaws.com/clip.mp4"
            ></video>
            
             <div
            style={{
              background:
                "linear-gradient(0deg, #000000 15%, rgba(255,255,255,0) 100%, #000000 100%)",
            }}
            className="bg-opacity-55 flex justify-center items-center w-full h-full rounded-3xl z-2 absolute  text-[27px] text-white"
          >
            My Projects
          </div>
           
           
            
            
          </div>
         
        </Link>

        <div
          id="twin-box-1"
          className=" relative   w-full flex flex-col lg:flex-row justify-between items-center  m-2 gap-3"
        >
          <div className="w-full h-full lg:w-96 lg:h-72 ">
          <Globe />
          </div>
          <Resume />
        </div>
      </div>

      <div id="Stack-box" className="flex-1 flex flex-col gap-4 ">
        <Link
          href="/about"
          className="basis-1/3 bg-blue-800 rounded-3xl border-blue-800 border-2 -mt-2"
        >
          <MyStack />
        </Link>
        <div className="lg:basis-2/3 w-full h-80 border border-zinc-950  rounded-3xl relative">
          <div className="">
            <Image
              src="/b1.svg"
              width={80}
              height={80}
              className="absolute w-full h-full object-cover object-center rounded-3xl"
              alt=""
            />

            <div
              style={{
                background:
                  "linear-gradient(0deg, #000000 15%, rgba(255,255,255,0) 100%, #000000 100%)",
              }}
              className="absolute p-2 pl-5 top-2 text-xl font-light w-full h-full"
            >
              I prioritize client collaboration, fostering open communication
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGridPage;



BentoGridPage.Skeleton =  function BentoSkeleton(){
  return(
    <section className="flex flex-col lg:flex-row   grow gap-5">
    <div id="box-1" className="flex-1 flex flex-col ">
        <Skeleton 
          id="project-box-1"
          className=" w-full h-full  relative border-2 border-zinc-800 rounded-3xl lg:basis-[60%] h-96 grow"
        >
          
            
        </Skeleton>
       

      <div
        id="twin-box-1"
        className=" relative   w-full flex flex-col lg:flex-row justify-between items-center  m-2 gap-3"
      >
        <Skeleton className="w-full h-full lg:w-96 lg:h-72 "/> 
        
        <Skeleton className=" border-2 border-zinc-800  basis-2/4 lg:w-44 w-full h-full  rounded-3xl "/> 
      </div>
    </div>

    <div id="Stack-box" className="flex-1 flex flex-col gap-4 ">
      <Skeleton
       
        className="basis-1/3  rounded-3xl border-2 border-zinc-800 -mt-2"
      />
        
      
      <div className="lg:basis-2/3 w-full h-80 border border-zinc-950  rounded-3xl relative">
        <Skeleton   className="absolute w-full h-full object-cover object-center rounded-3xl"/>
          

          
        
      </div>
    </div>
  </section>
  )
}