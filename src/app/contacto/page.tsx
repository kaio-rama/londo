import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacto | LONDO",
    description: "Productora Audiovisual, hecha por artistas.",
  };

export default function Home() {
  return (
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h2 className="text-5xl font-bold">Conéctate Con Nosotros.</h2> 

        <p className="text-2xl "> Estamos ansiosos por colaborar con empresas de la región y España, aportando nuestra experiencia y pasión por la creación audiovisual. 
            En Londo, cada proyecto es una nueva historia por contar. Permítenos ser tus socios en la creación de contenido que no solo entretenga, sino que también inspire.

            ¡Juntos podemos llevar tus ideas a la pantalla!
        </p>

        </main>
      </div>
  );
}