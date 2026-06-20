"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedHeading({
  text,
  className,
  once = true,
}: AnimatedHeadingProps) {
  // Split the text into words to prevent letters in the middle of a word from wrapping individually
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Slight stagger effect
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut", // Smooth ease out
      },
    },
  };

  return (
    <motion.h2
      className={cn(
        "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-balance transition-colors duration-500",
        className
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
        >
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block will-change-[filter,transform,opacity]"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
}
