"use client";

import { X } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface FullScreenCarouselProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenCarousel = ({
  images,
  isOpen,
  onClose,
}: FullScreenCarouselProps) => {
  
  // To lock the scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50">
      <Button
        variant="destructive"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 rounded-full size-12"
      >
        <X className="h-6 w-6" />
      </Button>

      <Carousel className="h-screen">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 size-12" />
        <CarouselNext className="right-4 size-12" />
      </Carousel>
    </div>
  );
};

export default FullScreenCarousel;
