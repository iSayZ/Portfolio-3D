import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCarouselProps {
  screenshots: string[];
}

export const ProjectCarousel = ({ screenshots }: ProjectCarouselProps) => (
  <div className="absolute inset-0">
    <Carousel>
      <CarouselContent>
        {screenshots.map((screenshot, index) => (
          <CarouselItem key={index} className="h-[50vh] md:h-[60vh]">
            <div className="relative w-full h-full">
              <Image
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 md:size-12 z-20" />
      <CarouselNext className="right-4 md:size-12 z-20" />
    </Carousel>
  </div>
);

export default ProjectCarousel;
