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
            {children}
            {/* <div className='flex h-1 bg-base-orange'></div> */}
            <PhotoGrid />
            <PlatinumSponsorTiles />
            <div className='flex h-2 bg-white'></div>
            <div className='flex min-h-28 flex-col items-center justify-center bg-gray-300 text-lg text-dark-blue'>
              <h5>Any Questions? Shoot us an Email!</h5>
              <h5>brian_young3@yahoo.com</h5>
            </div>
            <div className='flex h-2 bg-white'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
