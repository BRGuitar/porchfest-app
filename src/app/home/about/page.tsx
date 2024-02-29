import { Montserrat } from 'next/font/google';
import jollyGabbers from '../../../../public/bands/jolly_gabbers.png';
import Image from 'next/image';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });

export default function About() {
  return (
    <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
      <div className='pb-1 text-3xl drop-shadow-[3.0px_3.0px_rgba(23,37,84)] md:text-4xl lg:text-5xl'>
        About the Bands
      </div>
      <div className='text-m max-h-48 overflow-auto rounded-3xl border-8 border-white bg-gradient-to-b from-sky-800 to-blue-950 text-xs sm:max-h-64 md:max-h-80 lg:max-h-96 lg:text-base'>
        <div className='flex flex-col items-center lg:flex-row lg:items-start'>
          <div className='lg:w-1/2'>
            <Image
              src={jollyGabbers}
              className='rounded-2xl p-2'
              quality={100}
              alt='The Jolly Gabbers band photo'
            />
          </div>
          <div className='flex flex-col p-4 lg:w-1/2'>
            <span className='text-xl md:text-2xl lg:text-2xl'>
              The Jolly Gabbers
            </span>
            <span className='py-1 text-xs md:text-sm lg:text-sm'>
              Three friends with a love of music, enjoying a pint, and happily
              sharing stories. Gabbing, if you will.
            </span>
            <span className='py-1 text-xs md:text-sm lg:text-sm'>
              From The Jolly Gabbers you will hear renditions of Irish,
              Scottish, British, American and other folk songs both classic and
              contemporary, well known and obscure. With an emphasis on
              harmonies and unique arrangements. Sláinte!
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
