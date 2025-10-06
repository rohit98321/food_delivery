// src/components/ReelCard.jsx
import React, { useEffect, useRef } from "react";

const ReelCard = ({ videoSrc, index, currentIndex }) => {
  const videoRef = useRef();

  useEffect(() => {
    if (index === currentIndex) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [index, currentIndex]);

  return (
    <div className="relative h-screen w-full flex justify-center items-center bg-black">
      <video
        ref={videoRef}
        src={videoSrc}
        className="h-full w-[500px] object-cover"
        loop
        muted
        playsInline
      ></video>

      {/* Overlay icons */}
      <div className="absolute right-5 bottom-20 flex flex-col items-center gap-6 text-white">
        <button className="text-3xl">❤️</button>
        <button className="text-3xl">💬</button>
        <button className="text-3xl">🔗</button>
      </div>
    </div>
  );
};

export default ReelCard;
