import Image from "next/image";
import { IconTwitter, IconInstagram, IconGithub, IconLinkedin, IconMail, IconBackArrow } from "../components/Icons";
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

export function Model( { name, position, description, img, text, instagram, twitter, mail, linkedin, github } : Props) {
  return (
    <>
    <div className="m-8 mt-20 bg-gray-900/20 rounded-lg p-16">
    <main className="flex flex-col gap-12 row-start-2 items-start">
    <Link href="/about" className="text-blue-gray-100 hover:text-blue-gray-300 transition-all">
        <IconBackArrow/>
    </Link>
        
          <div className="flex flex-col md:flex-row-reverse gap-8 row-start items-center ">
          <Image src={img} alt={name} width={400} height={400} className="w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"/>
          <div>
            <h2 className="text-5xl font-bold">{name}</h2>
            <p className="text-3xl italic">{position}</p>
            <p className="text-2xl pt-2 text-gray-300">{description}</p>  
          </div>        
          </div> 
          <p className="text-2xl ">{text}</p>

          <div className="flex flex-row  mt-20 gap-8 row-start-2 items-center sm:items-start">

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