"use client";

import React, { useState, useRef, useEffect } from "react";
import { PenTool, Layout, Film, Edit, Share } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Step {
  icon: React.ElementType;
  phase: string;
  title: string;
  description: string;
  tagline: string;
  videoUrl: string;
  deliverables: string[];
  duration: string;
}

const OurProcess = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const steps: Step[] = [
    {
      icon: PenTool,
      phase: "PRE-PRODUCTION",
      title: "Planning & Strategy",
      description:
        "Our journey begins with thorough planning and strategic development. We analyze your goals, target audience, and brand vision to create a comprehensive roadmap for success.",
      tagline: "Where vision meets strategy",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Creative Brief",
        "Production Schedule",
        "Mood Boards",
        "Resource Plan",
      ],
      duration: "2-3 weeks",
    },
    {
      icon: Layout,
      phase: "CREATIVE DEVELOPMENT",
      title: "Script & Storyboard",
      description:
        "Our creative team meticulously crafts compelling narratives and visual frameworks that align with your brand's voice and objectives.",
      tagline: "Crafting your narrative",
      videoUrl: "/videos/creative-development.mp4",
      deliverables: [
        "Final Script",
        "Storyboards",
        "Shot Lists",
        "Location Plans",
      ],
      duration: "1-2 weeks",
    },
    {
      icon: Film,
      phase: "PRODUCTION",
      title: "Filming & Direction",
      description:
        "With state-of-the-art equipment and expert direction, we bring your vision to life through cinematic excellence and attention to detail.",
      tagline: "Bringing stories to life",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Raw Footage",
        "Daily Reviews",
        "Production Stills",
        "Audio Files",
      ],
      duration: "1-4 days",
    },
    {
      icon: Edit,
      phase: "POST-PRODUCTION",
      title: "Editing & Effects",
      description:
        "Our post-production team combines technical expertise with creative finesse to polish and perfect every frame of your content.",
      tagline: "Perfecting every frame",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: ["Rough Cut", "Color Grade", "Sound Mix", "Final Edit"],
      duration: "2-3 weeks",
    },
    {
      icon: Share,
      phase: "DELIVERY",
      title: "Review & Launch",
      description:
        "We ensure your content meets the highest standards and is optimized for all intended platforms and audiences.",
      tagline: "Excellence delivered",
      videoUrl: "/placeholder/reelhd.mp4",
      deliverables: [
        "Multiple Formats",
        "Platform Versions",
        "Usage Rights",
        "Analytics Setup",
      ],
      duration: "1 week",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % steps.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isHovered, steps.length]);

  useEffect(() => {
    const videoElement = videoRefs.current[activeStepIndex];
    if (videoElement && videoElement.readyState >= 2) {
      videoElement
        .play()
        .catch((e: Error) => console.log("Video playback failed:", e));
    }

    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [activeStepIndex]);

  const handleVideoLoad = (index: number) => {
    if (index === activeStepIndex) {
      const videoElement = videoRefs.current[index];
      if (videoElement) {
        videoElement
          .play()
          .catch((e: Error) => console.log("Video playback failed:", e));
      }
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#111418] to-[#15191D]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity=".1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Fixed Process Title - properly aligned and styled with clear separation */}
      {/* <div className="pl-24 pt-2 z-40">
        <div className="flex flex-col space-y-1">
          <div className="text-[#FF852A] text-sm uppercase tracking-[8px] mb-6 flex items-center">
            <span className="w-8 h-px bg-[#FF852A] mr-4" />
            Our Process
          </div>
        </div>
      </div> */}

      {/* Left sidebar navigation */}
      <div className="absolute top-0 left-0 w-1/4 h-full flex flex-col justify-center pl-24 z-30">
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer transition-all duration-500`}
              onClick={() => setActiveStepIndex(index)}
            >
              <div className="flex items-start">
                <div
                  className={`w-px h-16 transition-all duration-500 mr-6 ${
                    activeStepIndex === index
                      ? "bg-gradient-to-b from-[#FF852A] to-[#FF852A]/60"
                      : "bg-white/20 group-hover:bg-white/40"
                  }`}
                />

                <div>
                  <p
                    className={`text-xs tracking-[0.25em] transition-colors duration-300 mb-1 ${
                      activeStepIndex === index
                        ? "text-[#FF852A]"
                        : "text-white/50 group-hover:text-white/70"
                    }`}
                  >
                    PHASE {index + 1}
                  </p>
                  <p
                    className={`font-light transition-colors duration-300 ${
                      activeStepIndex === index
                        ? "text-white"
                        : "text-white/70 group-hover:text-white/90"
                    }`}
                  >
                    {step.phase}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 relative px-10 py-4 bg-transparent border border-[#FF852A] text-white text-sm tracking-[0.25em] overflow-hidden group w-4/5"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#FF852A] to-[#FF6A00] transition-transform translate-x-[-100%] group-hover:translate-x-0 duration-300" />
          <span className="relative z-10 group-hover:text-[#15191D]">
            START YOUR PROJECT
          </span>
        </motion.button>
      </div>

      {/* Content area with fullscreen video */}
      <div className="absolute top-0 right-0 w-3/4 h-full">
        <AnimatePresence mode="wait">
          {steps.map(
            (step, index) =>
              index === activeStepIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Video background */}
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1] brightness-[0.8]"
                    src={step.videoUrl}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedData={() => handleVideoLoad(index)}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#15191D] via-[#15191D]/70 to-[#15191D]/10" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-center px-20">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="max-w-2xl"
                    >
                      {/* Phase indicator - positioned clearly with no overlap */}
                      <div className="flex items-center mb-6">
                        <div className="p-2 rounded-full bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5 mr-3">
                          <step.icon className="text-[#FF852A] w-6 h-6" />
                        </div>
                        <div className="text-[#FF852A] text-xs tracking-[0.25em]">
                          {step.duration.toUpperCase()}
                        </div>
                      </div>

                      {/* Title - made more distinct to avoid overlap */}
                      <h3 className="text-white text-4xl font-light mb-6 tracking-wide">
                        {step.title}
                      </h3>

                      <p className="text-white/80 font-light mb-8 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className="mb-8 p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
                        <div className="text-xs text-white/50 tracking-[0.25em] mb-4 flex items-center">
                          <div className="w-6 h-px bg-[#FF852A]/50 mr-3" />
                          DELIVERABLES
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                          {step.deliverables.map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + i * 0.1 }}
                            >
                              <div className="w-1 h-1 bg-[#FF852A] rounded-full mr-3" />
                              <span className="text-white/90 font-light">
                                {item}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[#FF852A] italic font-light text-lg border-l-2 border-[#FF852A] pl-4 bg-gradient-to-r from-[#FF852A]/10 to-transparent py-2">
                        {step.tagline}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-40">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (activeStepIndex + 1) / steps.length }}
          transition={{ duration: 8, ease: "linear" }}
          className="h-full bg-gradient-to-r from-[#343E48] to-[#FF852A]/80 origin-left"
          style={{ boxShadow: "0 0 10px rgba(255, 133, 42, 0.5)" }}
        />
      </div>

      {/* Step counter */}
      <div className="absolute bottom-3 left-24 text-white/70 text-sm z-40 ">
        <span className="text-[#FF852A] font-medium">
          {activeStepIndex + 1}
        </span>
        <span className="mx-2">/</span>
        <span>{steps.length}</span>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-40">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveStepIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${
                index === activeStepIndex
                  ? "bg-gradient-to-r from-[#FF852A]/50 to-[#FF6A00]/50 w-6 shadow-md shadow-[#FF852A]/30"
                  : "bg-white/30 hover:bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
