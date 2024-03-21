import { Montserrat, Bebas_Neue } from 'next/font/google';
import jollyGabbers from '../../../../public/bands/jolly_gabbers.png';
import Image from 'next/image';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function About() {
  return (
    <main className={montserrat.className + ' w-3/4 pt-6 md:pt-8 lg:pt-12'}>
      {/* <div className='pb-1 text-3xl drop-shadow-[3.0px_3.0px_rgba(23,37,84)] md:text-4xl lg:text-5xl'>
        About the Bands
      </div> */}
      <div className='mx-2 max-h-48 overflow-auto rounded-3xl bg-orange-500 pb-4 sm:max-h-96 md:max-h-[400px] lg:max-h-[590px]'>
        <h4
          className={
            bebas.className +
            ' mb-4 rounded-t-2xl border-b-4 border-white bg-blue-800 p-2 text-center text-2xl md:text-3xl lg:mb-6 lg:p-3 lg:text-4xl'
          }
        >
          The Jolly Gabbers
        </h4>
        {/* <div className='flex flex-col items-center justify-around md:flex-row md:items-start lg:flex-row lg:items-start'> */}
        <div className='flex flex-col items-center justify-around'>
          {/* <div className='w-2/3 md:w-1/2 lg:w-1/2'> */}
          <div className='w-1/2'>
            <Image
              src={jollyGabbers}
              className='rounded-3xl shadow-sm shadow-white'
              quality={100}
              alt='The Jolly Gabbers band photo'
            />
          </div>
          {/* <div className='m-2 flex w-5/6 flex-col text-center md:w-5/12 md:text-left md:text-xs lg:w-5/12 lg:text-left lg:text-base'> */}
          <div className='m-2 flex w-5/6 flex-col text-center text-xs md:text-sm lg:text-base'>
            <span className='py-1'>
              Three friends with a love of music, enjoying a pint, and happily
              sharing stories. Gabbing, if you will.
            </span>
            <span className='py-1'>
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
