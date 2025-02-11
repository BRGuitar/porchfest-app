import Image from 'next/image';
import porchfestLogo from '../../../public/crowd-background3.png';
import '../globals.css';
import PhotoGrid from '../ui/PhotoGrid';
import Banner from '../ui/Banner';

export default function Home() {
  return (
    <div>
      <div
        id='home-banner'
        className='flex h-80 w-full flex-row justify-center bg-white'
      >
        <div className='flex h-full w-full flex-col items-center justify-center bg-white opacity-85'>
          <h1 className='text-center text-8xl text-dark-blue'>
            Live Music Festival
          </h1>
          {/* <h1 className='text-center text-6xl text-dark-blue'>Eberly Avenue</h1> */}
          <h1 className='text-center text-4xl text-dark-blue'>
            Bowling Green, OHIO
          </h1>
        </div>
      </div>
      <PhotoGrid />
      <Banner />
    </div>
  );
}
