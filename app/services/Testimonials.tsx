"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "Elevate Brands",
    image: "/api/placeholder/100/100", // Replace with actual client image
    quote: "Their commercial photography elevated our product line beyond our expectations. The team's attention to detail and creative direction resulted in visuals that increased our engagement by 46% across all platforms.",
    service: "Commercial Photography",
    rating: 5,
    date: "February 2025",
  },
  {
    id: "t2",
    name: "Michael Rodriguez",
    position: "Event Coordinator",
    company: "Global Summit Series",
    image: "/api/placeholder/100/100", // Replace with actual client image
    quote: "Working with this team for our international conference was seamless. They captured every key moment with minimal disruption, and delivered a highlight reel that perfectly encapsulated the spirit of our event.",
    service: "Event Cinematography",
    rating: 5,
    date: "January 2025",
  },
  {
    id: "t3",
    name: "Emily Chen",
    position: "Creative Director",
    company: "Innovate Studios",
    image: "/api/placeholder/100/100", // Replace with actual client image
    quote: "From concept to final delivery, the video production process was exceptional. Their team brought our vision to life with a level of professionalism and creativity that exceeded our high expectations.",
    service: "Video Production",
    rating: 5,
    date: "March 2025",
  },
  {
    id: "t4",
    name: "David Thompson",
    position: "CEO",
    company: "NextGen Solutions",
    image: "/api/placeholder/100/100", // Replace with actual client image
    quote: "The aerial photography for our corporate campus was breathtaking. They navigated complex regulations and technical challenges to deliver stunning visuals that we've featured prominently in our rebranding campaign.",
    service: "Commercial Photography",
    rating: 5,
    date: "December 2024",
  },
  {
    id: "t5",
    name: "Jessica Williams",
    position: "Wedding Planner",
    company: "Eternal Moments",
    image: "/api/placeholder/100/100", // Replace with actual client image
    quote: "My clients consistently rave about the wedding videos produced by this team. They capture intimate moments with such artistry while remaining unobtrusive throughout the day. The same-day edits always leave the couple speechless.",
    service: "Event Cinematography",
    rating: 5,
    date: "February 2025",
  },
];

// Define a type for direction
type SlideDirection = "left" | "right" | null;

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<SlideDirection>(null);

  const goToPrevious = () => {
    if (!animating) {
      setDirection("left");
      setAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (!animating) {
      setDirection("right");
      setAnimating(true);
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }
  };

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
      }, 500); // Match this with your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [animating]);

  // Add type for rating parameter
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? "text-[#FF852A] fill-[#FF852A]" : "text-zinc-600"}`} 
      />
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-[#FF852A]"></div>
            <span className="text-[#FF852A] uppercase tracking-wider text-sm font-medium">
              Client Success
            </span>
            <div className="h-px w-12 bg-[#FF852A]"></div>
          </div>
          <h2 className="text-4xl font-light text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what clients have to say about their experience working with our team.
          </p>
        </div>

        <div className="relative">
          {/* Large Quote Icon */}
          <div className="absolute -top-12 left-0 opacity-10">
            <Quote className="w-24 h-24 text-[#FF852A]" />
          </div>

          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden min-h-[300px]">
            <div 
              className={`transition-all duration-500 ease-in-out ${
                animating 
                  ? direction === "right" 
                    ? "transform -translate-x-10 opacity-0" 
                    : "transform translate-x-10 opacity-0"
                  : "transform translate-x-0 opacity-100"
              }`}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Client Image & Info - Left Column */}
                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#FF852A]/30">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-white font-medium">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-zinc-400 mb-1">{currentTestimonial.position}</p>
                  <p className="text-[#FF852A] font-medium mb-3">{currentTestimonial.company}</p>
                  <div className="flex items-center gap-1 mb-3">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                  <span className="text-zinc-500 text-sm">{currentTestimonial.date}</span>
                </div>

                {/* Testimonial Quote - Right Column */}
                <div className="md:col-span-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 relative">
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-[#FF852A] z-10" />
                    <div className="relative z-0">
                      <p className="text-zinc-300 leading-relaxed text-lg italic mb-4">
                        "{currentTestimonial.quote}"
                      </p>
                      <p className="text-[#FF852A] font-medium">
                        {currentTestimonial.service}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 gap-4">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 px-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!animating) {
                      setDirection(index < currentIndex ? "left" : "right");
                      setAnimating(true);
                      setCurrentIndex(index);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? "bg-[#FF852A] w-8" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="text-3xl text-white font-light mb-2">100%</div>
            <p className="text-zinc-400">Client Satisfaction</p>
          </div>
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="text-3xl text-white font-light mb-2">1,000+</div>
            <p className="text-zinc-400">Projects Completed</p>
          </div>
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="text-3xl text-white font-light mb-2">15+</div>
            <p className="text-zinc-400">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;