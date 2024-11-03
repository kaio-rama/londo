import type { Metadata } from "next";
import { CarouselDefault } from "./components/Carrousel";

export const metadata: Metadata = {
  title: "Inicio | LONDO",
  description: "Productora Audiovisual, hecha por artistas.",
};

export default function Home() {
  return (
    <>
      <CarouselDefault />
      <div className="grid grid-rows justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>
          <h2 className="text-5xl font-bold mb-8">Londo Labs //</h2>
          <p className="text-2xl">
            Crea tu identidad digital con nosotros.
            <br />
            Somos expertos en la creación de contenido audiovisual y digital para empresas y artistas.
            Nos dedicamos a estudiar e impulsar el potencial de tu imagen y presencia en el mundo digital. 
            <br />
            ¡Juntos podemos crear nuevas generaciones de artistas!
          </p>
          <div className="flex flex-col items-center justify-center">
            {/* Uso de Tailwind para ajustar el tamaño del iframe */}
            <iframe
              src="https://player.vimeo.com/video/999323600?h=ed7b6481dc"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] max-w-[1200px]"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </main>
      </div>
    </>
  );
}

