"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { PaginationDots } from "@/components/widgets/shared/PaginationDots"

export function TextCarousel({ 
  slides, 
}: { 
  slides: React.ReactNode[]
}) {
  const [api, setApi] = React.useState<any>(null)
  const [current, setCurrent] = React.useState(1)

  React.useEffect(() => {
    if (!api) return
    const update = () => setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", update)
    update()
    return () => api.off("select", update)
  }, [api])

  return (
    <div className="flex flex-col flex-1">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              {slide}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-1 absolute bottom-1 left-0 right-0">
        <PaginationDots
          currentPage={current}
          totalPages={slides.length}
        />
      </div>
    </div>
  )
}
