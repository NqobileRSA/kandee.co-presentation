"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import OurMission from "./OurMission";

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      if (video.readyState >= 2) {
        video.play().catch((e) => console.log("Video playback failed:", e));
        setIsPlaying(true);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        } else {
          video.pause();
          video.currentTime = 0;
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about-us" className="relative overflow-hidden bg-[#343e4830]">
      <div className="relative h-screen">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          src="/assets/pepsi.mp4"
          muted
          loop
          playsInline
          preload="auto"
          style={{ opacity: isPlaying ? 0.7 : 0 }}
        />
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#FF852A]/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative inline-flex items-center justify-center gap-6 text-[#FF852A] text-sm uppercase tracking-[8px] mb-8 font-galano"
          >
            <motion.span
              className="w-12 h-px bg-[#FF852A]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8 }}
            />
            Our Story
            <motion.span
              className="w-12 h-px bg-[#FF852A]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl text-white font-light text-center max-w-4xl leading-tight mb-6 font-galano"
          >
            <span className="block">Creating Timeless Visuals</span>
            <span className="block mt-2 text-[#FF852A]">Since 2010</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[#DCDCDC] text-lg max-w-2xl text-center leading-relaxed mt-4 font-avenir"
          >
            Kandee.co is a Johannesburg-based creative agency specializing in
            photography and videography. Our mission is to create timeless
            photographs and cinematic visuals that tell your unique story.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.a
              href="#work"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF852A] text-[#FF852A] hover:bg-[#FF852A] hover:text-white transition-all duration-500 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm uppercase tracking-[2px] font-medium font-galano relative z-10">
                View Our Work
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-[#FF852A]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
      <OurMission />
    </section>
  );
};

export default AboutSection;
