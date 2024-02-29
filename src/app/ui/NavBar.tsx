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
    clsx(
      'text-xs rounded-lg px-2 md:px-3 lg:px-6 pt-1 hover:bg-white hover:text-blue-900 md:text-lg lg:text-xl',
      {
        'bg-white text-blue-900': pathname === linkName,
      }
    );
  return (
    <div
      id='topNavBar'
      className='md:h-34 flex flex-row items-end justify-around bg-gradient-to-b from-sky-500 to-blue-950 pb-1 lg:h-36 lg:pb-2'
    >
      <Link href='/home' className={linkStyle('/home')}>
        Home
      </Link>

      <Link href='/home/schedule' className={linkStyle('/home/schedule')}>
        2024 Schedule
      </Link>
      <div id='logoContainer' className='flex flex-row items-center'>
        <Image
          src={porchfestLogo}
          className='h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32'
          alt='porchfest logo'
        ></Image>
        <div
          id='headerTitle'
          className={
            lilita.className +
            ' flex flex-col items-center justify-around py-4 pl-2'
          }
        >
          <span className='text-lg md:text-2xl lg:text-4xl'>
            Live Music Festival
          </span>
          <span className='text-xs md:text-lg lg:text-2xl'>
            &mdash; BOWLING GREEN, OH &mdash;
          </span>
          <span className='text-xs md:text-lg lg:text-2xl'>
            Coming to a Porch near you.
          </span>
        </div>
      </div>
      <Link href='/home/info' className={linkStyle('/home/info')}>
        More Info
      </Link>
      <Link href='/home/about' className={linkStyle('/home/about')}>
        About the Bands
      </Link>
    </div>
  );
}
