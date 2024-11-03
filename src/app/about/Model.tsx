interface Props {
  name: string;
  position: string;
  description: string;
  img: string;
  text: string;
  web1: string;

}


export function Model( { name, position, description, img, text, web1 } : Props) {
  return (
    <>
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h2 className="text-5xl font-bold">{name}</h2>
          <p className="text-2xl ">{position}</p>
          <p className="text-2xl ">{description}</p>
          <img src={img} alt={name} />
          <p className="text-2xl ">{text}</p>
          <a href={web1} target="_blank" rel="noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Visitar
            </button>
          </a>
  
        </main>
      </div>
    </>
  )
}