"use client";

import { useState, useEffect } from "react";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import { Song } from "@/types";
import LikeButton from "./LikeButton";
import MobilePlayerSlider from "./MobilePlayerSlider";
import usePlayer from "@/hooks/usePlayer";

interface MobilePlayerProps {
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
  onTogglePlay: () => void;
  onPlayNext: () => void;
  onPlayPrevious: () => void;
  onClose: () => void;
}

const MobilePlayer: React.FC<MobilePlayerProps> = ({
  song,
  isPlaying,
  currentTime,
  duration,
  onSeek,
  onTogglePlay,
  onPlayNext,
  onPlayPrevious,
  onClose
}) => {
  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  
  return (
    <div className="fixed inset-0 z-50 bg-neutral-900 flex flex-col">
      <div className="flex justify-between items-center p-4">
        <button 
          onClick={onClose}
          className="rounded-full p-2 bg-neutral-800 hover:bg-neutral-700"
        >
          <IoMdClose size={24} />
        </button>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Now Playing</h3>
        </div>
        <div className="w-10"></div> {/* Empty div for flex spacing */}
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="relative w-64 h-64 mb-8">
          <Image
            fill
            src={song.image_path || "/images/liked.png"}
            alt="Cover Image"
            className="object-cover rounded-md"
          />
        </div>
        
        <div className="w-full mb-6">
          <h2 className="text-2xl font-bold truncate text-center">
            {song.title}
          </h2>
          <p className="text-neutral-400 text-sm text-center mt-1">
            {song.author}
          </p>
        </div>
        
        <div className="w-full mb-6">
          <MobilePlayerSlider
            value={currentTime}
            onChange={onSeek}
            max={duration}
          />
        </div>
        
        <div className="flex items-center justify-center gap-x-8">
          <LikeButton songId={song.id} iconSize={34}/>
          
          <AiFillStepBackward
            onClick={onPlayPrevious}
            size={40}
            className="text-neutral-400 cursor-pointer hover:text-white transition"
          />
          
          <div 
            onClick={onTogglePlay} 
            className="
              flex 
              items-center 
              justify-center
              h-16
              w-16 
              rounded-full 
              bg-white 
              cursor-pointer
            "
          >
            <Icon size={40} className="text-black" />
          </div>
          
          <AiFillStepForward
            onClick={onPlayNext}
            size={40} 
            className="text-neutral-400 cursor-pointer hover:text-white transition"
          />
          
          <div className="w-8"></div> {/* Empty div for flex spacing */}
        </div>
      </div>
    </div>
  );
};

export default MobilePlayer;