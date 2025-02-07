'use client';

import '../globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lilita_One } from 'next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import porchfestLogo from '../../../public/PorchFest_Logo.png';
import { link } from 'fs';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  { name: '2024 Schedule', href: '/schedule' },
  { name: 'More Info', href: '/info' },
  { name: 'About the Bands', href: '/about' },
];

const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

export default function NavBar() {
  const pathname = usePathname();
  const linkStyle = (linkName: string) =>
    clsx('text-2xl rounded-lg px-6 pt-1 mx-1 hover:bg-white hover:text-black', {
      'bg-white text-black': pathname.match(linkName),
    });
  return (
    <div
      id='topNavBar'
      className='flex h-20 flex-row items-center justify-between bg-dark-blue text-white'
    >
      <div id='logoContainer' className='flex flex-row items-center px-6'>
        <Link href='/home'>
          <Image
            src={porchfestLogo}
            className='h-14 w-14'
            alt='porchfest logo'
          ></Image>
        </Link>
        <div
          id='headerTitle'
          className={
            lilita.className + ' flex items-center py-2 pl-2 text-white'
          }
        >
          <span className='px-1 text-4xl'>PORCHFEST</span>
          <span className='px-1 text-xl'> | MAY 31, 2025</span>
        </div>
      </div>
      <div className='px-12'>
        <Link href='/home/schedule' className={linkStyle('/home/schedule')}>
          2024 Schedule
        </Link>
        <Link href='/home/map' className={linkStyle('/home/map')}>
          Map
        </Link>
        <Link href='/home/info' className={linkStyle('/home/info')}>
          More Info
        </Link>
        <Link href='/home/about' className={linkStyle('/home/about')}>
          The Bands
        </Link>
      </div>
    </div>
  );
}
