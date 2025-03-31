"use client";
import React, { useState, useRef, useEffect } from "react";
import { Camera, Film, Play, ArrowUpRight, Check, Pause, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Define service type
interface ServiceProcess {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  clients: number;
  expertise: number;
  features: string[];
  icon: React.FC<{ className?: string }>;
  deliverables: string[];
  process: ServiceProcess[];
  processVideo: string;
  thumbnail: string;
}

const services: Service[] = [
  {
    id: "commercial",
    title: "Commercial Photography & Videography",
    description:
      "Premium visual content for brands and businesses, from product photography to corporate films.",
    duration: "2-4 weeks",
    clients: 500,
    expertise: 98,
    features: [
      "Professional product photography",
      "Corporate event coverage",
      "Brand storytelling",
      "Marketing campaign visuals",
      "Social media content",
      "Aerial photography",
    ],
    icon: Camera,
    deliverables: [
      "High-resolution edited images",
      "4K video content",
      "Raw footage backup",
      "Online gallery access",
      "Commercial usage rights",
      "Express delivery option",
    ],
    process: [
      {
        title: "Consultation",
        description: "Understanding your brand and visual requirements",
      },
      {
        title: "Pre-Production",
        description: "Planning shots, locations, and creative direction",
      },
      {
        title: "Production",
        description: "Professional shooting with state-of-the-art equipment",
      },
      {
        title: "Post-Production",
        description: "Expert editing and color grading",
      },
    ],
    processVideo: "/assets/ciroc.mp4",
    thumbnail: "/assets/l1.jpg", 
  },
  {
    id: "events",
    title: "Event Cinematography",
    description:
      "Capturing special moments with cinematic excellence and creative storytelling.",
    duration: "1-2 weeks",
    clients: 300,
    expertise: 95,
    features: [
      "Wedding videography",
      "Corporate events",
      "Live event streaming",
      "Multi-camera setup",
      "Same-day highlights",
      "Full event coverage",
    ],
    icon: Film,
    deliverables: [
      "Full event coverage",
      "Highlight reel",
      "Multiple camera angles",
      "Professional audio",
      "Custom music licensing",
      "Online sharing platform",
    ],
    process: [
      {
        title: "Planning",
        description: "Event schedule and shot list preparation",
      },
      {
        title: "Setup",
        description: "Equipment testing and location preparation",
      },
      {
        title: "Coverage",
        description: "Professional event documentation",
      },
      {
        title: "Delivery",
        description: "Quick turnaround editing and delivery",
      },
    ],
    processVideo: "/assets/pepsi.mp4",
    thumbnail: "/assets/l2.jpg",
  },
  {
    id: "production",
    title: "Video Production",
    description:
      "End-to-end video production services from concept to final delivery.",
    duration: "3-6 weeks",
    clients: 200,
    expertise: 96,
    features: [
      "Script development",
      "Location scouting",
      "Professional crew",
      "High-end equipment",
      "Post-production",
      "Color grading",
    ],
    icon: Play,
    deliverables: [
      "Concept development",
      "Storyboards",
      "Professional crew",
      "4K/8K footage",
      "Sound design",
      "Color grading",
    ],
    process: [
      {
        title: "Pre-Production",
        description: "Script, storyboard, and production planning",
      },
      {
        title: "Production",
        description: "Professional filming with expert crew",
      },
      {
        title: "Post-Production",
        description: "Editing, sound design, and color grading",
      },
      {
        title: "Review",
        description: "Client feedback and final adjustments",
      },
    ],
    processVideo: "/assets/telkom.mp4",
    thumbnail: "/assets/l3.jpg",
  },
];

const DetailedServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  // Track whether the sticky behavior should be active (only on desktop)
  const [isStickyActive, setIsStickyActive] = useState<boolean>(false);
  
  // Check screen size on component mount and window resize
  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsStickyActive(window.innerWidth >= 1024); // lg breakpoint
    };
    
    // Initial check
    checkScreenSize();
    
    // Set up event listener for resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Add effect to handle video playback state changes
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        // Promise-based play with error handling
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video started playing successfully
            })
            .catch((error: Error) => {
              // Auto-play was prevented or other error occurred
              console.error("Video playback error:", error);
              setIsPlaying(false);
            });
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedService.id]);

  // Reset video when changing services
  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.load(); // Make sure to reload the video source
    }
  }, [selectedService.id]);

  const handleVideoToggle = (): void => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = (): void => {
    setIsFullscreen(!isFullscreen);
    
    // Reset video state when toggling fullscreen
    if (isFullscreen) {
      setIsPlaying(false);
    }
  };

  const handleServiceChange = (service: Service): void => {
    setSelectedService(service);
    setIsPlaying(false);
    setIsFullscreen(false);
    
    // Scroll to top of details on mobile
    if (window.innerWidth < 1024 && detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 pt-32 pb-24">
      {/* Fullscreen Video Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={toggleFullscreen}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="w-full h-full max-w-7xl max-h-[80vh] flex items-center justify-center">
            <video
              ref={videoRef}
              src={selectedService.processVideo}
              className="w-full h-full object-contain"
              controls
              autoPlay
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
          <h3 className="text-white text-xl mt-4">{selectedService.title} Process</h3>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-light text-white mb-4">Our Services</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Transform your vision into reality with our professional photography
            and videography services.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 relative">
          {/* Left Column - Service Selection - Make sticky on desktop */}
          <div className={`lg:col-span-5 space-y-4 ${isStickyActive ? 'lg:sticky lg:top-8 lg:self-start lg:max-h-[calc(100vh-4rem)] lg:overflow-y-hidden' : ''}`}>
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceChange(service)}
                className={`group cursor-pointer rounded-xl p-6 transition-all duration-300  ${
                  selectedService.id === service.id
                    ? "bg-white/10 border-[#FF852A] border"
                    : "bg-white/5 border border-transparent hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${
                        selectedService.id === service.id
                          ? "bg-[#FF852A]"
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-zinc-400 text-sm font-medium">
                      {service.duration}
                    </span>
                  </div>
                  {selectedService.id === service.id && (
                    <div className="bg-[#FF852A]/20 text-[#FF852A] text-xs font-medium py-1 px-3 rounded-full">
                      Active
                    </div>
                  )}
                </div>
                <h3 className="text-xl text-white font-medium mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Stats */}
                <div className="mt-4 flex gap-4">
                  <div>
                    <p className="text-xs text-zinc-500">Clients</p>
                    <p className="text-white font-medium">{service.clients}+</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Expertise</p>
                    <p className="text-white font-medium">{service.expertise}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Service Details */}
          <Card 
            ref={detailsRef}
            className="lg:col-span-7 bg-white/5 border-white/10 backdrop-blur-xl overflow-hidden"
          >
            <CardContent className="p-0">
              {/* Video Section */}
              <div className="relative aspect-video bg-black/40">
                {!isPlaying ? (
                  <>
                    <div className="w-full h-full relative">
                      <Image 
                        src={selectedService.thumbnail || "/api/placeholder/640/360"} 
                        alt={`${selectedService.title} process`}
                        fill
                        className="object-cover opacity-80"
                      />
                    </div>
                    <button 
                      onClick={handleVideoToggle}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-20 h-20 rounded-full bg-[#FF852A] flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    </button>
                  </>
                ) : (
                  <>
                    <video
                      ref={videoRef}
                      src={selectedService.processVideo}
                      className="w-full h-full object-cover"
                      onEnded={() => setIsPlaying(false)}
                      onError={() => {
                        console.error("Video failed to load");
                        setIsPlaying(false);
                      }}
                      playsInline
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <button 
                        onClick={handleVideoToggle}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                      >
                        <Pause className="w-5 h-5 text-white" />
                      </button>
                      <button 
                        onClick={toggleFullscreen}
                        className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="p-8">
                <h2 className="text-3xl text-white font-medium mb-2">{selectedService.title}</h2>
                <p className="text-zinc-400 mb-8">{selectedService.description}</p>

                <div className="mb-12">
                  <h3 className="text-2xl text-white font-medium mb-8">
                    What&apos;s Included
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {selectedService.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-[#FF852A]/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-[#FF852A]" />
                        </div>
                        <span className="text-zinc-300 group-hover:text-white transition-colors">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl text-white font-medium mb-8">
                    Our Process
                  </h3>
                  <div className="space-y-8">
                    {selectedService.process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="relative">
                          <div className="w-10 h-10 rounded-full bg-[#FF852A] flex items-center justify-center">
                            <span className="text-black font-medium">
                              {index + 1}
                            </span>
                          </div>
                          {index !== selectedService.process.length - 1 && (
                            <div className="absolute top-10 left-1/2 w-px h-16 bg-gradient-to-b from-[#FF852A]/50 to-transparent" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2 group-hover:text-[#FF852A] transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-zinc-400 text-sm leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-12 w-full bg-[#FF852A] text-white py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FF852A]/90 transition-all hover:scale-[1.02] group">
                  <span className="font-medium">Get Started</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailedServices;