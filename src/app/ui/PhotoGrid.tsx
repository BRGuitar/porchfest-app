'use client';

import { Gallery, Image } from 'react-grid-gallery';

export default function PhotoGrid() {
  const handleSelect = (index: number, item: Image) => {
    window.open(item.src, '_blank');
  };
  const images = [
    {
      src: '/grid/RamblinRhythm.jpg',
      width: 400,
      height: 320,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Ramblin Rhythm</div>
      ),
    },
    {
      src: '/grid/crowd.jpg',
      width: 320,
      height: 320,
    },
    {
      src: '/grid/JoeBakerBand.jpg',
      width: 320,
      height: 215,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Joe Baker Band</div>
      ),
    },
    {
      src: '/grid/family.jpg',
      width: 320,
      height: 320,
    },
    {
      src: '/grid/CowboyCar.jpg',
      width: 320,
      height: 320,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Cowboy Car</div>
      ),
    },
    {
      src: '/grid/JollyGabbers.jpg',
      width: 320,
      height: 215,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Jolly Gabbers</div>
      ),
    },
    {
      src: '/grid/TheExtras.jpg',
      width: 133,
      height: 200,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>The Extras</div>
      ),
    },
    {
      src: '/grid/CorduroyRoad.jpg',
      width: 200,
      height: 160,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Corduroy Road</div>
      ),
    },
    {
      src: '/grid/RoseCoraPerryAndTheTruthUntold.jpg',
      width: 200,
      height: 163,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>
          Rose Cora Perry & the Truth Untold
        </div>
      ),
    },
    {
      src: '/grid/FreightStreet.jpg',
      width: 200,
      height: 133,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Freight Street</div>
      ),
    },
    {
      src: '/grid/JoeBakerBand_Bassist.jpg',
      width: 200,
      height: 133,
      customOverlay: (
        <div className='bg-white p-2 text-black opacity-75'>Joe Baker Band</div>
      ),
    },
  ];
  return (
    <div className='bg-white'>
      <div className='hidden px-6 pt-2 max-[1136px]:block'>
        <Gallery
          rowHeight={320}
          margin={12}
          enableImageSelection={false}
          images={images}
          onClick={handleSelect}
        />
      </div>
      <div className='hidden px-6 pt-2 min-[1137px]:block min-[1440px]:hidden'>
        <Gallery
          rowHeight={420}
          margin={12}
          images={images}
          onClick={handleSelect}
        />
      </div>
      <div className='hidden px-6 pt-2 min-[1440px]:block min-[1728px]:hidden'>
        <Gallery
          rowHeight={500}
          margin={16}
          enableImageSelection={false}
          images={images}
          onClick={handleSelect}
        />
      </div>
      <div className='hidden px-6 pt-2 min-[1728px]:block'>
        <Gallery
          rowHeight={400}
          margin={16}
          images={images}
          enableImageSelection={false}
          onClick={handleSelect}
        />
      </div>
      <div className='w-full px-10 pb-2 text-end text-lg text-dark-blue lg:text-2xl'>
        2024 Porchfest Photos courtesy of BG FALCON MEDIA
      </div>
    </div>
  );
}
