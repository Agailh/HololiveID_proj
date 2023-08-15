// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery from 'react-image-gallery';
import ModalImage from "react-modal-image";
import Moona from '../assets/Moona_3d.png'
import Risu from '../assets/Risu_3d.png'
import Iofi from '../assets/Yopi_3d.png'

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
      ];
      const [lightboxImageIndex, setLightboxImageIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  return (
    <div id='talents' className='bg-gray-100' >
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
                <p className="text-gray-600 text-center pt-5">{item.subdesc}</p>
                <p className="text-gray-600 text-center pt-5">{item.lore}</p>
                <p className="text-gray-600 text-center pt-5">{item.lore2}</p>
                <p className="text-gray-600 text-center pt-5">{item.lore3}</p>
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
