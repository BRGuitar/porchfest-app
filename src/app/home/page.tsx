import Image from 'next/image';
import porchfestLogo from '../../../public/crowd-background3.png';

export default function Home() {
  return (
    <div className='flex w-full flex-row justify-center bg-white'>
      <Image
        src={porchfestLogo}
        className='w-full opacity-20'
        alt='porchfest logo'
      />
    </div>
  );
}
