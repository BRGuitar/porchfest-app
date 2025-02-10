import { Bebas_Neue, Lilita_One } from 'next/font/google';
import bgBackgroundImg from '../../../public/bowling-green.jpeg';
import posterImg from '../../../public/Poster_2024.png';
import facebook from '../../../public/FacebookLogo.png';
import '../globals.css';
import Image from 'next/image';
import NavBar from '@/app/ui/NavBar';
import Link from 'next/link';
import PhotoGrid from '../ui/PhotoGrid';
import PlatinumSponsorTiles from '../ui/PlatinumSponsors';
import Banner from '../ui/Banner';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <div className='flex h-fit flex-col'>
        <div>
          <div className=''>
            <div className='flex h-1 bg-base-orange'></div>
            <div className='flex h-1 bg-white'></div>
            <div className='flex justify-center'>{children}</div>
            <div className='flex h-2 bg-white'></div>
            <PlatinumSponsorTiles />
            <div className='flex min-h-28 flex-col items-center justify-center bg-white p-6 text-lg text-dark-blue'>
              <Link
                href='https://www.facebook.com/BGPorchFest'
                target='_blank'
                className='flex flex-col items-center hover:opacity-80'
              >
                <Image
                  className='mb-2 mt-4 bg-white'
                  alt='facebook logo'
                  src='/facebook.jpeg'
                  height={60}
                  width={60}
                ></Image>
                <h5 className='pb-6 text-2xl lg:text-3xl'>
                  Follow us on Facebook for the Latest Porchfest news!
                </h5>
              </Link>
              <div className='h-5'>Questions?</div>
              <div className='h-5'>brian_young3@yahoo.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
