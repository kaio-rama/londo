"use client";

import React from 'react';

interface Props {
  title: string;
  directionleft: boolean;
  directionright: boolean;
  src: string;
  text: string;
}

export const Video = (props: Props) => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInDiagonal {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        .fade-in-diagonal {
          animation: fadeInDiagonal 5s ease-out forwards;
        }
      `}</style>
      <div
        className={`fade-in-diagonal flex flex-col lg:flex-row items-center justify-center lg:gap-8 p-10 ${
          props.directionleft ? 'bg-gradient-to-t from-black' : 'bg-gradient-to-b from-black'
        }`}
      >
        {props.directionleft ? (
          <>
            <div className="flex flex-col items-center justify-center p-4 lg:w-1/2 text-gray-200 h-[200px] sm:h-[200px] md:h-[200px] xl:h-[200px] xl:h-[340px] mb-10">
              <h2 className="text-3xl font-bold mb-8">{props.title}</h2>
              <p className="font-normal text-xl text-center pb-4">{props.text}</p>
            </div>
            <iframe
              src={props.src}
              className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[360px] lg:h-[400px] xl:h-[500px] max-w-[980px]"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        ) : (
          <>
            <iframe
              src={props.src}
              className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[360px] lg:h-[400px] xl:h-[500px] max-w-[980px]"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="flex flex-col items-center justify-center p-4 lg:w-1/2 text-gray-200 h-[200px] sm:h-[200px] md:h-[200px] xl:h-[200px] xl:h-[340px] mt-10">
              <h2 className="text-3xl font-bold mb-8">{props.title}</h2>
              <p className="font-normal text-xl text-center">{props.text}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
