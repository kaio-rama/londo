import type { Metadata } from "next";
import { ProfileCard } from "../components/Card";

import img1 from "../assets/images/profile-pictures/ramiro-canevari.png";

export const metadata: Metadata = {
    title: "About | LONDO",
    description: "Productora Audiovisual, hecha por artistas.",
  };

export default function Home() {
  return (
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-5xl font-bold">Somos Londo, somos audio / visuales.</h1>

        <p className="text-2xl "> Con un historial de colaboración con grandes nombres de la industria, como Netflix y Star Plus, hemos tenido el privilegio de aportar nuestro talento 
            al área de arte en proyectos de gran envergadura. Nuestros cortometrajes han competido en festivales de cine, llevando nuestras visiones a nuevas audiencias 
            y reafirmando nuestro compromiso con la calidad y la creatividad.
        <br/><br/>
            Londo nace del deseo de innovar y conectar. Creemos que cada proyecto es una oportunidad para explorar nuevas fronteras y crear algo único. 
            Con un enfoque fresco y dinámico, estamos listos para enfrentar los desafíos del mercado actual y convertir tus ideas en realidades.</p>  
        <div className="m-2 flex align-middle flex-wrap gap-10">
        <ProfileCard image={img1} name="Ramon García" position="CEO / Productor" 
                     description="Técnico de audiovisual, con experiencia en proyectos de gran pitch, desde la ideación hasta la producción. Con un enfoque creativo y un gran interés por la tecnología." 
                     alt="Ramon" 
                     onclick="/about/Ramiro_Canevari" />
        </div>
        </main>
      </div>
  );
}