import React, { useState } from 'react';
import A from '../assets/gallery/A.jpg';
import B from '../assets/gallery/B.jpg';
import C from '../assets/gallery/C.jpg';
import D from '../assets/gallery/D.jpg';
import E from '../assets/gallery/E.jpg';
import F from '../assets/gallery/F.jpg';
import G from '../assets/gallery/G.jpg';
import H from '../assets/gallery/H.jpg';
import I from '../assets/gallery/I.jpg';
import J from '../assets/gallery/J.jpg';
import K from '../assets/gallery/K.jpg';
import V from '../assets/gallery/V.jpg';



const Gallery = () => {
  const images = [
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    V
  ];

  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div id="gallery" className="bg-gradient-to-b from-[#29153D] to-[#000000] ">
        <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl pt-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 mx-4">
        {images.map((image, index) => (
          <div key={index} className="w-full p-2 border-4 events_events-card__VuUy3  border-solid border-[#442F47] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 " >
            <div
              className="flex items-center justify-center cursor-pointer "
              onClick={() => openLightbox(image)}
            >
              <img
                src={image}
                alt={`Catalysis ${index}`}
                className="w-323.8 h-243.64"
              />
            </div>
          </div>
        ))}
      </div>

      {lightboxImage && (
  <div
    className="fixed inset-0 flex items-center justify-center z-50"
    onClick={closeLightbox}
  >
    <div className="bg-black bg-opacity-70 absolute inset-0"></div>
    <div className="relative max-w-screen-md">
      <img
        src={lightboxImage}
        alt="Lightbox Catalysis"
        className="max-w-full max-h-full"
      />
      <button
        onClick={closeLightbox}
        className="absolute top-2 right-2 text-white text-1xl p-2 bg-gray-800 opacity-25"
      >
        X
      </button>
    </div>
  </div>
)}


    </div>
  );
};

export default Gallery;