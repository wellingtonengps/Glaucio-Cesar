import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Autoplay from "embla-carousel-autoplay"



export default function CarouselCustom() {
  return (
      <Carousel
          plugins={[
              Autoplay({
                  delay: 4000,
              }),
          ]}>
          <CarouselContent>
              <CarouselItem >
                  <Card>
                      <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <p>Card Content</p>
                      </CardContent>
                      <CardFooter>
                          <p>Card Footer</p>
                      </CardFooter>
                  </Card>
              </CarouselItem>
              <CarouselItem>
                  <Card>
                      <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <p>Card Content</p>
                      </CardContent>
                      <CardFooter>
                          <p>Card Footer</p>
                      </CardFooter>
                  </Card>
              </CarouselItem>
              <CarouselItem>
                  <Card>
                      <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                          <p>Card Content</p>
                      </CardContent>
                      <CardFooter>
                          <p>Card Footer</p>
                      </CardFooter>
                  </Card>
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
      </Carousel>
  );
}



