"use client";
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { motion } from "framer-motion";
const people = [
  {
    id: 1,
    name: "Nodejs",
    designation: "JS runtime environment",
    image:
      "/node.svg",
      classname:'bg-white'
  },
  {
    id: 2,
    name: "Tailwind css",
    designation: "for styling",
    image:
      "tails.svg",
  },
  {
    id: 3,
    name: "Next Js",
    designation: "React Framework",
    image:
      "nextjs.svg",
      classname:'bg-white'
  },
  {
    id: 4,
    name: "Javascript",
    designation: "Web Brain",
    image:
      "javascript.svg",
  },
  {
    id: 5,
    name: "React JS",
    designation: "UI Library",
    image:
      "react.svg",
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

