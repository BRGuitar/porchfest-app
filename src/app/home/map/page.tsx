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
    <main className={montserrat.className + ' main-container pt-12'}>
      <div className='flex flex-col items-center'>
        <h4 className={bebas.className + ' text-6xl text-white drop-shadow-xl'}>
          2024 Neighborhood Map
        </h4>
        <div className='mx-2 w-3/4 rounded-3xl border-t-4 border-base-orange bg-white'>
          <Link href={mapImg.src} target='_blank'>
            <Image
              src={mapImg}
              className='m-auto rounded-2xl px-4 py-2'
              quality={100}
              alt='PorchFest Facebook Screenshot'
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
