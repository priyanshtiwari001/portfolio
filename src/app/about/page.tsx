import MyStackPage from "@/components/myStack";
import Link from "next/link";
import React from "react";

const AboutMePage = () => {
  return (
    <section className="w-full flex-1 flex flex-col ">
      <h1 className="text-4xl font-medium m-5 hidden lg:block leading-8  tracking-widest ">
        About me
      </h1>
      <div className=" flex flex-col gap-4 lg:block ">
        <div
          id="box-1"
          className="pl-3 pt-3  h-[250px] md:h-[210px] rounded-3xl  lg:m-6 flex flex-col items-start justify-start gap-3 bg-[#2a2f39]"
        >
          <h3 className="text-2xl">Education</h3>
          <ul className="list-disc text-md px-4 flex flex-col gap-5">
            <li className="">
              Bachelors Degree in Computer Science
              <br />{" "}
              <span className="text-xs text-gray-400">
                Amity University, 2025
              </span>
            </li>
            <li>
              Intermeidate 12th standard
              <br />{" "}
              <span className="text-xs text-gray-400">CBSE Board, 2021</span>
            </li>
          </ul>
        </div>
        <div
          id="box-2"
          className="pl-3 pt-3 bg-[#2a2f39] h-[330px] rounded-3xl lg:m-6 flex flex-col items-start justify-start gap-3"
        >
          <h3 className="text-2xl">Experience</h3>
          <ul className="list-disc text-md px-4 flex flex-col gap-5">
            <li className="">
              Software Engineer
              <br className="" />
              <span className="text-xs text-gray-400 ">
                HCLTech Tchnologies, Aug 2022 - present
              </span>
            </li>
            <li>
              Full Stack Developer
              <br />{" "}
              <span className="text-xs text-gray-400">
                Curious EcoSysetem, Jan 2024 - Mar 2024
              </span>
            </li>
            <li>
              NextJs Developer
              <br />{" "}
              <span className="text-xs text-gray-400">
                VideoDubber.ai, April 2024 - May 2024
              </span>
            </li>
            <li className="">
              Open Source contributor
              <br className="" />
              <span className="text-xs text-gray-400 ">
                Github University, AllTime
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-3 pt-3  lg:h-[250px] h-[320px]    flex flex-col md:flex-row rounded-3xl  gap-3 lg:m-6 mt-5 lg:mt-0">
        <Link
          href="/"
          id="box-1"
          className=" border basis-1/2 rounded-3xl bg-blue-800"
        >
          <MyStackPage />
        </Link>
        <div id="box-2" className="border-2 basis-1/2 pl-3 pt-3 rounded-3xl">
          box-1
        </div>
      </div>
    </section>
  );
};

export default AboutMePage;
