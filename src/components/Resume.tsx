import { cn } from "@/utils/cn";

import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { Copy } from "lucide-react";
import animationData from "@/data/confetti.json";
const imgs = [
  "/emoji/emoji-1.webp",
  "/emoji/emoji-2.webp",
  "/emoji/emoji-3.webp",
];
export function Resume() {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <>
      <div className="flex flex-col   gap-4 border border-zinc-700 basis-2/4 lg:w-44 w-full h-full bg-slate-900 rounded-3xl relative">
        <div className="w-full text-center px-4 py-3 text-xl font-light tracking-widest ">
          <h1>Do you want to work together?</h1>
        </div>
        <div className={`absolute top-0 right-0 ${copied ? "block" : "block"}`}>
          {/* <img src="/confetti.gif" alt="confetti" /> */}
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email"}
          icon={<Copy />}
          position="left"
          handleClick={handleCopy}
        />
      </div>
    </>
  );
}
