import { Montserrat } from 'next/font/google';
import { Lilita_One } from 'next/font/google';
import mapImg from '../../../../public/PorchfestMap.png';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '500', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function Map() {
  return (
    <main className={montserrat.className + ' w-3/4 pt-12'}>
      <div className='mx-2 overflow-auto rounded-3xl bg-white'>
        <h6
          className={
            lilita.className +
            ' mx-4 mt-4 rounded-t-xl bg-base-orange p-2 text-center text-2xl text-white'
          }
        >
          2024 Neighborhood Map
        </h6>
        <Link href={mapImg.src} target='_blank'>
          <Image
            src={mapImg}
            className='m-auto rounded-2xl px-4 py-2'
            quality={100}
            alt='PorchFest Facebook Screenshot'
          />
        </Link>
      </div>
    </main>
  );
}
