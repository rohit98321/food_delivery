// src/components/ReelCard.jsx
import React, { useEffect, useRef } from "react";

const ReelCard = ({ videoSrc, index, currentIndex }) => {
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.6 } // Play when 60% of the video is visible
    );
  
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
  
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);
  ;

  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-black">
      <video
        ref={videoRef}
        src={videoSrc.video}
        className="h-full w-[500px] object-cover"
        loop
        muted
      
        playsInline
      ></video>

      {/* Overlay icons */}
      <div className="absolute right-5 bottom-20 flex flex-col items-center gap-6 text-white">
        <button className="text-3xl"></button>
        <button className="text-3xl">💬</button>
        <button className="text-3xl">🔗</button>
      </div>
    </div>
  );
};

export default ReelCard;
