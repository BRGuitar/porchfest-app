import Image from 'next/image';

type Photo = {
  src: string;
  width: number;
  height: number;
  caption?: string;
};

// Real pixel dimensions, so next/image can reserve the right width for each
// photo before it loads (all photos render at the same height).
const photos: Photo[] = [
  {
    src: '/grid/RamblinRhythm.jpg',
    width: 2001,
    height: 1531,
    caption: 'Ramblin Rhythm',
  },
  { src: '/grid/crowd.jpg', width: 1500, height: 1500 },
  {
    src: '/grid/JoeBakerBand.jpg',
    width: 2001,
    height: 1330,
    caption: 'Joe Baker Band',
  },
  { src: '/grid/family.jpg', width: 1500, height: 1500 },
  {
    src: '/grid/CowboyCar.jpg',
    width: 1500,
    height: 1500,
    caption: 'Cowboy Car',
  },
  {
    src: '/grid/JollyGabbers.jpg',
    width: 2001,
    height: 1330,
    caption: 'Jolly Gabbers',
  },
  {
    src: '/grid/TheExtras.jpg',
    width: 1330,
    height: 2001,
    caption: 'The Extras',
  },
  {
    src: '/grid/CorduroyRoad.jpg',
    width: 2001,
    height: 1609,
    caption: 'Corduroy Road',
  },
  {
    src: '/grid/RoseCoraPerryAndTheTruthUntold.jpg',
    width: 2001,
    height: 1629,
    caption: 'Rose Cora Perry & the Truth Untold',
  },
  {
    src: '/grid/FreightStreet.jpg',
    width: 2001,
    height: 1334,
    caption: 'Freight Street',
  },
  {
    src: '/grid/JoeBakerBand_Bassist.jpg',
    width: 2001,
    height: 1330,
    caption: 'Joe Baker Band',
  },
];

function PhotoStrip({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className='flex shrink-0' aria-hidden={hidden || undefined}>
      {photos.map((photo) => (
        <li key={photo.src} className='shrink-0 pr-3'>
          <a
            href={photo.src}
            target='_blank'
            tabIndex={hidden ? -1 : undefined}
            className='relative block h-56 sm:h-72 lg:h-80'
          >
            <Image
              src={photo.src}
              alt={photo.caption ?? 'Porchfest crowd'}
              width={photo.width}
              height={photo.height}
              sizes='(min-width: 1024px) 420px, (min-width: 640px) 380px, 300px'
              className='h-full w-auto'
            />
            {photo.caption && (
              <span className='absolute bottom-2 left-2 bg-white/80 px-2 py-0.5 text-lg text-dark-blue'>
                {photo.caption}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

// Continuously scrolling photo strip. The list is rendered twice and the track
// slides left by exactly one copy's width, so the loop is seamless. Hovering
// pauses it; with reduced motion enabled it becomes a scrollable row instead.
export default function PhotoGrid() {
  return (
    <section className='bg-white pt-3' aria-label='Photos from past Porchfests'>
      <div className='overflow-hidden motion-reduce:overflow-x-auto'>
        <div className='flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none'>
          <PhotoStrip />
          <div className='flex motion-reduce:hidden'>
            <PhotoStrip hidden />
          </div>
        </div>
      </div>
      <div className='w-full px-10 py-2 text-end text-lg text-dark-blue lg:text-2xl'>
        Porchfest Photos courtesy of BG FALCON MEDIA
      </div>
    </section>
  );
}
