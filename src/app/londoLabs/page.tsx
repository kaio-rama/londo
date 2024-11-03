import React from 'react'
import { Video } from '../components/Video'

export default function LondoLabs() {
  return (
    <>
      <div className="pb-20">
        <main>
        <div className='m-10'>
            <h1 className="text-5xl font-bold mb-8">Londo // AudioVisual</h1>
            <p className="text-2xl">
                Producimos contenido audiovisual de alta calidad y creatividad.
                <br />
                Combinamos el conocimiento técnico y la creatividad de nuestros artistas para llevar adelante nuestras ideas y los proyectos que se nos proponen.
                <br />
                Algunos de los ultimos proyectos que hemos realizado son:
                
            </p>
          </div>
                    <Video src='https://player.vimeo.com/video/999323600?h=ed7b6481dc' 
                            title='RIO SECO, CORTOMETRAJE (2024)'
                            text={`Producimos nuestras propias historias, como por ejemplo Rio Seco - 2024, dirigido por Rama Canevari y producido por Londo & Subsuelo. Actualmente participando
                                en multiples festivales hispanoparlantes tanto en Latinoamérica como Europa.`} 
                            directionleft={true}
                            directionright={false}
                            />
                    <Video src='https://player.vimeo.com/video/1013174478?h=f060aed7b7' 
                        title='QUASAR, LARA MODENA (2024)' 
                        text={`Videoclip realizado en conjunto con la artista Lara Modena, dirigido por Lucio Rodriguez y Roman Massacese. Proyecto realizado e impulsado desde Londo, 
                            con un enfoque creativo y una idea trabajada de manera integral.`}
                        directionleft={false}
                        directionright={true}
                        />
                    <Video src='https://player.vimeo.com/video/999859938?h=723aa7f2b8' 
                        title='VIVO, DENECH (2023)' 
                        text={`Videoclip realizado para Denech. Lore impsum impsumimpsum Modena, dirigido por Lucio Rodriguez y Roman Massacese. Proyecto realizado e impulsado desde Londo, 
                            con un enfoque creativo y una idea trabajada de manera integral.`}
                        directionleft={true}
                        directionright={false}
                        />
                    <Video src='https://player.vimeo.com/video/999328715?h=893250785b' 
                        title='Producciones originales' 
                        text={`Producimos nuestras propias historias, como por ejemplo Rio Seco - 2024, dirigido por Rama Canevari y producido por Londo & Subsuelo. Actualmente participando
                            en multiples festivales hispanoparlantes tanto en Latinoamérica como Europa.`} 
                        directionleft={false}
                        directionright={true} 
                        />
        </main>
      </div>
    </>
  )
}

