// src/pages/ReelsPage.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReelCard from "../components/ReelCard";
import {
  loadVideos,
  setCurrentIndex,
} from "../reduxToolKit/Slices/food.slice";
import { asyncGetVideos } from "../reduxToolKit/Actions/food.action";

const ReelsPage = () => {
  const dispatch = useDispatch();
  const { videos, currentIndex } = useSelector((state) => state.video);

  // Example static videos (can be fetched from API)
  const videoData = [
    { id: 1, src: "/videos/reel1.mp4" },
    { id: 2, src: "/videos/reel2.mp4" },
    { id: 3, src: "/videos/reel3.mp4" },
  ];

  useEffect(() => {
    dispatch(asyncGetVideos());
  }, [dispatch]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;
    const index = Math.round(scrollY / screenHeight);
    dispatch(setCurrentIndex(index));
  };

  const render = videos?.map((v, index) => (
    <div key={v._id} className="snap-start">
      <ReelCard videoSrc={v} index={index} currentIndex={currentIndex} />
    </div>
  ));

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return videos ? (
    <div className="snap-y snap-mandatory h-screen overflow-scroll no-scrollbar">
      {render}
    </div>
  ) : (
    <div className="p-3 text-3xl text-blue-600"><h1>loding...</h1></div>
  );
};

export default ReelsPage;
