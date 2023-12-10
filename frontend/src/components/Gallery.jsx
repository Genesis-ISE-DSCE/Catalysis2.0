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
import L from '../assets/gallery/L.jpg';
import A2 from '../assets/gallery/A.webp';
import B2 from '../assets/gallery/B.webp';
import C2 from '../assets/gallery/C.webp';
import D2 from '../assets/gallery/D.webp';
import E2 from '../assets/gallery/E.webp';
import F2 from '../assets/gallery/F.webp';
import G2 from '../assets/gallery/G.webp';
import H2 from '../assets/gallery/H.webp';
import I2 from '../assets/gallery/I.webp';
import J2 from '../assets/gallery/J.webp';
import K2 from '../assets/gallery/K.webp';
import L2 from '../assets/gallery/L.webp';
import A1 from '../assets/gallery/A.avif';
import B1 from '../assets/gallery/B.avif';
import C1 from '../assets/gallery/C.avif';
import D1 from '../assets/gallery/D.avif';
import E1 from '../assets/gallery/E.avif';
import F1 from '../assets/gallery/F.avif';
import G1 from '../assets/gallery/G.avif';
import H1 from '../assets/gallery/H.avif';
import I1 from '../assets/gallery/I.avif';
import J1 from '../assets/gallery/J.avif';
import K1 from '../assets/gallery/K.avif';
import L1 from '../assets/gallery/L.avif';
import Asmall from '../assets/gallery/Asmall.jpg';
import Bsmall from '../assets/gallery/Bsmall.jpg';
import Csmall from '../assets/gallery/Csmall.jpg';
import Dsmall from '../assets/gallery/Dsmall.jpg';
import Esmall from '../assets/gallery/Esmall.jpg';
import Fsmall from '../assets/gallery/Fsmall.jpg';
import Gsmall from '../assets/gallery/Gsmall.jpg';
import Hsmall from '../assets/gallery/Hsmall.jpg';
import Ismall from '../assets/gallery/Ismall.jpg';
import Jsmall from '../assets/gallery/Jsmall.jpg';
import Ksmall from '../assets/gallery/Ksmall.jpg';
import Lsmall from '../assets/gallery/Lsmall.jpg';
 
const Gallery = () => {

  const images = [
    { large: A, small: Asmall, avif: A1, webp: A2 },
    { large: B, small: Bsmall, avif: B1, webp: B2 },
    { large: C, small: Csmall, avif: C1, webp: C2  },
    { large: D, small: Dsmall, avif: D1, webp: D2  },
    { large: E, small: Esmall, avif: E1, webp: E2  },
    { large: F, small: Fsmall, avif: F1, webp: F2  },
    { large: G, small: Gsmall, avif: G1, webp: G2  },
    { large: H, small: Hsmall, avif: H1, webp: H2  },
    { large: I, small: Ismall, avif: I1, webp: I2  },
    { large: J, small: Jsmall, avif: J1, webp: J2  },
    { large: K, small: Ksmall, avif: K1, webp: K2  },
    { large: L, small: Lsmall, avif: L1, webp: L2  },
  ];

  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const scalingImage = {
   height: "243.64px",
   width: "366px",
  };

  return (
    <div id="gallery" className="bg-gradient-to-b from-[#29153D] to-[#000000] ">
        <h1 className="font-bold text-[#E5F2FF] text-center text-4xl md:text-4xl lg:text-5xl pt-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 mx-4">
        {images.map((image, index) => (
          <div key={index} className="w-full p-2 border-4 events_events-card__VuUy3 border-solid border-[#442F47] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" >
            <div
              className="flex items-center justify-center cursor-pointer "
              onClick={() => openLightbox(image.large)}
            >

              <picture>
                <source type="image/avif" srcSet = {image.avif}/>
                <source type="image/webp" srcSet={image.webp}/>
                <img 
                      src={image.small}
                      alt={`Catalysis ${index}`}
                      style = {scalingImage}
                      loading="lazy"
                      onLoad={(e)=> {
                      e.target.src = image.large;
                      }}
                    />
              </picture>
                
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
        loading="lazy"
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