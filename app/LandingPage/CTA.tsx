"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#15191D] to-[#343E48] text-white py-24 px-8 overflow-hidden">
      {/* Background pattern overlay - matching OurProcess */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity=".1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      {/* Accent line - similar to OurProcess */}
      <div className="absolute left-24 top-0 w-px h-full bg-gradient-to-b from-[#FF852A] via-[#FF852A]/60 to-transparent" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        {/* Section label - matching Hero and OurProcess style */}
        <div className="text-[#FF852A] text-sm tracking-[0.25em] mb-6 flex items-center justify-center">
          <div className="h-px w-12 bg-[#FF852A] mr-4" />
          ELEVATE YOUR BRAND
          <div className="h-px w-12 bg-[#FF852A] ml-4" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading with font styles matching other components */}
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6 text-center">
            Let&apos;s Bring Your Vision to Life
          </h2>

          {/* Description with font styles matching other components */}
          <p className="text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed text-center">
            Whether it&apos;s photography or videography, we craft compelling
            visuals that tell your story and elevate your brand through
            strategic storytelling.
          </p>

          {/* Services grid with styling similar to OurProcess deliverables */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Commercial Films",
              "Brand Storytelling",
              "Creative Direction",
            ].map((service, i) => (
              <motion.div
                key={i}
                className="p-6 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-2 h-2 bg-[#FF852A] rounded-full mx-auto mb-4" />
                <span className="text-white/90 font-light">{service}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button - styled like other components with hover animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <a
              href="/contact"
              className="relative px-10 py-4 bg-transparent border border-[#FF852A] text-white text-sm tracking-[0.25em] overflow-hidden group inline-flex items-center gap-3"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF852A] to-[#FF6A00] transition-transform translate-x-[-100%] group-hover:translate-x-0 duration-300" />
              <span className="relative z-10 group-hover:text-[#15191D]">
                START YOUR PROJECT
              </span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover:text-[#15191D]" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
