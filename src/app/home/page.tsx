import Image from 'next/image';
import porchfestLogo from '../../../public/crowd-background3.png';
import '../globals.css';

export default function Home() {
  return (
    <div
      id='home-banner'
      className='flex h-96 w-full flex-row justify-center bg-white'
    >
      {/* <Image
        src={porchfestLogo}
        className='w-full opacity-20'
        alt='porchfest logo'
      /> */}
      <div className='flex h-full w-full flex-col items-center justify-center bg-white opacity-80'>
        {/* <h1 className='text-center text-8xl text-dark-blue'>Porchfest</h1> */}
        <h1 className='text-center text-8xl text-dark-blue'>
          Live Music Festival
        </h1>
        <h1 className='text-center text-6xl text-dark-blue'>Eberly Avenue</h1>
        <h1 className='text-center text-2xl text-dark-blue'>
          Bowling Green, OH
        </h1>
      </div>
    </div>
  );
}
