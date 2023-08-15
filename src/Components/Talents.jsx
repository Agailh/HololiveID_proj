// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from 'react-image-gallery';
import ModalImage from "react-modal-image";
import Moona from '../assets/Moona_3d.png'
import Risu from '../assets/Risu_3d.png'
import Iofi from '../assets/Yopi_3d.png'
import Ollie from '../assets/Ollie.png'
import Anya from '../assets/Anya.png'
import Reine from '../assets/reine.png'
import Zeta from '../assets/jetaaaa.png'
import Ela from '../assets/Ela.png'
import Kobo from '../assets/kobo.png'
const Talents = () => {
    const images = [
        {
          original: Moona,
          thumbnail: Moona,
          color:'#B19DDC',
          description: "Moona Hoshinova 🔮",
          subdesc:'Moon Moon~ Moona Dayo!',
          lore:`A college girl who works as a model and idol,  `,
          lore2:`but later got interested to become a VTuber too.`
        
          
        },
        {
          original: Risu,
          thumbnail: Risu,
          color:'#F6BBBB',
          description: "Ayunda Risu 🐿",
          subdesc:'Hewwrroo everyone ~!!”; “Purupuru ganbari Risu ~!”',
          lore:`A squirrel girl from a magical forest.`,
          lore2: `She was lost in the human world, but due to certain`,
          lore3: `circumstances, she ends up living in the home of a kind older sister.`
          
        },
        {
          original: Iofi,
          thumbnail: Iofi,
          color:'#B3EE55',
          description: "Ariani Iofifteen 🎨",
          subdesc:'"IOFORIA~! OBISA!" "Pagi semua! I’m your beloved smart alien ',
          lore:`iofi from hololive Indonesia, nice to meet you!"`,
          lore2: `An alien princess who ran away from home and come to the`,
          lore3: `earth and fell in love with earth’s culture.`
          
        },
        {
            original: Ollie,
            thumbnail: Ollie,
            color:'#B7030e',
            description: "Kureiji Ollie 🧟‍♀️",
            subdesc:'"ZOMBANWA!! SUPER KAWAII ZOMBIE IDOL,  ',
            lore:`KU KU KU KUREIJI OLLIE DESU~!!" A zombie high school girl risen `,
            lore2: `from her grave. She headed home, relying on memories`,
            lore3: `retained from when she was still alive.`
            
          },
        {
            original: Anya,
            thumbnail: Anya,
            color:'#f2c95c',
            description: "Anya Melfisa 🍂 ",
            subdesc:'"Good day! This is Anya Melfissa from hololive ID 2nd Generation."',
            lore:`An ancient weapon known as “Keris,” she was granted human`,
            lore2: `form through a mystical ritual performed by her master.`,
            lore3: `She’s just about always sleeping or playing games.`
            
          },
        {
            original: Reine,
            thumbnail: Reine,
            color:'#0f52ba',
            description: "Pavolia Reine 🦚",
            subdesc:'"Perhatian, sang putri merak yang tertiup angin, aku Pavolia"',
            lore:` Reine dari hololive ID.Lady of the Peafowl. While studying at a `,
            lore2: `magic academy, she was involved in an incident `,
            lore3: `and transferred to the human world.`
            
          },
        {
            original: Zeta,
            thumbnail: Zeta,
            color:'#bab9c3',
            description: "Vestia Zeta 📜",
            subdesc:'She is the mysterious 7th recruit of The Secret Archive Unit ',
            lore:`that has a full license to collect virtual data.Despite her being`,
            lore2: ` a promising rookie, who is also known as codename V.7, she turns`,
            lore3: ` clumsy when things are not going exactly according to the manual.`
            
          },
        {
            original: Ela,
            thumbnail: Ela,
            color:'#ff3d3d',
            description: "Kaela Kovalskia 🔨",
            subdesc:`After taking over her great blacksmithing teacher's forge, she felt  `,
            lore:`a lack of excitement in her life.So, she decided to be free and depart `,
            lore2: `on a journey to find rare smithing materials,one of which was  `,
            lore3: `rumored to be under the building of a certain "idol group" in town.`
            
          },
        {
            original: Kobo,
            thumbnail: Kobo,
            color:'#393464',
            description: "Kobo Kanaeru ☔",
            subdesc:'A carefree girl who lives in the topmost room of a lighthouse, ',
            lore:`she is actually the bloodline of the strongest rain shaman in`,
            lore2: `the area. She has great potential to control rain, but she does`,
            lore3: `not like to do it as a task.`
            
          },
           
      ];
      const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  return (
    <div id='talent' className='bg-gray-100' >
        <h1 className='pl-5 md:pl-[150px] text-4xl font-bold text-[#26C6FF]'>Our Talents</h1>
        <h2 className='pl-5 md:pl-[150px] text-2xl font-semibold text-[#FC8054]'>we have total 9 members in 3 generation</h2>
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-3xl">
        <Gallery
          items={images}
          showPlayButton={false}
          renderItem={(item) => (
            <div className="flex items-center justify-center my-4 p-8 rounded-md shadow-lg " style={{backgroundColor:item.color}}>
              <img
                src={item.thumbnail}
                alt={item.description}
                className="w-1/3 cursor-pointer rounded-lg"
                style={{ backgroundColor: item.color }}
                onClick={() => openLightbox(item.index)}
              />
              <div className="p-4 w-2/3 ml-4" >
                <h2 className="text-lg  mb-2 text-white font-bold md:text-4xl">
                  {item.description}
                </h2>
                <p className="text-gray-600 text-center text-white pt-5">{item.subdesc}</p>
                <p className="text-gray-600 text-center text-white pt-5">{item.lore}</p>
                <p className="text-gray-600 text-center text-white pt-5">{item.lore2}</p>
                <p className="text-gray-600 text-center text-white pt-5">{item.lore3}</p>
              </div>
            </div>
          )}
        />
      </div>
      <ModalImage
        small={
          lightboxImageIndex !== null ? images[lightboxImageIndex].original : ""
        }
        large={
          lightboxImageIndex !== null ? images[lightboxImageIndex].original : ""
        }
        alt={
          lightboxImageIndex !== null
            ? images[lightboxImageIndex].description
            : ""
        }
        onClose={closeLightbox}
      />
    </div>

    </div>
  );
};
 

export default Talents
