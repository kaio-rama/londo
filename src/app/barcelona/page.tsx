import React from 'react'
import { Metadata } from 'next'
import imag1 from "../assets/images/barcelona_1.jpg";
import Image from "next/image";
import logo from "../assets/images/barcelona .jpg";

export const metadata: Metadata = {
  title: 'Barcelona | LONDO',
  description: 'Productora Audiovisual, hecha por artistas.',
}

export default function LondoLabs() {
  return (
    <>
          <div className="relative w-full h-[300px] sm:h-[400px] bg-black">
        <Image 
          src={logo} 
          alt="BCN" 
          fill
          className="object-none grayscale contrast-125 opacity-80"
          priority
        />
      </div>
      <main>
        <div className="px-6 sm:px-10 py-10 max-w-8xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center sm:text-left">
             // Barcelona
          </h1>

          {/* Contenedor texto + imagen */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Columna de texto */}
            <div className="flex-1">
              <p className="text-2xl mb-6 leading-relaxed text-justify ">
                Londo cuenta con presencia en Barcelona, en el área de audiovisual, enfocados principalmente en el LIVE y los eventos en vivo.  
                Contamos con los equipamientos y el personal necesario para ayudarte en el desarrollo técnico y creativo de tus eventos.
              </p>

              <p className="text-2xl mb-6 leading-relaxed text-justify">
                Disponemos de pantallas LED, cámaras, técnicos especializados en sonido e iluminación, 
                y un equipo creativo comprometido con transformar cada evento en una experiencia única. 
                Nos adaptamos a las necesidades de cada proyecto, ofreciendo soluciones integrales que combinan lo técnico y lo artístico, 
                asegurando resultados impecables en cada producción en vivo.
              </p>

              <p className="text-2xl leading-relaxed text-justify">
                Queremos asegurarnos de poder acompañarte en cada proyecto, ofreciendo soluciones acordes a las necesidadess especificas.
                Tanto para el diseño de la experiencia como para la realización del contenido.
              </p>
            </div>

            {/* Columna de imagen */}
            {/* Contenedor de la imagen */}
            <div className="flex-1 overflow-hidden rounded-lg">
            <Image
                src={imag1}
                alt="image 1"
                className="w-full h-auto object-cover grayscale scale-125
                        transition-transform duration-1000 ease-in-out 
                        hover:scale-150"
                width={2000}
                height={1000}
            />
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
