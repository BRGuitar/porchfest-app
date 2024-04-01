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
            <div className='bg-base-orange flex h-1'></div>
            <div className='flex h-1 bg-white'></div>
            <Image
              src={bgBackgroundImg}
              placeholder='blur'
              className='w-screen opacity-75'
              quality={100}
              alt='Background Image of Bowling Green, Ohio'
            />
            <div className='flex h-2 bg-white'></div>
            <div
              className={
                lilita.className + ' flex h-56 flex-row sm:h-60 md:h-80 lg:h-96'
              }
            >
              <Link
                href='/home/about'
                className='bg-base-orange flex h-full w-1/3 flex-col items-center justify-start p-4'
              >
                <span className='py-2 text-center text-white drop-shadow-[2.0px_2.0px_rgba(10,67,88)] md:text-lg lg:text-2xl'>
                  Discover Amazing Local Talent
                </span>
                <Image
                  src={localTalent}
                  className='max-h-80 w-5/6 max-w-80 rounded-xl'
                  quality={100}
                  alt='Local Talent featured at PorchFest'
                />
              </Link>
              <div className='bg-dark-blue flex h-full w-1/3 flex-col items-center justify-start border-x-8 border-white p-4'>
                <span className='py-2 text-center text-white drop-shadow-[2.0px_2.0px_rgba(10,67,88)] md:text-lg lg:text-2xl'>
                  Thank You to our Sponsors!
                </span>
                <span className='flex flex-col items-center pt-4'>
                  <span className='decoration-base-orange p-2 text-center text-3xl text-white underline'>
                    Arlyn's Good Beer
                  </span>
                  <span className='decoration-base-orange p-2 text-center text-3xl text-white underline'>
                    Other Sponsors Here ...
                  </span>
                </span>
              </div>
              <Link
                href='https://www.facebook.com/BGPorchFest'
                target='_blank'
                className='bg-base-orange flex h-full w-1/3 flex-grow flex-col items-center p-4'
              >
                <span className='py-2 text-center text-white drop-shadow-[2.0px_2.0px_rgba(10,67,88)] md:pb-2 md:text-lg lg:pb-2 lg:text-2xl'>
                  Follow Us for the Latest News
                </span>
                <Image
                  src={facebook}
                  className='m-auto max-h-80 w-5/6 max-w-80 rounded-3xl'
                  quality={100}
                  alt='PorchFest Facebook Screenshot'
                />
                {/* </a> */}
              </Link>
            </div>
            <div className='flex h-2 bg-white'></div>
            <div className='bg-dark-blue flex min-h-36 flex-col items-center justify-center text-white'>
              <h5>Questions? Contact Us!</h5>
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
