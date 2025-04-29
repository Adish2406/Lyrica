"use client";

import * as RadixSlider from "@radix-ui/react-slider";
import { useEffect, useState } from "react";
import { formatTime } from "@/libs/formatters";

interface MobilePlayerSliderProps {
  value?: number;
  onChange?: (value: number) => void;
  max: number;
}

const MobilePlayerSlider: React.FC<MobilePlayerSliderProps> = ({ 
  value = 0, 
  onChange,
  max = 1,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col w-full gap-y-1">
      <RadixSlider.Root
        className="
          relative 
          flex 
          items-center 
          w-full 
          h-8
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
      <div className="flex justify-between text-xs text-neutral-400">
        <div>{formatTime(value)}</div>
        <div>{formatTime(max)}</div>
      </div>
    </div>
  );
};

export default MobilePlayerSlider;