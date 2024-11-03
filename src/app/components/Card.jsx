"use client";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";

import Image from "next/image";
import Link from "next/link";
   
  export function ProfileCard(prop) { 
    return (
      <Link href={prop.onclick}>
      <Card className="w-96 bg-gray-900/40 "> 
        <CardHeader floated={false} className="h-80 bg-gradient-to-r from-gray-900 to-blue-900 ">
          <Image src={prop.image} alt={prop.alt} width={500} height={500} />
        </CardHeader>
        <CardBody className="text-center pb-4">
          <Typography variant="h4" className="mb-2 text-blue-gray-400">
            {prop.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {prop.position}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-0 mb-2">
        <Typography color="blue-gray" className="font-medium text-center text-blue-gray-400" textGradient>
            {prop.description}
          </Typography>
        </CardFooter>
      </Card>
      </Link>
    );
  }