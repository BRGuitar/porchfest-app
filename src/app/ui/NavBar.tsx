'use client';

import '../globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Lilita_One } from 'next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import porchfestLogo from '../../../public/PorchFest_Logo.png';

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
      'text-2xl rounded-lg px-4 pt-1 mx-1 hover:bg-white hover:text-dark-blue',
      {
        'bg-white text-dark-blue': pathname.match(linkName),
      }
    );
  const hamburgerLinkStyle = (linkName: string) =>
    clsx(
      'text-2xl w-1/4 rounded-t-lg border-2 border-white border-opacity-5 text-center pb-1 pt-2 text-white',
      {
        'bg-base-orange': pathname.match(linkName),
      }
    );

  return (
    <div className='flex flex-col'>
      <div
        id='topNavBar'
        className='flex h-20 flex-row items-center justify-center bg-dark-blue text-white lg:justify-between'
      >
        <div id='logoContainer' className='flex flex-row items-center px-6'>
          <Link href='/home'>
            <Image
              src={porchfestLogo}
              className='h-14 w-14'
              alt='Porchfest logo'
            ></Image>
          </Link>
          <Link
            href='/home'
            id='headerTitle'
            className={
              lilita.className + ' flex items-center py-2 pl-2 text-white'
            }
          >
            <span className='px-1 text-4xl'>PORCHFEST</span>
            <span className='px-1 text-xl'> | MAY 31, 2025</span>
          </Link>
        </div>
        <div className='hidden px-8 lg:block lg:text-white'>
          <Link href='/home' className={linkStyle('/home$')}>
            Home
          </Link>
          <Link href='/home/schedule' className={linkStyle('/home/schedule')}>
            Schedule
          </Link>
          <Link href='/home/map' className={linkStyle('/home/map')}>
            Map
          </Link>
          <Link href='/home/about' className={linkStyle('/home/about')}>
            The Bands
          </Link>
          <Link href='/home/info' className={linkStyle('/home/info')}>
            More Info
          </Link>
        </div>
      </div>
      <div className='flex justify-around bg-dark-blue lg:hidden'>
        <Link
          href='/home/schedule'
          className={'mx-1 ' + hamburgerLinkStyle('/home/schedule')}
        >
          Schedule
        </Link>
        <Link
          href='/home/map'
          className={'mr-1 ' + hamburgerLinkStyle('/home/map')}
        >
          Map
        </Link>
        <Link href='/home/about' className={hamburgerLinkStyle('/home/about')}>
          The Bands
        </Link>
        <Link
          href='/home/info'
          className={'mx-1 ' + hamburgerLinkStyle('/home/info')}
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
