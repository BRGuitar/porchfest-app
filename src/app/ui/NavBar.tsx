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
    clsx('text-xl rounded-lg px-6 pt-1 hover:bg-white hover:text-black', {
      'bg-white text-black': pathname.match(linkName),
    });
  return (
    <div
      id='topNavBar'
      className='flex h-36 flex-row items-end justify-around bg-dark-blue py-1 pb-2 text-white'
    >
      <Link href='/home' className={linkStyle('/home$')}>
        Home
      </Link>

      <Link href='/home/schedule' className={linkStyle('/home/schedule')}>
        2024 Schedule
      </Link>
      <div id='logoContainer' className='flex flex-row items-center'>
        <Image
          src={porchfestLogo}
          className='h-32 w-32 pt-1'
          alt='porchfest logo'
        ></Image>
        <div
          id='headerTitle'
          className={
            lilita.className +
            ' flex flex-col items-center justify-around py-4 pl-2 text-white'
          }
        >
          <span className='text-4xl'>Live Music Festival</span>
          <span className='text-2xl'>&mdash; BOWLING GREEN, OH &mdash;</span>
          <span className='text-2xl'>On & Around Eberly Avenue</span>
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
