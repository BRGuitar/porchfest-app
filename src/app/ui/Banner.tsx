'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className='flex flex-row justify-around  bg-base-orange p-12 px-40'>
      <Link
        href='/home/about'
        className='flex flex-col rounded-sm border-4 border-gray-200 bg-white p-4 text-dark-blue hover:border-white hover:bg-dark-blue hover:text-white'
      >
        <Image
          className='rounded-sm border-2 border-white'
          alt='Bands'
          src='/freightstreet.jpeg'
          height={250}
          width={250}
        />
        <div className='pt-2 text-center text-2xl'>About the Bands</div>
      </Link>
      <Link
        href='/home/map'
        className='flex flex-col rounded-sm border-4 border-gray-200 bg-white p-4 text-dark-blue hover:border-white hover:bg-dark-blue hover:text-white'
      >
        <Image
          className='rounded-sm border-2 border-white'
          alt='Bands'
          src='/PorchfestMap_Small.png'
          height={250}
          width={250}
        />
        <div className='pt-2 text-center text-2xl'>Festival Map</div>
      </Link>
      <Link
        href='/home/schedule'
        className='flex flex-col rounded-sm border-4 border-gray-200 bg-white p-4 text-dark-blue hover:border-white hover:bg-dark-blue hover:text-white'
      >
        <Image
          className='rounded-sm border-2 border-white'
          alt='Bands'
          src='/lineup.png'
          height={250}
          width={250}
        />
        <div className='pt-2 text-center text-2xl'>2025 Schedule</div>
      </Link>
    </div>
  );
}
