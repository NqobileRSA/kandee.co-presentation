"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

type Work = {
  category: "photography" | "videography";
  subcategory: string;
  title: string;
  description: string;
  video?: string;
  image?: string;
  link: string;
  duration?: string;
  size?: "large" | "medium" | "small";
};

const works: Work[] = [
  {
    category: "photography",
    subcategory: "Fine Art",
    title: "Test 1",
    description: "Experimental light painting series",
    image: "/assets/img1.jpg",
    link: "/portfolio/photography/light-shadow",
    size: "large",
  },
  {
    category: "photography",
    subcategory: "Motion",
    title: "Test 2",
    description: "Long exposure dance photography",
    image: "/assets/img2.jpg",
    link: "/portfolio/photography/dance",
    size: "small",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Test 3",
    description: "Geometric architecture studies",
    image: "/assets/img3.jpg",
    link: "/portfolio/photography/urban",
    size: "medium",
  },
  {
    category: "photography",
    subcategory: "Fine Art",
    title: "Light & Shadow",
    description: "Experimental light painting series",
    image: "/assets/img7.jpg",
    link: "/portfolio/photography/light-shadow",
    size: "small",
  },
  {
    category: "photography",
    subcategory: "Motion",
    title: "Dance in Time",
    description: "Long exposure dance photography",
    image: "/assets/img6.jpg",
    link: "/portfolio/photography/dance",
    size: "large",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Urban Patterns",
    description: "Geometric architecture studies",
    image: "/assets/img8.jpg",
    link: "/portfolio/photography/urban",
    size: "medium",
  },
  {
    category: "photography",
    subcategory: "Abstract",
    title: "Image 3",
    description: "Geometric architecture studies",
    image: "/assets/team1.jpg",
    link: "/portfolio/photography/urban",
    size: "medium",
  },
  // Videos remain the same...
  {
    category: "videography",
    subcategory: "Experimental",
    title: "Chromatic Dreams",
    description: "Abstract visual journey",
    video: "/assets/ciroc.mp4",
    link: "https://www.instagram.com/p/CczbTBODqPg/",
  },
  {
    category: "videography",
    subcategory: "Short Film",
    title: "City Rhythms",
    description: "Urban life in motion",
    video: "/assets/telkom.mp4",
    link: "/portfolio/videography/rhythms",
  },
  {
    category: "videography",
    subcategory: "Art Film",
    title: "Elements",
    description: "Visual poetry of nature",
    video: "/assets/pepsi.mp4",
    link: "/portfolio/videography/elements",
  },
];

const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "photography" | "videography"
  >("photography");
  const [hoveredWork, setHoveredWork] = useState<string | null>(null);
  const [, setSelectedWork] = useState<Work | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getGridClasses = (size?: string) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-[800px]";
      case "medium":
        return "col-span-1 row-span-2 h-[800px]";
      default:
        return "col-span-1 row-span-1 h-[400px]";
    }
  };

  const handleMouseEnter = (title: string) => {
    setHoveredWork(title);
    const work = works.find((w) => w.title === title);
    if (work?.video) {
      const video = videoRefs.current[title];
      if (video && video.readyState >= 2) {
        video.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = (title: string) => {
    setHoveredWork(null);
    const work = works.find((w) => w.title === title);
    if (work?.video) {
      const video = videoRefs.current[title];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    }
  };

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    if (work.video && modalVideoRef.current) {
      setTimeout(() => {
        modalVideoRef.current?.play().catch(() => {});
      }, 100);
    }
  };

  return (
    <section className="relative bg-[#1A1A1A] pt-4">
      <div className="absolute inset-0 bg-[url('/assets/img1.jpg')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/95 to-[#1A1A1A]" />

      <div className="relative z-10 container mx-auto px-8 lg:px-24">
        {/* Header section */}

        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-12 flex flex-col md:flex-row md:items-center justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#FF852A] text-sm tracking-[0.25em] mb-8 md:mb-0 flex items-center"
          >
            <div className="h-px w-12 bg-[#FF852A] mr-4" />
            FEATURED PROJECTS
          </motion.div>

          <div className="flex">
            {["photography", "videography"].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 10,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + index * 0.15,
                  ease: "easeOut",
                }}
                onClick={() =>
                  setActiveCategory(category as "photography" | "videography")
                }
                className={`relative group ${index > 0 ? "ml-12" : ""}`}
              >
                <span
                  className={`text-sm tracking-[0.25em] transition-colors duration-300 ${
                    activeCategory === category
                      ? "text-[#FF852A]"
                      : "text-white/60 group-hover:text-white/90"
                  }`}
                >
                  {category.toUpperCase()}
                </span>
                <motion.div
                  className={`h-px w-full absolute -bottom-2 ${
                    activeCategory === category
                      ? "bg-[#FF852A]"
                      : "bg-transparent group-hover:bg-white/30"
                  }`}
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Category buttons */}

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <AnimatePresence mode="wait">
            {works
              .filter((work) => work.category === activeCategory)
              .map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`${getGridClasses(work.size)} group relative overflow-hidden cursor-pointer`}
                  onMouseEnter={() => handleMouseEnter(work.title)}
                  onMouseLeave={() => handleMouseLeave(work.title)}
                  onClick={() => handleWorkClick(work)}
                >
                  <div className="relative h-full overflow-hidden">
                    {/* Media Content */}
                    {work.video ? (
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[work.title] = el;
                        }}
                        src={work.video}
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="auto"
                      />
                    ) : (
                      <img
                        src={work.image}
                        alt={work.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8 transition-all duration-500 ${
                        hoveredWork === work.title ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={
                            hoveredWork === work.title
                              ? { y: 0, opacity: 1 }
                              : { y: 20, opacity: 0 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-[#FF852A] text-xs tracking-[0.15em] mb-2">
                            {work.subcategory.toUpperCase()}
                          </div>
                          <h3 className="text-white text-2xl font-light mb-2">
                            {work.title}
                          </h3>
                          <p className="text-[#DCDCDC]/80 text-sm mb-6">
                            {work.description}
                          </p>
                          <div className="inline-flex items-center group/button">
                            <div className="h-px w-6 bg-[#FF852A] mr-3 group-hover/button:w-10 transition-all duration-300" />
                            <span className="text-white text-sm tracking-[0.15em]">
                              VIEW PROJECT
                            </span>
                            <div className="ml-3 w-8 h-8 rounded-full border border-[#FF852A]/30 flex items-center justify-center group-hover/button:bg-[#FF852A]/10 transition-all duration-300">
                              <ArrowUpRight className="w-4 h-4 text-[#FF852A]" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
