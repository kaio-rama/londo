import type { Metadata } from "next";
import { ProfileCard } from "../components/Card";
import contacts from "../public/about.json";
import Image from "next/image";
import logo from "../assets/images/londo-logo.png";

export const metadata: Metadata = {
  title: "About | LONDO",
  description: "Productora Audiovisual, hecha por artistas.",
};

export default function Home() {
  return (
    <> 
      <div className="relative w-full h-[300px] sm:h-[400px] bg-black">
        <Image 
          src={logo} 
          alt="Londo" 
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <div className="p-8 pb-20 sm:p-24 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-14 items-center sm:items-start">
          <h1 className="text-5xl font-bold">  // About </h1>

          <p className="text-2xl "> 
            Con un historial de colaboración con grandes nombres de la industria, como Netflix y Star Plus, hemos tenido el privilegio de aportar nuestro talento 
            al área de arte en proyectos de gran envergadura. Nuestros cortometrajes han competido en festivales de cine, llevando nuestras visiones a nuevas audiencias 
            y reafirmando nuestro compromiso con la calidad y la creatividad.
            <br/><br/>
            Londo nace del deseo de innovar y conectar. Creemos que cada proyecto es una oportunidad para explorar nuevas fronteras y crear algo único. 
            Con un enfoque fresco y dinámico, estamos listos para enfrentar los desafíos del mercado actual y convertir tus ideas en realidades.
          </p>  
        </main>
      </div>
      
      <div className="flex gap-12 flex-wrap justify-center">
        {contacts.map((contact) => (
          <ProfileCard 
            key={contact.id} 
            image={contact.image} 
            name={contact.name} 
            position={contact.position}
            description={contact.description} 
            alt={contact.name} 
            onclick={`/about/${contact.id}`} 
          />
        ))}
      </div>
    </>
  );
}