"use client";
import React from "react";
import { motion } from "framer-motion";

const LogoScroller = () => {
  const clientGroups = [
    {
      title: "ADVERTISING",
      logos: [
        "VOGUE",
        "CHANEL",
        "DIOR",
        "GUCCI",
        "PRADA",
        "HERMÈS",
        "CARTIER",
        "LOUIS VUITTON",
        "TIFFANY",
        "BVLGARI",
      ],
    },
    {
      title: "LUXURY",
      logos: [
        "VERSACE",
        "FENDI",
        "BURBERRY",
        "OMEGA",
        "ROLEX",
        "BALENCIAGA",
        "VALENTINO",
        "ARMANI",
        "YSL",
        "GIVENCHY",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-br from-[#111418] to-[#15191D]">
      {/* Background pattern overlay - matching OurProcess and Services components */}
      <div
        className="absolute inset-0 opacity-5 z-10"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity=".1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Section Header - matching the styling of other components */}
      {/* <div className="relative z-20 px-8 lg:px-24 mb-8">
        <div className="text-[#FF852A] text-sm tracking-[0.25em] mb-4 flex items-center">
          <div className="h-px w-12 bg-[#FF852A] mr-4" />
          TRUSTED BY PREMIUM BRANDS
        </div>
      </div> */}

      {/* Gradient Fades for Smooth Transitions */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#111418] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111418] to-transparent z-10" />

      {/* Client Groups */}
      {clientGroups.map((group, groupIndex) => (
        <div key={group.title} className="relative my-8 z-20">
          {/* Group title */}
          {/* <div className="px-8 lg:px-24 mb-4">
            <p className="text-white/50 text-xs tracking-[0.2em] flex items-center">
              <div className="w-1 h-1 bg-[#FF852A] rounded-full mr-3" />
              {group.title}
            </p>
          </div> */}

          {/* Scrolling logos */}
          <div
            className={`flex ${groupIndex % 2 === 0 ? "animate-scroll-left" : "animate-scroll-right"}`}
          >
            {/* Double the logos to create seamless loop */}
            {[...group.logos, ...group.logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex items-center justify-center min-w-[220px] px-8 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-5 rounded-sm border border-white/10 hover:border-[#FF852A] transition-all duration-300 group-hover:bg-[#FF852A]/5"
                >
                  <span className="text-white text-xl tracking-[4px] font-light group-hover:text-[#FF852A] transition-all duration-300">
                    {logo}
                  </span>
                  <div className="absolute inset-0 bg-[#FF852A] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Gradient Overlays for Scrolling Effect */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#111418] to-transparent z-30" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#111418] to-transparent z-30" />

      {/* Highlight text at bottom */}
      {/* <div className="relative z-20 px-8 lg:px-24 mt-8 flex justify-center">
        <p className="text-[#FF852A] italic font-light text-lg border-l-2 border-[#FF852A] pl-4 bg-gradient-to-r from-[#FF852A]/10 to-transparent py-2 max-w-xl">
          Delivering exceptional visual narratives for world-class brands
        </p>
      </div> */}
    </section>
  );
};

export default LogoScroller;
