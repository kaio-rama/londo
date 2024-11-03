"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

import imag1 from "../assets/images/DSC05330.jpg";
import imag2 from "../assets/images/DSC05207.jpg";
import imag3 from "../assets/images/DSC05117.jpg";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-lg h-96" style={styles.image}>
      <Image
        src={imag1}
        alt="image 1"
        className="w-full h-full object-cover "
        
        width={1000}
        height={1000}
      />
      <Image
        src={imag2}
        alt="image 2"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
      <Image
        src={imag3}
        alt="image 3"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
    </Carousel>
  );
}

const styles = {
    image : {
      width: "100%",
      height: "600px",
      objectFit: "cover",
    }
};