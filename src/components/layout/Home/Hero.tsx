"use client";

import Image from "next/image";
import AnimatedDiv from "../../common/AnimatedDiv";
import { ShimmerButton } from "../../ui/shimmer-button";
import { ShinyButton } from "../../ui/shiny-button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Musician",
    "Developer",
    "Bansuri Player (Flautist)",
  ];

  return (
    <div className="relative ml-16">
      <section className="pt-32 flex">
        {/* Hero Description */}
        <section className="hero-description mx-24 flex-[.9]">
          <AnimatedDiv className="text-5xl font-semibold" _delay={2.2}>
            <span className="font-bold">H</span>i, I'm Rikhil Raithatha
          </AnimatedDiv>
          <AnimatedDiv className="text-3xl my-5" _delay={2.3}>
            UK Based <FlipWords words={words} className="font-semibold" />
          </AnimatedDiv>
          <AnimatedDiv className="text-2xl font-light bg-stone" _delay={2.4}>
            Briging code to life and music to hearts
          </AnimatedDiv>

          {/* Buttons */}
          <div className="hero-buttons my-12 flex gap-7">
            <AnimatedDiv _delay={3}>
              <ShimmerButton>
                <span className="whitespace-pre-wrap text-center text-sm font-light leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Explore My Work
                </span>
                <ArrowRight
                  size={20}
                  className="inline-block ml-1 dark:text-white"
                />
              </ShimmerButton>
            </AnimatedDiv>
            <AnimatedDiv _delay={3.4}>
              <ShinyButton>
                <span>Listen to My Music</span>
                <Image
                  src={"/gif/headphone.gif"}
                  alt="headphone"
                  width={20}
                  height={20}
                  className="inline-block ml-1 mb-1 scale-[1.2]"
                />
              </ShinyButton>
            </AnimatedDiv>
          </div>
        </section>
        <motion.section
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 180 }}
        >
          <Image
            src={"/images/hero_photo_circle.png"}
            alt="hero"
            width={280}
            height={280}
            className="rounded-full"
          />
        </motion.section>
      </section>
      <section className="text-center mt-32">
        <AnimatedDiv className="cursor-pointer text-xl font-light" _delay={5}>
          Scroll Down
        </AnimatedDiv>
        <AnimatedDiv
          className="border flex justify-center items-center w-8 h-8 rounded-full border-zinc-950 cursor-pointer mx-auto mt-3"
          _delay={5.2}
        >
          <motion.div
            animate={{ y: [0, -5, 0, -5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              type: "spring",
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </AnimatedDiv>
      </section>
    </div>
  );
};

export default Hero;
