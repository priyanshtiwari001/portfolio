"use client";
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { motion } from "framer-motion";
const people = [
  {
    id: 1,
    name: "Nodejs",
    designation: "JS runtime environment",
    image:
      "https://th.bing.com/th/id/OIP.a8T8fX1Znh9bL4hjItKUFgHaHa?w=900&h=900&rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "Tailwind css",
    designation: "for styling",
    image:
      "https://th.bing.com/th/id/OIP.Eu8_uljdhJl4qvQXOxEFqAHaHa?pid=ImgDet&w=204&h=204&c=7&dpr=2",
  },
  {
    id: 3,
    name: "Next Js",
    designation: "React Framework",
    image:
      "https://th.bing.com/th/id/OIP.uHAxOygy2mRykr8UcVNvwQHaHa?w=183&h=183&c=7&r=0&o=5&dpr=2&pid=1.7",
  },
  {
    id: 4,
    name: "Javascript",
    designation: "Web Brain",
    image:
      " https://th.bing.com/th/id/OIP.xH-7Ennyd_lkuDe2hsRZogAAAA?pid=ImgDet&w=200&h=200&c=7&dpr=2",
  },
  {
    id: 5,
    name: "React JS",
    designation: "UI Library",
    image:
      "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain",
  },
];

export default function MyStack() {
  
  return (
    <motion.div
      style={{
        height: 200,
      }}
      animate={{
        y: 10,
      }}
      transition={{
        ease: "linear",

        staggerChildren: 2,
      }}
      className="flex flex-col items-center gap-y-3 justify-center"
    >
      <div>
        <h2 className="text-2xl">My Stack</h2>
      </div>
      <motion.div className="flex items-center justify-center">
        <AnimatedTooltip items={people} />
      </motion.div>
    </motion.div>
  );
  
}

