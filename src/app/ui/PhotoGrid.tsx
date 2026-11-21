import Image from 'next/image';

// Justified photo grid: each photo grows in proportion to its aspect ratio so
// every row fills the full width at a roughly even height. Width/height only
// need the right *ratio*, not the real pixel size.
const images = [
  {
    src: '/grid/RamblinRhythm.jpg',
    width: 400,
    height: 320,
    caption: 'Ramblin Rhythm',
  },
  { src: '/grid/crowd.jpg', width: 320, height: 320 },
  {
    src: '/grid/JoeBakerBand.jpg',
    width: 320,
    height: 215,
    caption: 'Joe Baker Band',
  },
  { src: '/grid/family.jpg', width: 320, height: 320 },
  {
    src: '/grid/CowboyCar.jpg',
    width: 320,
    height: 320,
    caption: 'Cowboy Car',
  },
  {
    src: '/grid/JollyGabbers.jpg',
    width: 320,
    height: 215,
    caption: 'Jolly Gabbers',
  },
  {
    src: '/grid/TheExtras.jpg',
    width: 133,
    height: 200,
    caption: 'The Extras',
  },
  {
    src: '/grid/CorduroyRoad.jpg',
    width: 200,
    height: 160,
    caption: 'Corduroy Road',
  },
  {
    src: '/grid/RoseCoraPerryAndTheTruthUntold.jpg',
    width: 200,
    height: 163,
    caption: 'Rose Cora Perry & the Truth Untold',
  },
  {
    src: '/grid/FreightStreet.jpg',
    width: 200,
    height: 133,
    caption: 'Freight Street',
  },
  {
    src: '/grid/JoeBakerBand_Bassist.jpg',
    width: 200,
    height: 133,
    caption: 'Joe Baker Band',
  },
];

const ROW_HEIGHT = 380;

export default function PhotoGrid() {
  return (
    <div className='bg-white'>
      <div className='flex flex-wrap gap-3 px-6 pt-2 after:flex-[10]'>
        {images.map((img) => {
          const ratio = img.width / img.height;
          return (
            <a
              key={img.src}
              href={img.src}
              target='_blank'
              className='group relative block overflow-hidden'
              style={{ flexGrow: ratio, flexBasis: ratio * ROW_HEIGHT * 0.6 }}
            >
              <Image
                src={img.src}
                alt={img.caption ?? 'Porchfest crowd'}
                width={Math.round(ratio * ROW_HEIGHT)}
                height={ROW_HEIGHT}
                sizes='(min-width: 1024px) 33vw, 50vw'
                className='block h-auto w-full object-cover'
                style={{ aspectRatio: ratio }}
              />
              {img.caption && (
                <div className='absolute inset-x-0 bottom-0 bg-white/75 p-2 text-black opacity-0 transition-opacity group-hover:opacity-100'>
                  {img.caption}
                </div>
              )}
            </a>
          );
        })}
      </div>
      <div className='w-full px-10 pb-2 text-end text-lg text-dark-blue lg:text-2xl'>
        Porchfest Photos courtesy of BG FALCON MEDIA
      </div>
    </div>
  );
}
