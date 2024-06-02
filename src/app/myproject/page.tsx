"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "@/components/ui/Pin";
import MyStackPage from "@/components/myStack";
import Link from "next/link";
export const projects = [
  {
    id: 1,
    title: "Your Next Meal",
    des: "Next Level Food for your Next Level Meal",
    img: "/projectImg/meal.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "/ui/next_mail.app",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/projectImg/dashboard.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/projectImg/fast_pizza_2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/projectImg/word_hint.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

const MyProject = () => {
  return (
    <>
      <div className="py-10 ">
        <h1 className="text-3xl font-medium  hidden lg:block leading-8  tracking-widest ">
          My Recent Project
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-36 gap-y-20 sm:gap-y-0  w-full  ">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem]  flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={item.link} href="">
                <div className="relative flex items-center  justify-center sm:w-96 mx-auto object-fit w-[400px] overflow-hidden h-[35vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl"></div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rounded-xl "
                  />
                </div>

                <h1 className="font-bold lg:text-xl    md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1px 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between my-2">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href="https://fast-react-pizza.netlify.app/"
                    className="flex justify-center items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </Link>
                </div>
              </PinContainer>
            </div>
          ))}
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
    </>
  );
};

export default MyProject;
