import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const imgs = [
  "/emoji/emoji-1.webp",
  "/emoji/emoji-2.webp",
  "/emoji/emoji-3.webp",
];
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <>
      <button onClick={handleClick} className="">
        <span
          className={`inline-flex  lg:w-52  px-5 py-2  my-6 mt-2 cursor-pointer items-center justify-center rounded-lg
             bg-zinc-900 border gap-3 text-xs   font-medium text-white backdrop-blur-3xl  `}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
      <div className="flex items-end justify-center gap-1 mb-6 ">
        {imgs.map((img, i) => (
          <Image
            key={i}
            src={img}
            width={55}
            height={55}
            alt="emoji"
            className={cn(
              "rounded-full ",
              i == 0 && "bg-blue-400",
              i == 1 && "bg-purple-400",
              i == 2 && "bg-red-400",
            )}
          />
        ))}
      </div>
    </>
  );
};

export default MagicButton;
