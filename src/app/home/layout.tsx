import type { Metadata } from 'next';
import { Bebas_Neue, Lilita_One } from 'next/font/google';
import bgBackgroundImg from '../../../public/bowling-green.jpeg';
import crowdPicture from '../../../public/CrowdPicture.png';
import localTalent from '../../../public/LocalTalent.png';
import facebook from '../../../public/Facebook.png';
import '../globals.css';
import Image from 'next/image';
import NavBar from '@/app/ui/NavBar';
import Link from 'next/link';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id='appContainer' className='flex flex-col'>
      <NavBar />
      <div className='flex h-fit flex-col'>
        <div>
          <div className='absolute -z-10'>
            <div className='flex h-1 bg-white'></div>
            <Image
              src={bgBackgroundImg}
              placeholder='blur'
              className='w-screen'
              quality={100}
              alt='Background Image of Bowling Green, Ohio'
            />
            <div className='flex h-2 bg-white'></div>
            <div
              className={
                lilita.className + ' flex h-56 flex-row sm:h-60 md:h-80 lg:h-96'
              }
            >
              <div className='flex h-full w-1/3 flex-col items-center justify-start bg-orange-500 p-4'>
                <span className='py-2 text-center md:text-lg lg:text-2xl'>
                  Amazing Local Talent
                </span>
                <Image
                  src={localTalent}
                  className='max-h-80 w-5/6 max-w-80 rounded-xl'
                  quality={100}
                  alt='Local Talent featured at PorchFest'
                />
              </div>
              <div className='flex h-full w-1/3 flex-col items-center justify-start border-x-2 border-white bg-gray-400 p-4'>
                <span className='py-2 text-center md:text-lg lg:text-2xl'>
                  Great Atmosphere
                </span>
                <Image
                  src={crowdPicture}
                  className='max-h-80 w-5/6 max-w-80'
                  quality={100}
                  alt='Crowd enjoying Porch Fest'
                />
              </div>
              <div className='flex h-full w-1/3 flex-grow flex-col items-center bg-blue-500 p-4'>
                <span className='py-2 text-center md:pb-4 md:text-lg lg:pb-4 lg:text-2xl'>
                  Follow us for the Latest News!
                </span>
                <a href='https://www.facebook.com/BGPorchFest' target='_blank'>
                  <Image
                    src={facebook}
                    className='m-auto max-h-80 w-5/6 max-w-80 rounded-3xl'
                    quality={100}
                    alt='Local Talent featured at PorchFest'
                  />
                </a>
              </div>
            </div>
            <div className='flex h-2 bg-white'></div>
            <div className='flex min-h-36 flex-col items-center justify-center bg-blue-950'>
              <h5>Bowling Green, Ohio</h5>
              <h5>porchfest@gmail.com | 419 575 1234</h5>
              <Link href='/admin'>Admin Page</Link>
            </div>
          </div>
          <div className='flex h-full items-center justify-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
