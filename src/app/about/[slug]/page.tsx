import type { Metadata } from "next";
import { Model } from "../Model";

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

  if (params.slug === 'ramon') {
    return (
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-5xl font-bold">Ramon García</h2>
          <p className="text-2xl ">Técnico de audiovisual, con experiencia en proyectos de gran pitch, desde la ideación hasta la producción. Con un enfoque creativo y un gran interés por la tecnología.</p>
  
        </main>
      </div>
    );
  } else if (params.slug === 'Ramiro_Canevari') {
    return (
      <Model name="Ramiro Canevari" position="CEO / Productor" 
      description="Técnico de audiovisual, con experiencia en proyectos de gran pitch, desde la ideación hasta la producción. Con un enfoque creativo y un gran interés por la tecnología." 
      img="https://gravatar.com/image.jpg"
      text="Lore impsum impsumimpsum Modena, dirigido por Lucio Rodriguez y Roman Massacese. Proyecto realizado e impulsado desde Londo, con un enfoque 
      creativo y una idea trabajada de manera integral."
      web1="https://gravatar.com/exactlyland1c83fe7507" />
    );
  }  else {
    return (
      <div className="flex flex-col items-center justify-items-center h-full p-8 mt-60 mb-60 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-5xl font-bold">404 | Not Found ¯\_(ツ)_/¯ </h2> {/* Usa params.slug directamente */}
          <p className="text-2xl">Ups! Parece que {params.slug} no existe entre nuestros contactos.</p>
        </main>
      </div>
    );
  }
}
