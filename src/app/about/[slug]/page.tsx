import type { Metadata } from "next";
import { Model } from "../Model";
import contacts from "../../public/about.json";

// Define un tipo para los parámetros
type Params = { slug: string };

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  return {
    title: `${params.slug} | LONDO`, // Usa params.slug directamente
    description: "Productora Audiovisual, hecha por artistas.",
  };
}

export default async function Page({
  params,
}: {
  params: Params; // Reutiliza el tipo Params aquí
}) {
  switch (params.slug) {
    case 'Ramiro_Canevari':
      return (
        <Model name={contacts[0].name} position={contacts[0].position} 
        description={contacts[0].description} img={contacts[0].image}
        web={contacts[0].web}  text={contacts[0].text} instagram={contacts[0].instagram}
        twitter={contacts[0].twitter} mail={contacts[0].mail} linkedin={contacts[0].linkedin} github={contacts[0].github} />
      );
    case 'Lucio_Rodriguez':
      return (
        <Model name={contacts[1].name} position={contacts[1].position} 
        description={contacts[1].description} img={contacts[1].image}
        web={contacts[1].web} text={contacts[1].text} instagram={contacts[1].instagram} 
        twitter={contacts[1].twitter} mail={contacts[1].mail} linkedin={contacts[1].linkedin} github={contacts[1].github} />
      );
      case 'Roman_Massacese':
      return (
        <Model name={contacts[2].name} position={contacts[2].position} 
        description={contacts[2].description} img={contacts[2].image}
        web={contacts[2].web} text={contacts[2].text} instagram={contacts[2].instagram} 
        twitter={contacts[2].twitter} mail={contacts[2].mail} linkedin={contacts[2].linkedin} github={contacts[2].github} />
      );
      case 'Ramiro_Deias_Spreng':
      return (
        <Model name={contacts[3].name} position={contacts[3].position} 
        description={contacts[3].description} img={contacts[3].image}
        web={contacts[3].web} text={contacts[3].text} instagram={contacts[3].instagram} 
        twitter={contacts[3].twitter} mail={contacts[3].mail} linkedin={contacts[3].linkedin} github={contacts[3].github} />
      );
    default:
      return (
          <div className="flex flex-col items-center justify-items-center h-full p-8 mt-60 mb-60 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
              <h2 className="text-5xl font-bold">404 | Not Found ¯\_(ツ)_/¯ </h2> {/* Usa params.slug directamente */}
              <p className="text-2xl">Ups! Parece que {params.slug} no existe entre nuestros contactos.</p>
            </main>
          </div>      
          );
  } }