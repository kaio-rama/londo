import Image from "next/image";
import { IconTwitter, IconInstagram, IconGithub, IconLinkedin, IconMail } from "../components/Icons";
import Link from "next/link";

interface Props {
  name: string;
  position: string;
  description: string;
  img: string;
  text: string;
  web: string;
  instagram: string;
  twitter: string;
  mail: string;
  linkedin: string;
  github: string;

}

export function Model( { name, position, description, img, text, web, instagram, twitter, mail, linkedin, github } : Props) {
  return (
    <>
    <div className="widh-full m-5 mt-20 bg-gray-900/20 rounded-lg p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-row gap-8 row-start-2 items-center sm:items-start">
          <div>
            <h2 className="text-5xl font-bold">{name}</h2>
            <p className="text-3xl italic">{position}</p>
            <p className="text-2xl pt-2 text-gray-300">{description}</p>  
          </div>        
          <Image src={img} alt={name} width={1200} height={400} />
          </div> 
          <p className="text-2xl ">{text}</p>

          <div className="flex flex-row  mt-20 gap-8 row-start-2 items-center sm:items-start">
          <a href={web} target="_blank" rel="noreferrer">
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-8 rounded"> 
              Visitar
            </button>
          </a>

          <Link href={twitter} style={{cursor: "pointer"}}>
            <IconTwitter />
          </Link>
          <Link href={instagram} style={{cursor: "pointer"}}>
            <IconInstagram />
          </Link>
          <Link href={mail} style={{cursor: "pointer"}}>
            <IconMail />
          </Link>
          <Link href={linkedin} style={{cursor: "pointer"}}>
            <IconLinkedin />
          </Link>
          <Link href={github} style={{cursor: "pointer"}}>
            <IconGithub />
          </Link>

          </div>
        </main>
      </div>
    </>
  )
}