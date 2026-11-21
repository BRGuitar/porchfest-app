'use client';

import '../globals.css';
import Link, { useLinkStatus } from 'next/link';
import { usePathname } from 'next/navigation';
import { Lilita_One } from 'next/font/google';
import clsx from 'clsx';
import Image from 'next/image';
import porchfestLogo from '../../../public/PorchFest_Logo.png';

const lilita = Lilita_One({ weight: '400', subsets: ['latin'] });

// Must render inside a <Link>. Pulses the label from the moment it's clicked
// until the new page is ready, so a slow load never looks like a dead click.
function NavLabel({ children }: { children: React.ReactNode }) {
  const { pending } = useLinkStatus();
  return (
    <span className={clsx(pending && 'animate-pulse opacity-60')}>
      {children}
    </span>
  );
}

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
      'text-2xl w-1/4 rounded-t-lg border-2 border-white/5 text-center pb-1 pt-2 text-white',
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
            <span className='px-1 text-xl'> | MAY 30, 2026</span>
          </Link>
        </div>
        <div className='hidden px-8 lg:block lg:text-white'>
          <Link href='/home' className={linkStyle('/home$')}>
            <NavLabel>Home</NavLabel>
          </Link>
          <Link href='/home/schedule' className={linkStyle('/home/schedule')}>
            <NavLabel>Schedule</NavLabel>
          </Link>
          <Link href='/home/map' className={linkStyle('/home/map')}>
            <NavLabel>Map</NavLabel>
          </Link>
          <Link href='/home/about' className={linkStyle('/home/about')}>
            <NavLabel>The Bands</NavLabel>
          </Link>
          <Link href='/home/info' className={linkStyle('/home/info')}>
            <NavLabel>More Info</NavLabel>
          </Link>
        </div>
      </div>
      <div className='flex justify-around bg-dark-blue lg:hidden'>
        <Link
          href='/home/schedule'
          className={'mx-1 ' + hamburgerLinkStyle('/home/schedule')}
        >
          <NavLabel>Schedule</NavLabel>
        </Link>
        <Link
          href='/home/map'
          className={'mr-1 ' + hamburgerLinkStyle('/home/map')}
        >
          <NavLabel>Map</NavLabel>
        </Link>
        <Link href='/home/about' className={hamburgerLinkStyle('/home/about')}>
          <NavLabel>The Bands</NavLabel>
        </Link>
        <Link
          href='/home/info'
          className={'mx-1 ' + hamburgerLinkStyle('/home/info')}
        >
          <NavLabel>More Info</NavLabel>
        </Link>
      </div>
    </div>
  );
}
