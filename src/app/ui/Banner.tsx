'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import posterImg from '../../../public/2025_Poster.png';

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
            height={200}
            width={200}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-4xl lg:text-5xl'>Band List</div>
        </Link>
        <Link href='/home/map' className={'ml-6 ' + linkStyle()}>
          <Image
            className='rounded-sm border-2 border-white'
            alt='2025 Porchfest Map Thumbnail'
            src='/PorchfestMap_Small.png'
            height={200}
            width={200}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-4xl lg:text-5xl'>Porch Map</div>
        </Link>
        <Link href='/home/schedule' className={'mx-6 ' + linkStyle()}>
          <Image
            className='rounded-sm border-2 border-white'
            alt='2024 Porchfest Crowd'
            src='/lineup.png'
            height={200}
            width={200}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-4xl lg:text-5xl'>Schedule</div>
        </Link>
        <Link href={posterImg.src} target='_blank' className={linkStyle()}>
          <Image
            className='rounded-sm border-2 border-white'
            alt='2025 Porchfest Poster'
            src='/2025_Poster_Preview.png'
            height={200}
            width={200}
          />
          <div className='h-5 p-1 text-xl'>2025</div>
          <div className='p-1 text-4xl lg:text-5xl'>Poster</div>
        </Link>
      </div>
    </div>
  );
}
