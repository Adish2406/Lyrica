"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import { useEffect, useState } from "react";
import { formatTime } from "@/libs/formatters";

interface PlayerSliderProps {
  value?: number;
  onChange?: (value: number) => void;
  max: number;
  song: any;
}

const PlayerSlider: React.FC<PlayerSliderProps> = ({ 
  value = 0, 
  onChange,
  max = 1,
  song
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2">
      <div className="text-xs text-neutral-400 w-10 text-right">
        {formatTime(value)}
      </div>
      <RadixSlider.Root
        className="
          relative 
          flex 
          items-center 
          w-full 
          h-10
          cursor-pointer
          touch-none
          select-none
        "
        defaultValue={[0]}
        value={[value]}
        onValueChange={(newValue) => onChange?.(newValue[0])}
        max={max}
        step={0.1}
        aria-label="Song progress"
      >
        <RadixSlider.Track 
          className="
            bg-neutral-600 
            relative 
            grow 
            rounded-full 
            h-[3px]
          "
        >
          <RadixSlider.Range 
            className="
              absolute 
              bg-white 
              rounded-full 
              h-full
            " 
          />
        </RadixSlider.Track>
        <RadixSlider.Thumb 
          className="
            block 
            w-3 
            h-3 
            bg-white 
            rounded-full
            focus:outline-none
            focus-visible:ring
            focus-visible:ring-white
            focus-visible:ring-opacity-75
          " 
          aria-label="Song progress handle"
        />
      </RadixSlider.Root>
      <div className="text-xs text-neutral-400 w-10">
        {formatTime(max)}
      </div>
    </div>
  );
};

export default PlayerSlider;