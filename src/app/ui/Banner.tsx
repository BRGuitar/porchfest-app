'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  const linkStyle = () =>
    clsx(
      'flex h-fit flex-col rounded-sm border-4 lg:border-8 border-white p-2 text-white hover:border-white hover:bg-dark-blue hover:text-white hover:scale-105'
    );
  return (
    <div className='flex flex-col bg-base-orange '>
      <div className='flex flex-row justify-center px-8 py-16'>
        <Link href='/home/about' className={linkStyle()}>
          <Image
            className='rounded-sm border-2 border-white'
            alt='Freight Street Band'
            src='/freightstreet.jpeg'
            height={250}
            width={250}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-5xl'>Band List</div>
        </Link>
        <Link href='/home/map' className={'mx-12 ' + linkStyle()}>
          <Image
            className='rounded-sm border-2 border-white'
            alt='2025 Porchfest Map Thumbnail'
            src='/PorchfestMap_Small.png'
            height={250}
            width={250}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-5xl'>Porch Map</div>
        </Link>
        <Link href='/home/schedule' className={linkStyle()}>
          <Image
            className='rounded-sm border-2 border-white'
            alt='2024 Porchfest Crowd'
            src='/lineup.png'
            height={250}
            width={250}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-5xl'>Schedule</div>
        </Link>
      </div>
    </div>
  );
}
