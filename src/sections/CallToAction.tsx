"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-desc mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="star"
            width={360}
            className="absolute -left-[350px] -top-[137px] hidden md:block"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="spring"
            width={360}
            className="absolute -right-[331px] -top-[19px] hidden md:block"
            style={{ translateY }}
          />
        </div>
        <div className="mt-10 flex items-center justify-center gap-1">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span className="mr-1">Learn More</span>
            <ArrowRight className="inline-flex h-5 w-5 items-center justify-center" />
          </button>
        </div>
      </div>
    </section>
  );
};
