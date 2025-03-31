"use client";
import React, { useState } from "react";
import { Play, ArrowRight, Camera, Film, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  serviceType: string;
  views: string;
  likes: number;
  description: string;
}

const behindTheScenesVideos = [
  {
    id: "bts-commercial",
    title: "Commercial Shoot: Creating Magic for Brand XYZ",
    thumbnail: "/assets/l2.jpg",
    videoUrl: "/assets/ciroc.mp4",
    duration: "3:24",
    serviceType: "Commercial",
    views: "2.4K",
    likes: 142,
    description: "Watch our team transform a simple product into a compelling visual story. From lighting setup to final shot composition.",
  },
  {
    id: "bts-wedding",
    title: "Wedding Film: Capturing Emma & John's Special Day",
    thumbnail: "/assets/img1.jpg",
    videoUrl: "/assets/ciroc.mp4",
    duration: "4:17",
    serviceType: "Event",
    views: "3.7K",
    likes: 289,
    description: "See how we document precious moments while remaining unobtrusive. Our multi-camera setup ensures no special moment is missed.",
  },
  {
    id: "bts-production",
    title: "Production: On Set with Our Latest Short Film",
    thumbnail: "/assets/l1.jpg",
    videoUrl: "/assets/ciroc.mp4",
    duration: "5:42",
    serviceType: "Production",
    views: "5.1K",
    likes: 327,
    description: "Step into our creative process as we direct actors, set up complex shots, and bring a compelling story to life.",
  },
  {
    id: "bts-drone",
    title: "Aerial Photography: City Skyline at Sunset",
    thumbnail: "/assets/l3.jpg",
    videoUrl: "/assets/ciroc.mp4",
    duration: "2:51",
    serviceType: "Commercial",
    views: "1.9K",
    likes: 98,
    description: "Join our drone operator as we capture breathtaking aerial footage, from pre-flight checks to post-production color grading.",
  },
];

const BehindTheScenes = () => {
  const [selectedVideo, setSelectedVideo] = useState(behindTheScenesVideos[0]);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleVideoSelection = (video: Video) => {
    if (selectedVideo.id !== video.id) {
      setShowVideo(false);
      setSelectedVideo(video);
    }
  };
  
  const getServiceIcon = (type: string) => {
    switch (type) {
      case "Commercial":
        return <Camera className="w-4 h-4" />;
      case "Event":
        return <Film className="w-4 h-4" />;
      case "Production":
        return <Play className="w-4 h-4" />;
      default:
        return <Camera className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-[#FF852A]"></div>
            <span className="text-[#FF852A] uppercase tracking-wider text-sm font-medium">
              Exclusive
            </span>
          </div>
          <h2 className="text-4xl font-light text-white mb-4">
            Behind the Scenes
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Get an exclusive look at our creative process. See how we bring your vision to life with dedication, expertise, and cutting-edge equipment.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Featured Video */}
          <div className="lg:col-span-8">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black/40 mb-6">
              {!showVideo ? (
                <>
                  <img 
                    src={selectedVideo.thumbnail} 
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <button 
                    onClick={handlePlayVideo}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#FF852A] flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  </button>
                  <div className="absolute bottom-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {selectedVideo.duration}
                  </div>
                </>
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  onEnded={() => setShowVideo(false)}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div>
              <h3 className="text-2xl text-white font-medium mb-2">
                {selectedVideo.title}
              </h3>
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#FF852A]/20 p-1 rounded">
                    {getServiceIcon(selectedVideo.serviceType)}
                  </div>
                  <span className="text-zinc-400 text-sm">{selectedVideo.serviceType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 text-sm">{selectedVideo.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#FF852A]" />
                  <span className="text-zinc-400 text-sm">{selectedVideo.likes}</span>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>
          </div>

          {/* Video Selection List */}
          <div className="lg:col-span-4">
            <h3 className="text-xl text-white font-medium mb-6 flex items-center justify-between">
              <span>More Videos</span>
              <a href="#" className="text-sm text-[#FF852A] flex items-center gap-1 hover:underline">
                View all <ArrowRight className="w-4 h-4" />
              </a>
            </h3>
            <div className="space-y-4">
              {behindTheScenesVideos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => handleVideoSelection(video)}
                  className={`flex gap-4 cursor-pointer group rounded-lg p-2 transition-all ${
                    selectedVideo.id === video.id
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="relative w-28 h-16 flex-shrink-0 rounded-md overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1.5 py-0.5 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-medium mb-1 truncate group-hover:text-[#FF852A] transition-colors">
                      {video.title}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 text-xs">{video.serviceType}</span>
                      <span className="text-zinc-500 text-xs">•</span>
                      <span className="text-zinc-500 text-xs">{video.views} views</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="mt-8 bg-white/5 border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <h4 className="text-white font-medium mb-3">
                  Want to see more?
                </h4>
                <p className="text-zinc-400 text-sm mb-4">
                  Subscribe to our channel to get notified about new behind-the-scenes content.
                </p>
                <button className="w-full bg-[#FF852A] text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FF852A]/90 transition-all text-sm font-medium">
                  Subscribe Now
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScenes;