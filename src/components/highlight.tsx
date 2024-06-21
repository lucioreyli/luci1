"use client";
import { startTransition, useEffect, useRef, useState } from "react";

const chars = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "1234567890",
  "!@#$%&*()-=_+`[]~.;",
].join("");
const genRanHex = (size: number) =>
  [...Array(size)]
    .map<string>(() => chars[Math.floor(Math.random() * chars.length)])
    .join("");

const TOTAL_FRAMES = 30;
const originals = ["Welcome", "To_My", "Index"] as const;
const mapped = Array.from(originals.join(" "));

export const Highlight: React.FC = () => {
  const intervalId = useRef<number>();
  const [text, setText] = useState(["GOu1bO&", "iOG)f", "#4EDK"]);
  const frames = useRef<number>(0);
  useEffect(() => {
    intervalId.current = setInterval(() => {
      startTransition(() => {
        const currentFrame = frames.current;
        setText((texts) => {
          let idx: typeof text.length = 0;
          if (currentFrame > (TOTAL_FRAMES / 3) * 2) idx = 2;
          else if (currentFrame > TOTAL_FRAMES / 3) idx = 1;
          const word = originals.at(idx) as string;
          const text = mapped.slice(0, currentFrame);
          const newText = text.join("").split(" ").at(idx) as string;
          const randomHash = genRanHex(word.length - newText.length);
          return texts.map((item, index) => {
            if (index === idx) return newText + randomHash;
            if (index > idx) return genRanHex(item.length);
            return item;
          });
        });
        frames.current += 1;
      });
    }, 70);
    return () => clearInterval(intervalId.current);
  }, []);

  if (frames.current === TOTAL_FRAMES) {
    clearInterval(intervalId.current);
  }

  return (
    <h1 className="text-6xl md:text-9xl flex max-md:justify-center items-center flex-col gap-2">
      <span>{text[0]}</span>
      <span>{text[1]}</span>
      <span>{text[2]}</span>
    </h1>
  );
};

// export const getConfig = () => ({ render: "dynamic" });
