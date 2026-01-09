"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Slide as SlideType } from "@/lib/types";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface SlideProps {
  slide: SlideType;
  direction: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function Slide({ slide, direction }: SlideProps) {
  const isTitle = slide.type === "title";

  return (
    <motion.div
      key={slide.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className={`absolute inset-0 flex items-center justify-center p-8 md:p-16 lg:p-24 slide-bg-gradient ${
        isTitle ? "text-center" : ""
      }`}
    >
      {/* Logo in bottom-left for non-title slides */}
      {!isTitle && (
        <div className="absolute bottom-6 left-6 z-10">
          <Image
            src="/logo.svg"
            alt="Cursor"
            width={120}
            height={28}
            className="opacity-60 hover:opacity-100 transition-opacity"
          />
        </div>
      )}

      <div
        className={`max-w-5xl w-full ${
          isTitle ? "flex flex-col items-center justify-center" : ""
        }`}
      >
        {isTitle ? (
          <div className="space-y-8">
            {/* Logo on title slide */}
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Cursor"
                width={280}
                height={66}
                className="mx-auto"
                priority
              />
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
              style={{ fontFamily: "'CursorGothic', system-ui, sans-serif" }}
            >
              {slide.title}
            </h1>
            <div className="text-xl md:text-2xl text-foreground-muted">
              <MarkdownRenderer content={slide.content} />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <MarkdownRenderer content={slide.content} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
