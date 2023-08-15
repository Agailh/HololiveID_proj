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
          description: "Moona Hoshinova",
          subdesc:'Moon Moon~ Moona Dayo!',
          lore:`A college girl who works as a model and idol, but later got interested to become a VTuber too.
          On some rare occasion, Moona’s stream might be visited by Moona’s “another personality,”Hoshinova. That has deeper big sister-like voices and sadistic tendesion. Pay attention to her streams to meet Hoshinova!`
          
        },
        {
          original: Risu,
          thumbnail: Risu,
          color:'#F6BBBB',
          description: "Description for Image 2",
        },
        {
          original: Iofi,
          thumbnail: Iofi,
          color:'#B3EE55',
          description: "Description for Image 3",
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
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <Gallery
        items={images}
        showPlayButton={false}
        renderItem={(item) => (
          <div className="flex w-full">
            <img src={item.thumbnail} alt={item.description} className="w-1/3  cursor-pointer" style={{backgroundColor:item.color}} onClick={() => openLightbox(item.index)} />
            <div className="p-4 w-2/3 bg-white  grid grid-cols-1" style={{backgroundColor:item.color}} >
              <h2 className="text-lg font-semibold mb-2">{item.description}</h2>
              <p className="text-gray-600 overflow-hidden whitespace-pre-wrap">{item.lore}</p>
            </div>
          </div>
        )}
      />
      <ModalImage
        small={lightboxImageIndex !== null ? images[lightboxImageIndex].original : ""}
        large={lightboxImageIndex !== null ? images[lightboxImageIndex].original : ""}
        alt={lightboxImageIndex !== null ? images[lightboxImageIndex].description : ""}
        onClose={closeLightbox}
      />
    </div>
  );
};
 

export default Talents