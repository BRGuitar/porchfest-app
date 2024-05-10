import { Bebas_Neue, Lilita_One } from 'next/font/google';
import bgBackgroundImg from '../../../public/bowling-green.jpeg';
import posterImg from '../../../public/Poster_2024.png';
import facebook from '../../../public/FacebookLogo.png';
import '../globals.css';
import Image from 'next/image';
import NavBar from '@/app/ui/NavBar';
import Link from 'next/link';

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] });
const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const platinumSponsors = ["Arlyn's Good Beer"];
  const goldSponsors = [
    'Juniper Brewing Co.',
    'Newlove Realty',
    'For Keeps',
    'Jeff Dennis (Councilman-at-Large)',
  ];
  const silverSponsors = [
    "Jac & Do's",
    'Jim Palmer Excavating',
    'BGAC',
    'Mary Dennis',
    'Wood County Insurance',
    'Wilson Myers House',
    'Bob Midden',
    'Grounds for Thought',
    'BG Pedal Co.',
    'Rotary',
    'Amy Karlovek',
    "Downtown/Wally's",
    'Howards',
    'Civista Bank',
    "Pagliai's",
    'GAS Disc Golf',
    'Round N Round Gifts',
    'Sunset Bistro',
  ];
  return (
    <div id='appContainer' className='flex flex-col'>
      <NavBar />
      <div className='flex h-fit flex-col'>
        <div>
          <div className='absolute -z-10'>
            <div className='flex h-1 bg-base-orange'></div>
            <div className='flex h-1 bg-white'></div>
            <Image
              src={bgBackgroundImg}
              placeholder='blur'
              className='w-full opacity-75'
              quality={100}
              alt='Background Image of Bowling Green, Ohio'
            />
            <div className='flex h-2 bg-white'></div>
            <div
              className={
                lilita.className + ' flex h-96 min-w-[1080px] flex-row'
              }
            >
              <Link
                href={posterImg.src}
                target='_blank'
                className='flex h-full w-1/6 flex-col justify-center bg-base-orange p-4'
              >
                <span className='pb-2 text-center text-xl text-white drop-shadow-[2.0px_2.0px_rgba(10,67,88)]'>
                  Click to View
                </span>
                <Image
                  src={posterImg}
                  className='max-h-80 w-auto rounded-2xl p-2'
                  quality={100}
                  alt='PorchFest 2024 Official Poster'
                />
              </Link>
              <div className='flex h-full w-2/3 flex-col items-center justify-start border-x-8 border-white bg-dark-blue px-4 py-2'>
                <span className='flex flex-col items-center pt-4'>
                  <div className='flex flex-col items-center pb-6'>
                    <h5 className='mb-2 border-b-2 border-base-orange text-center text-3xl text-white'>
                      Platinum-Level Sponsor
                    </h5>
                    <div
                      className={
                        bebas.className +
                        ' flex flex-row flex-wrap justify-center'
                      }
                    >
                      {platinumSponsors.map((sponsor, index) => {
                        return (
                          <span
                            key={index}
                            className='mx-2 my-1 text-center text-3xl text-white underline decoration-gray-500'
                          >
                            {sponsor}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className='flex flex-col items-center pb-6'>
                    <h5 className='mb-2 border-b-2 border-base-orange text-center text-2xl text-white'>
                      Gold-Level Sponsors
                    </h5>
                    <div
                      className={
                        bebas.className +
                        ' flex flex-row flex-wrap justify-center'
                      }
                    >
                      {goldSponsors.map((sponsor, index) => {
                        return (
                          <span
                            key={index}
                            className='mx-2 my-1 text-center text-xl text-white underline decoration-gray-500'
                          >
                            {sponsor}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className='flex flex-col items-center pb-6'>
                    <h5 className='mb-2 border-b-2 border-base-orange text-center text-xl text-white'>
                      Silver-Level Sponsors
                    </h5>
                    <div
                      className={
                        bebas.className +
                        ' flex flex-row flex-wrap justify-center'
                      }
                    >
                      {silverSponsors.map((sponsor, index) => {
                        return (
                          <span
                            key={index}
                            className='mx-2 my-1 text-center text-base text-white underline decoration-gray-500'
                          >
                            {sponsor}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </span>
              </div>
              <Link
                href='https://www.facebook.com/BGPorchFest'
                target='_blank'
                className='flex h-full w-1/6 flex-grow flex-col justify-center bg-base-orange p-4'
              >
                <span className='pb-2 text-center text-xl text-white drop-shadow-[2.0px_2.0px_rgba(10,67,88)]'>
                  Click to Visit
                </span>
                <Image
                  src={facebook}
                  className='max-h-80 w-auto rounded-2xl p-2'
                  quality={100}
                  alt='PorchFest Facebook Screenshot'
                />
              </Link>
            </div>
            <div className='flex h-2 bg-white'></div>
            <div className='flex min-h-32 flex-col items-center justify-center bg-gray-300 text-dark-blue'>
              <h5>Questions? Contact Us!</h5>
              <h5>porchfest@gmail.com | 419 575 1234</h5>
              <Link href='/admin'>Admin Page</Link>
            </div>
            <div className='flex h-2 bg-white'></div>
          </div>
          <div className='flex h-full items-center justify-center'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
