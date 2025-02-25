"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, Camera, Plane, Scissors, ArrowUpRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  link: string;
  icon: React.ElementType;
  image: string;
  tagline: string;
}

const services: Service[] = [
  {
    title: "VIDEOGRAPHY",
    description:
      "Professional video production for weddings, events, commercials, and brand stories. We capture your moments with cinematic quality.",
    link: "#",
    icon: Video,
    image: "/assets/img1.jpg",
    tagline: "Capturing moments in motion",
  },
  {
    title: "PHOTOGRAPHY",
    description:
      "Stunning still photography for portraits, events, products, and commercial needs. Every shot tells your unique story.",
    link: "#",
    icon: Camera,
    image: "/assets/img3.jpg",
    tagline: "Preserving moments in time",
  },
  {
    title: "AERIAL SERVICES",
    description:
      "Breathtaking drone photography and videography for unique perspectives and dynamic aerial shots.",
    link: "#",
    icon: Plane,
    image: "/assets/img2.jpg",
    tagline: "Elevating your perspective",
  },
  {
    title: "POST-PRODUCTION",
    description:
      "Expert editing, color grading, and visual effects to transform raw footage into polished, professional content.",
    link: "#",
    icon: Scissors,
    image: "/assets/img1.jpg",
    tagline: "Perfecting every frame",
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate services similar to the hero and process components
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % services.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-br from-[#111418] to-[#15191D] py-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern overlay - matching OurProcess component */}
      <div
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity=".1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="px-8 lg:px-24 relative z-20">
        {/* Featured Service with Image - mimicking the hero layout */}
        <div className="flex flex-col lg:flex-row mb-16 gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative h-96 lg:h-auto overflow-hidden rounded-sm"
            >
              {/* Background Image with Zoom Effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${services[activeIndex].image})`,
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#343E48]/90 via-[#343E48]/70 to-transparent" />

              {/* Content on Image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Icon with glow effect */}
                  {/* <div className="p-4 rounded-full inline-flex bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5 mb-6">
                    <services [activeIndex].icon className="text-[#FF852A] w-8 h-8" strokeWidth={1.5} />
                  </div> */}

                  {/* Tagline */}
                  <div className="text-[#FF852A] text-sm tracking-[0.25em] mb-2">
                    {services[activeIndex].tagline.toUpperCase()}
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-3xl font-light mb-4">
                    {services[activeIndex].title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-base font-light mb-8 max-w-md leading-relaxed">
                    {services[activeIndex].description}
                  </p>

                  {/* Button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="relative px-8 py-4 bg-transparent border border-[#FF852A] text-white text-sm tracking-[0.25em] overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FF852A] to-[#FF6A00] transition-transform translate-x-[-100%] group-hover:translate-x-0 duration-300" />
                    <span className="relative z-10 group-hover:text-[#15191D]">
                      EXPLORE SERVICE
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Service Selection */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setActiveIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative border-b border-white/10 py-6 cursor-pointer group ${
                  activeIndex === index ? "backdrop-blur-sm bg-white/5" : ""
                }`}
              >
                <div className="flex items-start p-4">
                  {/* Vertical line indicator */}
                  <div
                    className={`w-px h-16 transition-all duration-500 mr-6 ${
                      activeIndex === index
                        ? "bg-gradient-to-b from-[#FF852A] to-[#FF852A]/60"
                        : "bg-white/20 group-hover:bg-white/40"
                    }`}
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-4">
                      {/* Service icon */}
                      <div
                        className={`p-2 rounded-full transition-all duration-300 ${
                          activeIndex === index
                            ? "bg-gradient-to-br from-[#FF852A]/20 to-[#FF852A]/5"
                            : "bg-white/5 group-hover:bg-[#FF852A]/10"
                        } mr-4`}
                      >
                        <service.icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            activeIndex === index
                              ? "text-[#FF852A]"
                              : "text-white/60 group-hover:text-[#FF852A]"
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Service title */}
                      <h3
                        className={`flex-1 text-xl tracking-wider font-light transition-colors duration-300 ${
                          activeIndex === index
                            ? "text-[#FF852A]"
                            : "text-white group-hover:text-[#FF852A]"
                        }`}
                      >
                        {service.title}
                      </h3>

                      {/* Arrow icon */}
                      <div className="flex items-center justify-center">
                        <motion.div
                          className="w-8 h-8 flex items-center justify-center overflow-hidden relative"
                          whileHover={{ scale: 1.1 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#FF852A] to-[#FF6A00] rounded-full"
                            initial={{ scale: 0 }}
                            animate={
                              hoveredIndex === index || activeIndex === index
                                ? { scale: 1 }
                                : { scale: 0 }
                            }
                            transition={{ duration: 0.3 }}
                          />
                          <ArrowUpRight className="relative z-10 text-white w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expandable description */}
                    <AnimatePresence>
                      {(hoveredIndex === index || activeIndex === index) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden pl-11" // Aligned with the icon
                        >
                          <p className="text-[#DCDCDC] text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <div className="inline-flex items-center text-[#FF852A] text-xs tracking-wider">
                            <div className="h-px w-6 bg-[#FF852A]/50 mr-3" />
                            {service.tagline.toUpperCase()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar - matching other components */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-40">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (activeIndex + 1) / services.length }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-gradient-to-r from-[#FF852A] to-[#FF6A00] origin-left"
          style={{ boxShadow: "0 0 10px rgba(255, 133, 42, 0.5)" }}
        />
      </div>

      {/* Step counter - matching OurProcess */}
      <div className="absolute bottom-8 left-24 text-white/70 text-sm z-40">
        <span className="text-[#FF852A] font-medium">{activeIndex + 1}</span>
        <span className="mx-2">/</span>
        <span>{services.length}</span>
      </div>

      {/* Navigation Dots - matching other components */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-40">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${
                index === activeIndex
                  ? "bg-gradient-to-r from-[#FF852A] to-[#FF6A00] w-6 shadow-md shadow-[#FF852A]/30"
                  : "bg-white/30 hover:bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
