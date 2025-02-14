import { Montserrat } from 'next/font/google';
import { Lilita_One } from 'next/font/google';
import { Bebas_Neue } from 'next/font/google';
import mapImg from '../../../../public/PorchfestMap.png';
import Image from 'next/image';
import Link from 'next/link';
import '../../globals.css';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });

export default function Map() {
  return (
    <main className='w-full'>
      <div className='flex flex-col items-center'>
        <div
          id='home-banner'
          className='flex h-72 w-full flex-row justify-center bg-white'
        >
          <div className='flex h-full w-full flex-col items-center justify-center bg-white opacity-85'>
            <h1 className='text-center text-8xl text-dark-blue'>
              2024 Official Map
            </h1>
            <h1 className='text-center text-2xl text-dark-blue'>
              (Eberly Avenue and the surrounding area)
            </h1>
          </div>
        </div>
        <div className='m-8 rounded-3xl border-t-4 border-base-orange bg-white'>
          <Link href={mapImg.src} target='_blank'>
            <Image
              src={mapImg}
              className='m-auto rounded-2xl px-4 py-2'
              quality={100}
              alt='2024 Porchfest Map'
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
